import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Multi-Device Realtime Snapshot Server Plugin
function realtimeSnapshotPlugin(): Plugin {
  let memorySnapshot: any = null;
  const snapshotFile = path.resolve(__dirname, './src/data/live_snapshot.json');

  return {
    name: 'realtime-snapshot-plugin',
    configureServer(server) {
      // Load initial snapshot from file if exists
      try {
        if (fs.existsSync(snapshotFile)) {
          memorySnapshot = JSON.parse(fs.readFileSync(snapshotFile, 'utf-8'));
        }
      } catch (_) {}

      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/snapshot') {
          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(memorySnapshot || {}));
            return;
          }
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                memorySnapshot = JSON.parse(body);
                // Save to file for persistence across server restarts
                try {
                  fs.writeFileSync(snapshotFile, JSON.stringify(memorySnapshot, null, 2), 'utf-8');
                } catch (_) {}

                // Broadcast to all connected browser clients (phones, laptops, other tabs) in real-time
                server.ws.send({
                  type: 'custom',
                  event: 'zt_cloud_snapshot_sync',
                  data: memorySnapshot,
                });

                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(JSON.stringify({ success: true, timestamp: Date.now() }));
              } catch (err: any) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), realtimeSnapshotPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
          'vendor-firebase': ['firebase/app', 'firebase/firestore', 'firebase/database', 'firebase/auth'],
        },
      },
    },
  },
});

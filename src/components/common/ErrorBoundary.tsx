import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ZoneThinks IT Application Error:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-surface-base text-text-primary">
          <div className="max-w-md w-full p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-black text-2xl text-text-primary">
                Something Went Wrong
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                An unexpected interface issue occurred. Our system telemetry has logged this event.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-black font-heading font-bold text-xs hover:shadow-glow-cyan transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Experience
              </button>
              <Button to="/" variant="secondary" size="sm" leftIcon={<Home className="w-4 h-4" />}>
                Go to Homepage
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { AdminProvider } from '@/context/AdminContext';
import { MainLayout } from '@/layouts/MainLayout';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { PageSkeleton } from '@/components/common/SkeletonLoader';

// Lazy-loaded public routes
const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('@/pages/Services').then((m) => ({ default: m.Services })));
const Projects = lazy(() => import('@/pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails').then((m) => ({ default: m.ProjectDetails })));
const CaseStudies = lazy(() => import('@/pages/CaseStudies').then((m) => ({ default: m.CaseStudies })));
const Company = lazy(() => import('@/pages/Company').then((m) => ({ default: m.Company })));
const Team = lazy(() => import('@/pages/Team').then((m) => ({ default: m.Team })));
const TeamMemberDetails = lazy(() => import('@/pages/TeamMemberDetails').then((m) => ({ default: m.TeamMemberDetails })));
const Testimonials = lazy(() => import('@/pages/Testimonials').then((m) => ({ default: m.Testimonials })));
const Pricing = lazy(() => import('@/pages/Pricing').then((m) => ({ default: m.Pricing })));
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })));
const BlogDetails = lazy(() => import('@/pages/BlogDetails').then((m) => ({ default: m.BlogDetails })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));
const FAQ = lazy(() => import('@/pages/FAQ').then((m) => ({ default: m.FAQ })));
const Careers = lazy(() => import('@/pages/Careers').then((m) => ({ default: m.Careers })));
const AiAssistant = lazy(() => import('@/pages/AiAssistant').then((m) => ({ default: m.AiAssistant })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

// Lazy-loaded Admin routes
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard').then((m) => ({ default: m.AdminDashboard })));
const AdminLogin = lazy(() => import('@/pages/admin/AdminLogin').then((m) => ({ default: m.AdminLogin })));

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AdminProvider>
          <Router>
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                {/* Admin Dedicated Routes (Standalone Layout) */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Public Website Routes (Wrapped with MainLayout) */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectDetails />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/company" element={<Company />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/team/:slug" element={<TeamMemberDetails />} />
                  <Route path="/team/member/:id" element={<TeamMemberDetails />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogDetails />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/ai-assistant" element={<AiAssistant />} />
                  <Route path="/friday" element={<AiAssistant />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </AdminProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;



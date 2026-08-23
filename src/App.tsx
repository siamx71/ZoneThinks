import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { MainLayout } from '@/layouts/MainLayout';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

// Pages
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Projects } from '@/pages/Projects';
import { ProjectDetails } from '@/pages/ProjectDetails';
import { CaseStudies } from '@/pages/CaseStudies';
import { Company } from '@/pages/Company';
import { Team } from '@/pages/Team';
import { TeamMemberDetails } from '@/pages/TeamMemberDetails';
import { Testimonials } from '@/pages/Testimonials';
import { Pricing } from '@/pages/Pricing';
import { Blog } from '@/pages/Blog';
import { BlogDetails } from '@/pages/BlogDetails';
import { Contact } from '@/pages/Contact';
import { FAQ } from '@/pages/FAQ';
import { Careers } from '@/pages/Careers';
import { NotFound } from '@/pages/NotFound';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

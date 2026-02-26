import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import ToolSelector from './components/ToolSelector';
import AnalyticsWrapper from './components/AnalyticsWrapper';

const MergePdf = lazy(() => import('./components/MergePdf'));
const SplitPdf = lazy(() => import('./components/SplitPdf'));
const CompressPdf = lazy(() => import('./components/CompressPdf'));
const PdfToImage = lazy(() => import('./components/PdfToImage'));
const ImageToPdf = lazy(() => import('./components/ImageToPdf'));
const RotatePdf = lazy(() => import('./components/RotatePdf'));
const ProtectPdf = lazy(() => import('./components/ProtectPdf'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const PageLoader = () => (
  <div style={{
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '300px', color: 'var(--text-muted)', fontSize: '1rem'
  }}>
    Loading…
  </div>
);

const AppContent = () => {
  const navigate = useNavigate();

  const handleNavigate = (dest) => {
    navigate(dest);
    window.scrollTo(0, 0);
  };

  return (
    <AnalyticsWrapper>
      <Layout onNavigate={handleNavigate}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<ToolSelector />} />
            <Route path="/merge-pdf" element={<MergePdf />} />
            <Route path="/split-pdf" element={<SplitPdf />} />
            <Route path="/compress-pdf" element={<CompressPdf />} />
            <Route path="/pdf-to-image" element={<PdfToImage />} />
            <Route path="/image-to-pdf" element={<ImageToPdf />} />
            <Route path="/rotate-pdf" element={<RotatePdf />} />
            <Route path="/protect-pdf" element={<ProtectPdf />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </Layout>
    </AnalyticsWrapper>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;

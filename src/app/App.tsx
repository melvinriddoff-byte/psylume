import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollManager from "../components/layout/ScrollManager";
import SmoothScroll from "../components/layout/SmoothScroll";
import BackToTop from "../components/layout/BackToTop";
import ErrorBoundary from "../components/layout/ErrorBoundary";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import TherapistsPage from "../pages/therapists/TherapistsPage";
import TeamPage from "../pages/team/TeamPage";
import ContactPage from "../pages/contact/ContactPage";
import ConsultationPage from "../pages/consultation/ConsultationPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <SmoothScroll />
      <Header />
      <main id="main" tabIndex={-1}>
        {/* Keyed by path so a crash on one page clears when you navigate away */}
        <ErrorBoundary key={pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

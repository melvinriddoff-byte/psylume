import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Therapists from "./pages/Therapists";
import Consultation from "./pages/Consultation";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <SmoothScroll />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import ResearchPage from "./pages/ResearchPage.tsx";
import FooterComponent from "./components/FooterComponent.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      {/* 1. Outer container: 'min-h-screen' to ensure it takes full height.
        2. 'flex flex-col' to stack content area and footer vertically.
        3. 'justify-between' to push the footer to the bottom.
      */}
      <div className="flex flex-col min-h-screen justify-between">
        {/* This div now holds the Navbar and the main content Routes.
          It behaves as:
          - 'flex-col' on small screens (Navbar on top, content below)
          - 'md:flex-row' on medium screens and up (Navbar to the side, content next to it)
          - 'flex-grow' ensures this section takes all available space, pushing the footer down.
        */}
        <div className="flex-grow flex flex-col md:flex-row">
          <Navbar />
          {/* This main content area (where your routes render)
            needs to take up the remaining space next to the Navbar.
            On smaller screens, it will simply flow below the Navbar.
          */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/coursework" element={<CoursePage />} />
              <Route path="/research" element={<ResearchPage />} />
            </Routes>
          </main>
        </div>
        {/* Footer always at the bottom, pushed there by the flex-grow above */}
        <FooterComponent />
      </div>
    </Router>
  </StrictMode>
);

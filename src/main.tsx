import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import ResearchPage from "./pages/ResearchPage.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div className="App flex flex-col md:flex-row">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/coursework" element={<CoursePage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);

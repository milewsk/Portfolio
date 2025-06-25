import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

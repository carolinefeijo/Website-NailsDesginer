import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { AboutMe } from "./pages/AboutMe";
import { Localization } from "./pages/Localization";
import { Contact } from "./pages/Contact";

import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/aboutMe" element={<AboutMe />} />
          <Route exact path="/localization" element={<Localization />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

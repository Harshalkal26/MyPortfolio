import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import Project from "./components/Project/Project";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        {window.location.pathname === "/" && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

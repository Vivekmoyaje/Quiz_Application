import React from "react";
import QuizApp from "./components/QuizApp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact ";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}

      {/* routing setup start */}

      {/* routing setup end */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuizApp" element={<QuizApp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

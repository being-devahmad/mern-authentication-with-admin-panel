import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Logi";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Signup from "./Pages/Signup";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
);

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav1 from "./components/Nav1";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer/index";
import SignIn from "./components/Sign-In/Sign-In";
import SignUp from "./components/Sign-Up/SignUp";
import PageNotFoundComponent from "./components/PageNotFoundComponent/PageNotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav1 />

        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Shopping-Website-React" element={<Index />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/*" element={<PageNotFoundComponent />} />
          <Route path="/Shopping-Website-React/*" element={<PageNotFoundComponent />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;

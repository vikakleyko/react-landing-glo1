import React from 'react';
import './css/style.css';
import Header from "./components/Header";
import Main from "./components/Main";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <FeaturesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;

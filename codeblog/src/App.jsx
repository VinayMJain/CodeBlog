import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import MainHeader from './components/common/Header/MainHeader';
import About from './components/pages/About/About';
import Uploads from './components/pages/Uploads/Uploads';
import Faqs from './components/pages/Faqs/Faqs';
import ContactUs from './components/specific/ContatUs/ContactUsParentComponent';
import Navbar from './components/common/Navbar/Navbar';
import Blogs from './components/pages/Blogs/Blogs';

function App() {
  return (
    <>
    <MainHeader />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/Uploads" element={<Uploads />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

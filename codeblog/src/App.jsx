import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/pages/Home/Home';
import MainHeader from './components/common/Header/MainHeader';
import About from './components/pages/About/About';
import Uploads from './components/pages/Uploads/Uploads';
import Faqs from './components/pages/Faqs/Faqs';
import ContactUs from './components/specific/ContatUs/ContactUsParentComponent';
import Navbar from './components/common/Navbar/Navbar';
import Blogs from './components/pages/Blogs/Blogs';
import LoginForm from './components/specific/LoginForm/LoginForm';
import SignUp from './components/specific/SignUp/SignUp';
import blogs from './uploadBlogs.json';
import TemporaryDrawer from './components/common/Drawer/TemporaryDrawer';

function App() {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    let totalItems = 0;
    blogs.forEach(blog => {
      totalItems += blog.blogsList.length;
    });
    setNotificationCount(totalItems);
  }, []); 
  const updateNotification = () => {
    setNotificationCount(notificationCount - 1);
  };

  return (
    <>
      <MainHeader notificationCounter={notificationCount} />
      <BrowserRouter>
        {/* <Navbar /> */}
        <TemporaryDrawer />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="*" element={<Blogs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/Uploads" element={<Uploads updateNotification={updateNotification}/>} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from './components/common/Header/MainHeader';
import About from './components/pages/About/About';
import Uploads from './components/pages/Uploads/Uploads';
import Faqs from './components/pages/Faqs/Faqs';
import ContactUs from './components/specific/ContatUs/ContactUsParentComponent';
import Navbar from './components/common/Navbar/Navbar';
import Blogs from './components/pages/Blogs/Blogs';
import LoginForm from './components/specific/LoginForm/LoginForm';
import SignUp from './components/specific/SignUp/SignUp';
import blogsData from './uploadBlogs.json';
import TemporaryDrawer from './components/common/Drawer/TemporaryDrawer';

function App() {
    const [blogs, setBlogs] = useState(blogsData);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        let totalItems = 0;
        blogs.forEach(blog => {
            totalItems += blog.blogsList.length;
        });
        setNotificationCount(totalItems);
    }, [blogs]);

    const handleDelete = (monthIndex, blogId) => {
        const newBlogs = blogs.map((month, index) => {
            if (index === monthIndex) {
                return {
                    ...month,
                    blogsList: month.blogsList.filter(blog => blog.id !== blogId)
                };
            }
            return month;
        });
        setBlogs(newBlogs);
    };

    return (
        <>
            <MainHeader notificationCounter={notificationCount} />
            <BrowserRouter>
                <TemporaryDrawer />
                <Routes>
                    <Route path="/" element={<Blogs />} />
                    <Route path="*" element={<Blogs />} />
                    <Route path="/Blogs" element={<Blogs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Uploads" element={<Uploads blogs={blogs} handleDelete={handleDelete} />} />
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

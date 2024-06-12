import React, { useState } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Blogs from '../Blogs/Blogs'
import Uploads from '../Uploads/Uploads';
import Faqs from '../Faqs/Faqs';
import ContactUs from '../../specific/ContatUs/ContactUsParentComponent';
import About from '../About/About';
import Profile from '../../specific/profile/profile';
function Home() {
    const [currentPage, setCurrentPage] = useState('Blogs');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage?.toLowerCase()) {
            case 'blogs':
                return <Blogs />;
            case 'uploads':
                return <Uploads />;
            case 'faqs':
                return <Faqs />;
            case 'contact':
                return <ContactUs />;
            case 'about':
                return <About />;
            case 'profile':
                return <Profile />;
            default:
                return <Blogs />;
        }
    };

    return (
        <>
            <Navbar 
                onPageChange={handlePageChange} 
            />
            {renderPage()}
        </>
    );
}

export default Home;

import React, { useState } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Blogs from '../Blogs/Blogs'
import Uploads from '../Uploads/Uploads';
import Faqs from '../Faqs/Faqs';
import ContactUs from '../../specific/ContatUs/ContactUsParentComponent';
import About from '../About/About';
import Profile from '../../specific/profile/profile';
function Home() {
    // const [currentPage, setCurrentPage] = useState('Home');

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };

    // const renderPage = () => {
    //     switch (currentPage) {
    //         case 'Blogs':
    //             return <Blogs />;
    //         case 'Uploads':
    //             return <Uploads />;
    //         case 'FAQs':
    //             return <Faqs />;
    //         case 'Contact':
    //             return <ContactUs />;
    //         case 'About':
    //             return <About />;
    //         case 'Profile':
    //             return <Profile />;
    //         default:
    //             return <Blogs />;
    //     }
    // };

    return (
        <Navbar 
            onPageChange={handlePageChange} 
        />
    );
}

export default Home;

import React, { useState } from 'react';
import Navbar from '../../common/Navbar/Navbar';

function Home() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Blogs':
                return <div>Home Page
                    <div>Home Page</div>
                    <div>Home Page</div>
                    <div>Home Page</div>
                </div>;
            case 'About':
                return <div>About Page
                    <div>About Page</div>
                    <div>About Page</div>
                    <div>About Page</div>
                </div>;
            case 'Contact':
                return <div>Contact Page
                    <div>Contact Page</div>
                    <div>Contact Page</div>
                    <div>Contact Page</div>
                </div>;
            default:
                return <div>Home Page
                    <div>Home Page</div>
                    <div>FAQs</div>
                    <div>Home Page</div>
                </div>;
        }
    };

    return (
        <>
            <Navbar onPageChange={handlePageChange} />
            {renderPage()}
        </>
    );
}

export default Home;

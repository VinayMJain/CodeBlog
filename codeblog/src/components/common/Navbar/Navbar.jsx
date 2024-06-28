import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ onPageChange }) {
    const [currentPage, setCurrentPage] = useState(() => {
        return sessionStorage.getItem('currentPage') || 'Blogs';
    });

    const navbarObjectArray = [
        { id: 1, title: 'Blogs' },
        { id: 2, title: 'Uploads' },
        { id: 3, title: 'About' },
        { id: 4, title: 'FAQs' },
        { id: 5, title: 'Contact' },
        { id: 6, title: 'signin' },
        { id: 7, title: 'signup' }
    ];

    useEffect(() => {
        navbarObjectArray.forEach(item => {
            const element = document.getElementById(`navbarItem${item.id}`);
            if (element) {
                element.style.backgroundColor = ''; 
            }
        });

        const selectedElement = document.getElementById(`navbarItem${navbarObjectArray.find(item => item.title === currentPage).id}`);
        if (selectedElement) {
            selectedElement.style.backgroundColor = '#5999B1'; 
        }

        sessionStorage.setItem('currentPage', currentPage);

        console.log("Current page is: ", currentPage);
    }, [currentPage, navbarObjectArray]);

    return (
        <header 
         className={style.navHeader} 
         id='navHeaderId'
        >
            <nav 
             className={style.navbar} 
             id='navbarId'
            >
                <div 
                 className={style.navbarOption} 
                 id='navbarOptionId'
                >
                    <ul 
                     className={style.navbarList} 
                     id='navbarListId'
                    >
                        {navbarObjectArray.map((item) => {
                            return (
                                <li 
                                 className={style.navbarItem} 
                                 id={`navbarItem${item.id}`} 
                                 key={item.id}
                                >
                                    <Link
                                        className={style.navbarLinkButton}
                                        id={`navbarLinkButton${item.id}`}
                                        onClick={() => { setCurrentPage(item.title) }}
                                        to={`/${item.title}`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

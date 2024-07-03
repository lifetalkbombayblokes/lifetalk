"use client"
import React, { useState, useEffect } from 'react';
import { menu } from '@/app/data';
import logo from '@/assets/lifetalk-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-base-100 shadow-sm ' : 'bg-transparent'}`}>
            <div className="navbar page-width">
                <div className="navbar-start md:max-w-96">
                    <Link aria-label="life talk logo" href={'/'}>
                        <Image src={logo.src} width={logo.width} height={logo.height} alt='life talks logo' />
                        <p className="btn btn-ghost text-xl sr-only">Life talks</p>
                    </Link>
                </div>
                <div className="navbar-center hidden md:block">
                    <ul tabIndex={0} className="flex w-full items-center justify-center gap-8">
                        {menu.map((item) => (
                            <li key={item.url}>
                                <Link aria-label={item.text} className='header-class uppercase' href={item.url}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end md:hidden">
                    <details className="dropdown dropdown-end">
                        <summary onClick={toggleMenu} className="btn-ghost btn btn-circle swap swap-rotate">
                            <div aria-label="menu" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                )}
                            </div>
                        </summary>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-base-100 rounded-box w-[90vw] h-[50vh]">
                            {menu.map((item) => (
                                <li key={item.url}>
                                    <Link aria-label={item.text} className='header-class uppercase' href={item.url}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Header;

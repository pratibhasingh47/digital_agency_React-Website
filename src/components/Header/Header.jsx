"use client";
import React, { useEffect, useRef } from "react";
import "./Header.css";

const nav__links = [
    {
        path: "#hero",
        display: "Home",
    },

    {
        path: "#about",
        display: "About",
    },

    {
        path: "#service",
        display: "Service",
    },

    {
        path: "#projects",
        display: "Projects",
    },

    {
        path: "#blog",
        display: "Blog",
    },
];

const Header = ({ theme, toggleTheme }) => {
    const headerRef = useRef(null);

    const menuRef = useRef(null);

    const headerFunc = () => {
        if (headerRef.current) {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("header__shrink");
            } else {
                headerRef.current.classList.remove("header__shrink");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);

        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute("href");

        const targetElement = document.querySelector(targetAttr);

        if (targetElement) {
            const location = targetElement.offsetTop;
            window.scrollTo({
                left: 0,
                top: location - 80,
                behavior: "smooth",
            });
        } else {
            console.error("Element not found:", targetAttr);
        }
    };

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

    return (
        <header className="header" id="intro" ref={headerRef}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>Digency</h2>
                    </div>

                    {/* navigation */}

                    <div
                        className="navigation"
                        ref={menuRef}
                        onClick={toggleMenu}
                    >
                        <ul className="menu">
                            {nav__links.map((item, index) => (
                                <li key={index} className="menu__item">
                                    <a
                                        href={item.path}
                                        onClick={handleClick}
                                        className="menu__link"
                                    >
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* light mode */}

                    <div className="light__mode">
                        <span onClick={toggleTheme}>
                            {theme === "light-theme" ? (
                                <span>
                                    <i className="ri-moon-fill"></i>Dark
                                </span>
                            ) : (
                                <span>
                                    <i className="ri-sun-line"></i>
                                    Light
                                </span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

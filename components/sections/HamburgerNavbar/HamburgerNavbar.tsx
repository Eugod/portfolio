"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./hamburgerNavbar.module.css"
import { Navbar } from "../Navbar/Navbar"

export const HamburgerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.hamburgerNavbarContainer}>
            <button type="button" aria-expanded={isOpen} aria-controls="menu-container" onClick={toggleMenu}>
                <Image
                    src="/hamburger-nav-icon.png"
                    alt="Hamburger Icon"
                    width={30}
                    height={30}
                />
            </button>

            {isOpen &&
                <div className={styles.menuContainer} id="menu-container">
                    <div className={styles.menuArrow} />
                    <Navbar />
                </div>
            }
        </div>
    )
}
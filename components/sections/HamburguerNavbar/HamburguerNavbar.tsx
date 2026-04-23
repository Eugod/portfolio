"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./hamburguerNavbar.module.css"
import { Navbar } from "../Navbar/Navbar"

export const HamburguerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={styles.hamburguerNavbarContainer}>
            <button onClick={toggleMenu}>
                <Image
                    src="/hamburguer-nav-icon.png"
                    alt="Hamburguer Icon"
                    width={30}
                    height={30}
                />
            </button>

            {isOpen &&
                <div className={styles.menuContainer}>
                    <div className={styles.menuArrow} />
                    <Navbar />
                </div>
            }
        </div>
    )
}
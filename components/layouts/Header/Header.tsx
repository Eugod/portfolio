import Image from "next/image"
import Link from "next/link"
import { Navbar } from "../../sections/Navbar/Navbar"
import { HamburgerNavbar } from "../../sections/HamburgerNavbar/HamburgerNavbar"
import { Logo } from "../../sections/Logo/Logo"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerSubContainer}>
                <Logo />

                <Navbar />
                <HamburgerNavbar />
            </div>
        </header>
    )
}
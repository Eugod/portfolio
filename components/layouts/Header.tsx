import Image from "next/image"
import { Navbar } from "../sections/Navbar/Navbar"
import { HamburguerNavbar } from "../sections/HamburguerNavbar/HamburguerNavbar"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerSubContainer}>
                <a href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={40}
                        loading="eager"
                    />
                </a>

                <Navbar />
                <HamburguerNavbar />
            </div>
        </header>
    )
}
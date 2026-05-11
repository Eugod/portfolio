import Image from "next/image"
import Link from "next/link"
import { Navbar } from "../../sections/Navbar/Navbar"
import { HamburgerNavbar } from "../../sections/HamburgerNavbar/HamburgerNavbar"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerSubContainer}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={40}
                        loading="eager"
                    />
                </Link>

                <Navbar />
                <HamburgerNavbar />
            </div>
        </header>
    )
}
import Link from "next/link"
import styles from "./navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <Link href="/">Home</Link>
            <Link href="/">Sobre mim</Link>
            <Link href="/">Projetos</Link>
            <Link href="/">Contato</Link>
        </nav>
    )
}
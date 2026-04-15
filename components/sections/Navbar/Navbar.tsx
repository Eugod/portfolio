import styles from "./navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <a href="">Home</a>
            <a href="">Sobre mim</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
        </nav>
    )
}
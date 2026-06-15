import { Logo } from "../../sections/Logo/Logo"
import { ContactIcon } from "../../sections/ContactIcon/ContactIcon"
import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSubContainer}>
                    <Logo />


                    <p className={styles.footerDescription}>
                        Desenvolvedor Full Stack focado em criar aplicações robustas, performáticas e bem estruturadas, unindo experiência de frontend moderno com evolução constante em backend e arquitetura.
                    </p>

                    <div className={styles.contactIconsContainer}>
                        <ContactIcon
                            iconSrc="/linkedin-icon.png"
                            altText="LinkedIn"
                            link="https://www.linkedin.com/in/eugenio-rodrigues/"
                        />
                        <ContactIcon
                            iconSrc="/github-icon.png"
                            altText="GitHub"
                            link="https://github.com/Eugod"
                        />
                        <ContactIcon
                            iconSrc="/email-icon.png"
                            altText="Email"
                            link="mailto:eugenio28.04@gmail.com"
                        />
                    </div>
                </div>

                <p className={styles.footerCopyright}>
                    © 2025 Eugenio Rodrigues. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
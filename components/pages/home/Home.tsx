import { Header } from "../../layouts/Header/Header"
import { Footer } from "../../layouts/Footer/Footer"
import styles from "./home.module.css"

export const HomePage = () => {
    return (
        <main>
            <Header />
            <p>Home</p>
            <Footer />
        </main>
    )
}
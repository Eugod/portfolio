import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                loading="eager"
            />
        </Link>
    )
}
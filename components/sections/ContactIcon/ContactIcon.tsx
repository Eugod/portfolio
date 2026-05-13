import Image from "next/image"
import Link from "next/link"
import style from "./contactIcon.module.css"

export const ContactIcon = ({ iconSrc, altText, link }: { iconSrc: string, altText: string, link: string }) => {
    return (
        <Link
            href={link}
            target="_blank"
            className={style.contactIconLink}
        >
            <Image
                src={iconSrc}
                alt={altText}
                width={30}
                height={30}
                className={style.contactIconImage}
            />
        </Link>
    )
}
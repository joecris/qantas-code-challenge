import Image from "next/image"
import Link from "next/link"
import logoImg from '@/assets/qantas-logo.png'
import styles from './MainHeader.module.scss'

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo} data-testid="header-brand-logo-link-testid">
                <Image className={styles.logoImage} src={logoImg} alt="Qantas logo" priority />
            </Link>
        </header>
    )
}
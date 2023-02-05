import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Wallet = dynamic(
    () => import('./Wallet'),
    { ssr: false }
  )
    

type Props = { isMember: boolean, handleWalletConnected: any, accountConnected: any };

const Header = (props: Props) => {
    const { isMember, handleWalletConnected, accountConnected } = props;
  return (
    <div className={styles.headerWrapper}>
      <ul>
        <li className={styles.listElement}>
          <Link href="/">
            <Image
              src="/logo dark.png"
              alt="Typefund DAO"
              className={styles.logo}
              width={100}
              height={35}
            />
          </Link>
        </li>
      </ul>
      <nav className={styles.navMenu}>
        <ul className={styles.navMenu}>
            <li className={styles.listElement}>
                <Link href="/">
                    Fonts
                </Link>
            </li>
            <li className={styles.listElement}>
                <Link href="/dao">
                    {isMember ? "DAO" : "Join the DAO"}
                </Link>
            </li>
            <li className={styles.listElement}>
                <Wallet handleWalletConnected={handleWalletConnected} accountConnected={accountConnected} />
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

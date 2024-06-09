// src/components/NavBar.tsx

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.Sidebar}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <Link href="/" passHref>
            <span className={`${styles.NavLink} ${router.pathname === "/" ? styles.active : ""}`}>Home</span>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/login" passHref>
            <span className={`${styles.NavLink} ${router.pathname === "/login" ? styles.active : ""}`}>Login</span>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/level" passHref>
            <span className={`${styles.NavLink} ${router.pathname === "/level" ? styles.active : ""}`}>Level</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);

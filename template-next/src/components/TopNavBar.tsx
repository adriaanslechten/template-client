// src/components/NavBar.tsx

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./TopNavBar.module.css";

const TopNavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <Link href="/" passHref>
            <div className={`${styles.NavLink} ${router.pathname === "/" ? styles.active : ""}`}>Home</div>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/login" passHref>
            <div className={`${styles.NavLink} ${router.pathname === "/login" ? styles.active : ""}`}>Login</div>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/leaderboard" passHref>
            <div className={`${styles.NavLink} ${router.pathname === "/leaderboard" ? styles.active : ""}`}>
              Leaderboard
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(TopNavBar);

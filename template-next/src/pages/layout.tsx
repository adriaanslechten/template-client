// src/pages/RootLayout.tsx

import NavBar from "@/components/NavBar";
import styles from "./Layout.module.css"; // Ensure this path is correct

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className={styles.mainContent}>{children}</div>
    </>
  );
}

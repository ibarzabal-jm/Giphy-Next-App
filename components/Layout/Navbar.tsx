import React from "react";
import Link from "next/link";

import styles from "../../styles/layout/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Link href="/">
          <a>GIPHY</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

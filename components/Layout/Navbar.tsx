import React from "react";
import Link from "next/link";

import styles from "../../styles/layout/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Link href="/">
          <a className={styles.title}>GIPHY</a>
        </Link>
        <Link href={`/favs`}>
          <a className={styles.favs}>
            Favs
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
              <use xlinkHref="#shape" />
              <path
                d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z"
                fill="#f00"
                id="shape"
              />
            </svg>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

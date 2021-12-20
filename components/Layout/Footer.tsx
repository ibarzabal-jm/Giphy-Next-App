import React from "react";

import styles from "../../styles/layout/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer-content"]} container`}>
        <a
          className={styles.heart}
          href="https://github.com/ibarzabal-jm"
          rel="noopener noreferrer"
          target="_blank"
        >
          Made with love
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
            <use xlinkHref="#shape" />
            <path
              d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z"
              fill="#f00"
              id="shape"
            />
          </svg>
          by @ibarzabal-jm
        </a>
        <a
          href="https://www.linkedin.com/in/juan-manuel-ibarzabal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Giphy Copyright ©<span> Juan Manuel Ibarzabal Salles </span>
        </a>
        <a href="https://juanmaportfolio.netlify.app/" rel="noopener noreferrer" target="_blank">
          <svg
            className={styles.signature}
            fill="none"
            height="50"
            viewBox="0 0 126 109"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.text}
              d="M46 2C46 11.3008 41.6184 23.1089 44.2222 32.2222C46.3304 39.6008 45 48.8003 45 56.4444C45 68.687 29.1253 83.1625 16.9444 81.9444C7.56503 81.0065 2.80691 67.0694 1.77777 59.2222C0.228679 47.4104 13.1374 51.8194 20.5556 53.5556C27.0731 55.0809 33.7897 56.9292 40.3889 57.9444C42.4462 58.261 44.4886 58.1335 46.2222 57C51.3845 53.6247 51.4356 48.7803 53.5 43C56.1797 35.4968 64 47.1768 64 51.5C64 58.8156 64 52.363 64 49C64 43.9418 70.7978 43.4901 73.5555 47C75.7418 49.7825 75.3595 50.8066 76.5 54C77.2611 56.131 77 58.8204 77 55C77 50.4435 84.5354 48.8865 86.9444 52.5C90.865 58.3808 96.7188 59.5759 103.556 55.7778C105.115 54.9114 104 48.6605 104 50.4444C104 52.9467 105.337 54.6789 106 57C106.774 59.71 109.366 60.6518 112 60.9444C122.136 62.0707 107.758 57.1357 105 56"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              className={styles.point}
              d="M108 34C104.856 34.7075 100.495 35.0739 101.056 39C101.342 41.008 105.09 43 107 43C108.993 43 106.26 38.6583 105.944 37.5556C105.628 36.4474 106.338 36.3238 107 35"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              className={styles.dash}
              d="M24 107C54.1922 89.6166 88.9559 74.5044 124 71"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

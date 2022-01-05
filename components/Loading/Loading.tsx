import React from "react";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div aria-label="Loading" aria-live="polite" className={styles.loading}>
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>
  );
};

export default Loading;

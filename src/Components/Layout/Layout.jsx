import React from "react";
import styles from "./layout.module.scss";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <NavBar />
      <div className={styles.layoutStatic}>
        <div className={styles.layoutAnimated}></div>
      </div>
    </div>
  );
};

export default Layout;

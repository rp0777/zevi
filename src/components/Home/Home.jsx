import React from "react";
import styles from "./Home.module.css";
import Search from "../Search/Search";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <Search className={styles.Search} />
    </div>
  );
};

export default Home;

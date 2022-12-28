import React from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "../StyleSheets/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Weather App</h1>
        <h1 className={styles.henry}></h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;

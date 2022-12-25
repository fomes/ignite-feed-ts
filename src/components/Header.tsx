import React from "react";
import styles from "./Header.module.css";
import igniteLogo from "../assets/Ignite simbol.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo" />
    </header>
  );
}

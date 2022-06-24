import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/dog.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="logotipo" />
      </div>
      {/* <div className={styles.burgerMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div> */}
      <div className={styles.right}>
        <NavLink className={styles.btn} to="/home">
          Home
        </NavLink>
        <NavLink className={styles.btn} to="/createBreed">
          Crear Raza
        </NavLink>
        <NavLink className={styles.btn} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
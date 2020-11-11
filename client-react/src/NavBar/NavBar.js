import React from "react";
import logo from "../assets/icon-png-images-6.png";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import {signout} from "../helpers/auth";
import {toast} from "react-toastify";


export function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="belb logo" />
      </Link>
      <SearchBar
        small
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <button onClick={()=> {
          signout(() => {
              toast.error('Signout Successfully');
              window.location.href="/"
          });
      }} className={`button ${styles["nav-button"]}`}>
        Cerrar Sesion
      </button>
    </div>
  );
}

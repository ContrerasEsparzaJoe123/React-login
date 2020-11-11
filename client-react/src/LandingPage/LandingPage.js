import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/icon-png-images-6.png";
import styles from "./LandingPage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestions } from "./SearchSuggestions/SearchSuggestions";
import useReactRouter from "use-react-router";
import {signout} from "../helpers/auth";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";

function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles["search-area"]}>
        <TopNav />
        <img src={logo} className={styles.logo} alt="logo" />
        <SearchBar search={search} />
        <SearchSuggestions />
        <Button onClick={()=> {
          signout(() => {
            toast.error('Signout Successfully');
            window.location.href="/"
          });
        }} variant="danger" className="text-center text-md-right">
          Cerrar Sesion
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";
import preloaderImage from "../assets/threeDotsPreloader.svg";
import styles from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div className="col-md-9 text-center">
            <img alt="" src={preloaderImage} className={styles.preloaderImage} />
        </div>
    );
};

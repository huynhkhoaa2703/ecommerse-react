import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import React from "react";
import styles from "./styles.module.scss";

const HomePage = () => {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
            </div>
        </div>
    );
};

export default HomePage;

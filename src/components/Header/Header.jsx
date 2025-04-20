import React from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import Logo from "@icons/img/Logo2.png";
import reloadIcon from "@icons/svgs/reload.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cart.svg";

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
    } = styles;
    return (
        <>
            <div className={container}>
                <div className={containerHeader}>
                    <div className={containerBox}>
                        <div className={containerBoxIcon}>
                            {dataBoxIcon.map((item, index) => {
                                return (
                                    <BoxIcon
                                        key={index}
                                        type={item.type}
                                        href={item.href}
                                    />
                                );
                            })}
                        </div>
                        <div className={containerMenu}>
                            {dataMenu.slice(0, 3).map((item, index) => {
                                return (
                                    <Menu
                                        content={item.content}
                                        href={item.href}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <img
                            src={Logo}
                            alt="logo"
                            style={{
                                width: "100%",
                                height: "50px",
                            }}
                        />
                    </div>
                    <div className={containerBox}>
                        <div className={containerMenu}>
                            {dataMenu
                                .slice(3, dataMenu.length)
                                .map((item, index) => {
                                    return (
                                        <Menu
                                            content={item.content}
                                            href={item.href}
                                        />
                                    );
                                })}
                        </div>
                        <div className={containerBoxIcon}>
                            <img width={24} src={reloadIcon} alt="reloadIcon" />
                            <img width={24} src={heartIcon} alt="heartIcon" />
                            <img width={24} src={cartIcon} alt="cartIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

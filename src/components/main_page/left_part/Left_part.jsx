import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "./images/logo.jpeg";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { ImCompass2 } from "react-icons/im";
import { MdVideoCameraFront } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { CgDetailsMore } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import Dropdown from "./dropdown/Dropdown";

const Left_part = () => {
  const [clicked, setClicked] = useState("none");
  return (
    <div className={styles.main}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <GoHomeFill />
          <span>Главная</span>
        </li>
        <li className={styles.li}>
          <IoSearchOutline />
          <span>Поиск</span>
        </li>
        <li className={styles.li}>
          <ImCompass2 />
          <span>Интересное</span>
        </li>
        <li className={styles.li}>
          <MdVideoCameraFront />
          <span>Reels</span>
        </li>
        <li className={styles.li}>
          <FaFacebookMessenger />
          <span>Собщения</span>
        </li>
        <li className={styles.li}>
          <MdFavoriteBorder />
          <span>Уведомления</span>
        </li>
        <li className={styles.li}>
          <FaPlus />
          <span>
            <NavLink
              to="/create"
              style={{ textDecoration: "none", color: "black" }}>
              Создать
            </NavLink>
          </span>
        </li>
        <li className={styles.li}>
          <VscAccount />
          <span>Профиль</span>
        </li>
        <li className={styles.li_threades}>
          <FaThreads />
          <span>Threades</span>
        </li>
        <li
          className={styles.li_threades}
          onClick={(e) => {
            if (clicked == "none") {
              setClicked("block");
              return;
            }
            setClicked("none");
          }}>
          <CgDetailsMore />
          <span>Ещё</span>
        </li>
      </ul>
      <Dropdown state={clicked} />
    </div>
  );
};

export default Left_part;

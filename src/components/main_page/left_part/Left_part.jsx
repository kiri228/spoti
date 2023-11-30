import React from "react";
import styles from "./style.module.css";
import logo from "./images/logo.jpeg";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { ImCompass2 } from "react-icons/im";
import { MdVideoCameraFront } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgDetailsMore } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";


const Left_part = () => {
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
          <span>Создать</span>
        </li>
        <li className={styles.li}>
          <VscAccount />
          <span>Профиль</span>
        </li>
        <li className={styles.li_threades}  >
          <FaThreads />
          <span>Threades</span>
        </li>
        <li className={styles.li_threades}>
          <CgDetailsMore />
        <span>Ещё</span>
      </li>
      </ul>
    </div>
  );
};

export default Left_part;

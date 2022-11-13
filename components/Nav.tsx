import React from 'react'
import style from '../styles/nav.module.css'
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.lgo}>
        <div className={style.logo}>
          <CgMenuRight size={30} />
        </div>
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>

      <div className={style.se}>
        <div className={style.search}>
          <input type="text" placeholder="Search Destinations..." />

          <span></span>
          <GoSettings size={22} />
        </div>
        <HiOutlineBell size={50} />
        <img src="/avatar.png" alt="" />
      </div>
    </div>
  );
}

export default Nav
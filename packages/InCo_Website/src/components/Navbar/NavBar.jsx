import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";
import imageAssets from "../../utils/Utils";

const NavBar = () => {
   const [openMenu, setOpenMenu] = useState(false);
   const [showMenuBtn, setShowMenuBtn] = useState(true);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
      setShowMenuBtn(!showMenuBtn);
   };

   const closeMobileNav = () => {
      setOpenMenu(false);
      setShowMenuBtn(true);
   };

   return (
      <>
         <MobileNav isOpen={openMenu} closeMenu={closeMobileNav} />
         <div className="nav-wrapper">
            <div className="nav-content">
               <div className="logo-wrapper">
                  <div className="logo">
                     <Link to="/">
                        <img
                           src={imageAssets.logo}
                           alt="InCo logo with rainbow carabiners interconnected like Olympic rings"
                           className="logo-img"
                           width="390" height="263"
                        />
                     </Link>
                  </div>
               </div>
               <ul>
                  <li>
                     <a href="/about" className="menu-item nav-link">
                        ABOUT US
                     </a>
                  </li>
                  <li>
                     <Link to="/faq" className="menu-item nav-link">
                        FAQ
                     </Link>
                  </li>
                  <li>
                     <Link to="/get-involved" className="menu-item nav-link">
                        GET INVOLVED
                     </Link>
                  </li>
               </ul>
               <a href="http://bingo.incocollective.com" className="btn btn-info nav-play-btn">
                     PLAY BINGO
               </a>
               <button aria-label="open menu" className="menu-btn" onClick={toggleMenu}>
                  <span
                     className="material-symbols-outlined"
                     style={{ fontSize: "1.8rem" }}
                  >
                     <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L20 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                        <path d="M4 12L20 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                        <path d="M4 6L20 6" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                  </span>
               </button>
            </div>
         </div>
      </>
   );
};

export default NavBar;

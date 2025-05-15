import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, closeMenu }) => {
   return (
      <>
         <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={closeMenu}
         >
            <div className="mobile-menu-container position-relative">
               <button aria-label="close menu" className="menu-btn" onClick={closeMenu}>
                  <span className="material-symbols-outlined m-0 p-0">
                     <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu / Close_MD">
                           <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                     </svg>
                  </span>
               </button>
               <ul>
                  <li className="">
                     <a href="/about" className="mobile-menu-item nav-link">
                        ABOUT US
                     </a>
                  </li>
                  <li className="">
                     <Link to="/faq" className="mobile-menu-item nav-link">
                        FAQ
                     </Link>
                  </li>
                  <li className="">
                     <Link
                        to="/get-involved"
                        className="mobile-menu-item nav-link"
                     >
                        GET INVOLVED
                     </Link>
                  </li>
               </ul>
               <a href="http://bingo.incocollective.com" className="btn btn-info">
                     PLAY BINGO
               </a>
            </div>
         </div>
      </>
   );
};

export default MobileNav;

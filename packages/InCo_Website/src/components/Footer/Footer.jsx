import React from "react";
import "./Footer.css";
import imageAssets from "../../utils/Utils";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
   return (
      <>
         <div className="Footer">
            <div className="row footer-row">
               <div className="logo-frame">
                  <a href="/" aria-label="Homepage">
                     <img src={imageAssets.logo} alt="InCo logo with rainbow carabiners interconnected like Olympic rings" className="footer-logo" loading="lazy" width="390" height="263" />
                  </a>
               </div>
               <div className="col-newsletter">
                  <NewsletterForm />
               </div>
               <div className="col">
                  <div className="Rainbow-lines">
                     <div className="Rainbow-lines-movement"></div>
                  </div>
               </div>
               <div className="col col-menu">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-items">
                     <li className="footer-item">
                        <a href="/about">About Us</a>
                     </li>
                     <li className="footer-item">
                        <a href="/faq">FAQ</a>
                     </li>
                     <li className="footer-item">
                        <a href="/get-involved">Join Us</a>
                     </li>
                     <li className="footer-item">
                        <a href="https://bingo.incocollective.com">
                           Play Bingo
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="col">
                  <div className="Rainbow-lines">
                     <div className="Rainbow-lines-movement"></div>
                  </div>
               </div>
               <div className="col col-follow">
                  <h3 className="footer-title">Follow</h3>
                  <div className="share-logos">
                     <a href="https://www.instagram.com/interconnectedco/">
                        <img
                           className="share-logo"
                           src={imageAssets.instagram}
                           alt="instagram logo"
                           loading="lazy"
                        />
                     </a>
                     <a href="https://www.linkedin.com/company/interconnected-collective/">
                        <img
                           className="share-logo"
                           src={imageAssets.linkedin}
                           alt="linkedin logo"
                           loading="lazy"
                        />
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=61558814939983">
                        <img
                           className="share-logo"
                           src={imageAssets.facebook}
                           alt="facebook logo"
                           loading="lazy"
                        />
                     </a>
                  </div>
               </div>

               <div className="Footer-boring-stuff">
                  <a href="/terms-of-service">Terms of Use</a>
                  &nbsp;/&nbsp;
                  &copy; 2024 Interconnected Collective
               </div>
            </div>
         </div>

         <div className="Footer-mobile">
            <div className="row footer-row">
               <div className="logo-frame">
                  <img src={imageAssets.logo} alt="" className="footer-logo" loading="lazy" width="390" height="263" />
               </div>
               <div className="col-newsletter">
                  <NewsletterForm />
               </div>
               <div className="col Rainbow-lines-left">
                  <div className="Rainbow-lines">
                     <div className="Rainbow-lines-movement"></div>
                  </div>
               </div>
               <div className="col col-menu">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-items">
                     <li className="footer-item">
                        <a href="/about">About Us</a>
                     </li>
                     <li className="footer-item">
                        <a href="/faq">FAQ</a>
                     </li>
                     <li className="footer-item">
                        <a href="/get-involved">Join Us</a>
                     </li>
                     <li className="footer-item">
                        <a href="http://bingo.incocollective.com">Play Bingo</a>
                     </li>
                  </ul>
               </div>
               <div className="col">
                  <div className="Rainbow-lines">
                     <div className="Rainbow-lines-movement"></div>
                  </div>
               </div>
               <div className="col col-follow">
                  <h3 className="footer-title">Follow</h3>
                  <div className="share-logos">
                     <a href="https://www.instagram.com/interconnectedco/">
                        <img
                           className="share-logo"
                           src={imageAssets.instagram}
                           alt="instagram logo"
                           loading="lazy"
                        />
                     </a>
                     <a href="https://www.linkedin.com/company/interconnected-collective/">
                        <img
                           className="share-logo"
                           src={imageAssets.linkedin}
                           alt="linkedin logo"
                           loading="lazy"
                        />
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=61558814939983">
                        <img
                           className="share-logo"
                           src={imageAssets.facebook}
                           alt="facebook logo"
                           loading="lazy"
                        />
                     </a>
                  </div>
               </div>
               <div className="Footer-boring-stuff">
                  <a href="/terms-of-service">Terms of Use</a>
                  &nbsp;/&nbsp;
                  &copy; 2024 Interconnected Collective
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;

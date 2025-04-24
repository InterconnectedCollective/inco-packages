import { useState } from "react";
import BioList from "./BioList";
import "./AboutPage.css";
import logo from "../../assets/incologo.png";
import headerBackground from "../../assets/alltogether.png";
import julianeHeader from "../../assets/juliane-header.png";
import jimenaHeader from "../../assets/jimena-header.png";
import weiHeader from "../../assets/wei-header.png";

/** Component for AboutPage
 *
 * Props:
 * - none
 *
 * State:
 * - readMoreShow: boolean for expanding our story section on mobile
 *
 * App -> AboutPage -> BioList
 *
 * Linked at /about
 */
const AboutPage = () => {
  // console.debug("AboutPage");

  const [readMoreShow, setReadMoreShow] = useState(false);

  const handleShow = () => setReadMoreShow(true);
  const handleHide = () => setReadMoreShow(false);

  return (
    <div className="AboutPage">
      <div className="AboutPage-desktop">
        <section className="AboutPage-header">
          <img src={headerBackground} alt="Three InCo members' headshots on an orange background" fetchpriority="high" />
        </section>
        <div className="AboutPage-our-story">
          <div className="AboutPage-content">
            <h1 style={{ marginBottom: ".5rem" }}>Our Story</h1>
            <p>
              Founder Tegan Barron combined their love of gaming and digital
              inclusive integration, bringing to life a collective of dynamic
              engineers, content writers, and designers. In its debut,
              Interconnected Collective has interpreted an immersive bingo
              game (for the fun of it!) to engage attendees at the Lesbians
              Who Tech & Allies conference, 2024.
            </p>
            <p>
              At InCo., we harness community training methodologies and
              creative collaboration to elevate our talents. Inspired by the
              neuroscience principle that "neurons that fire together wire
              together," we've curated a suite of tools and techniques
              designed to build something bigger than ourselves…an online
              bingo board that can be played around the world!
            </p>
          </div>
          <img
            src={logo}
            alt="InCo logo">
          </img>
        </div>
      </div>
      <div className="AboutPage-mobile">
        <h1 style={{ marginBottom: ".5rem" }}>Our Story</h1>
        <svg width="430" height="912" viewBox="0 0 430 912" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1227 89.8275C669.039 -120.42 744.533 112.133 277.686 54.8882C-189.162 -2.35701 65.451 588.786 102.401 724C237.677 1219.03 1227 577.901 1227 577.901V89.8275Z" fill="#FFD300" fillOpacity="0.15" />
        </svg>
        <img className="AboutPage-mobile-juliane" src={julianeHeader} alt="Headshot of InCo member Juliane in black and white" fetchpriority="high" />
        <div className="AboutPage-mobile-content">
          <p>
            Founder Tegan Barron combined their love of gaming and digital
            inclusive integration, bringing to life a collective of dynamic
            engineers, content writers, and designers. In its debut,
            Interconnected Collective has interpreted an immersive bingo
            game (for the fun of it!) to engage attendees at the Lesbians
            Who Tech & Allies conference, 2024.
          </p>
          {!readMoreShow && <div className="AboutPage-readmore" onClick={handleShow}>
            Read More
            <svg className="AboutPage-caretdown" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#000000" />
            </svg>
          </div>}
          {readMoreShow && <>
            <p>
              At InCo., we harness community training methodologies and
              creative collaboration to elevate our talents. Inspired by the
              neuroscience principle that "neurons that fire together wire
              together," we've curated a suite of tools and techniques
              designed to build something bigger than ourselves…an online
              bingo board that can be played around the world!
            </p>
            <div class="AboutPage-hide-readmore" onClick={handleHide}>
              <svg className="AboutPage-caretup" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 14.0303C16.2374 14.3232 15.7626 14.3232 15.4697 14.0303L12 10.5607L8.53033 14.0303C8.23744 14.3232 7.76256 14.3232 7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697L11.4697 8.96967C11.7626 8.67678 12.2374 8.67678 12.5303 8.96967L16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303Z" fill="#000000" />
              </svg>
            </div>
          </>}
        </div>
        <img className="AboutPage-mobile-jimena" src={jimenaHeader} alt="Headshot of InCo member Jimena with a dog in black and white" />
        <img className="AboutPage-mobile-wei" src={weiHeader} alt="Headshot of InCo member Wei in black and white" />
        <img
          className="AboutPage-mobile-inco-logo"
          src={logo}
          alt="InCo logo">
        </img>
      </div>
      <BioList />
    </div>
  );
};

export default AboutPage;

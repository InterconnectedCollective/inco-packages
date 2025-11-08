import { useState } from "react";
import RandomCards from "./RandomBios";
import BioList from "./BioList";
import "./AboutPage.css";
import "./BioCard.css"
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
        <div className="AboutPage-our-story" style={{ paddingTop: "12rem" }}>
          <div className="AboutPage-content">
            <div className="Squiggle-wrapper">
              <RandomCards />
            </div>
            <h1>What is InCo?</h1>
            <p><strong>Interconnected Collective:</strong> (Noun) A team of designers, engineers, and gamers dedicated to fostering community for LGBTQ+ folks by creating digital
              experiences that bring people together to grow their skills, experience, and network.</p>
          </div>
          <div className="AboutPage-content">
            <h1 style={{ marginBottom: ".5rem" }}>Our Story</h1>
            <div className="OurStory-wrapper">
              <div className="OurStory-p-wrapper">
                <p className="OurStory-p">
                  What do you get when you combine gaming, digital inclusive integration, and healthy competition at a scale of 15,000
                  LGBTQ+ folks and allies? Founder Tegan Barron answered that question by creating Interconnected Collective and
                  brought along a group of dynamic engineers, content writers, and designers to design an immersive bingo game to
                  engage attendees at the Lesbians Who Tech & Allies conference, 2024. All for the fun of it!
                </p>
                <p className="OurStory-p">
                  We at InCo. are inspired by the neuroscience principle “neurons that fire together, wire together” to build a strong team
                  that harnesses community training methodologies and creative collaborations. And just like neurons working together in
                  the brain to power the entire human body, we've curated a suite of tools and techniques designed to build experiences
                  and products to help our community connect and grow together.
                </p>
              </div>
              <img
                src={logo}
                alt="InCo logo">
              </img>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutPage-mobile">
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

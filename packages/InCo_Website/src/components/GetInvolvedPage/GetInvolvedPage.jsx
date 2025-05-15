import GetInvolvedForm from "./GetInvolvedForm";
import "./GetInvolvedPage.css";
import desktopHero from "../../assets/inco_joinus_desktop_new.png";
import mobileHero from "../../assets/drawings-group-1.png";
import mobileFooter from "../../assets/drawings-group-2.png";

/** Component for GetInvolved Page
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> GetInvolvedPage -> GetInvolvedForm
 *
 * Linked at /get-involved
 */
const GetInvolvedPage = () => {
    // console.debug("GetInvolvedPage");

    return (
        <div className="GetInvolvedPage">
            <img src={desktopHero} className="GetInvolvedPage-hero-desktop" alt="drawings of InCo members with InCo. in bold white letters" />
            <img src={mobileHero} className="GetInvolvedPage-hero-mobile" alt="drawings of InCo members with InCo. in bold white letters" />
            <div className="container GetInvolvedPage-content justify-content-center">
                <div className="col-11 col-md-8">
                    <h1>Join Interconnected Collective</h1>
                    <p>🌈 Lookin' for stretch assignments? Join Us! 🌐✨</p>
                    <p>🔍 We're actively seeking exceptional individuals in the following areas:</p>
                    <ul>
                        <li>Project Manager ⭐</li>
                        <li>Marketing 📷</li>
                        <li>Database Design 🗃️</li>
                        <li>Website Design 🌐</li>
                        <li>Front-End Development (JavaScript) 💻</li>
                        <li>Full Stack Development (JavaScript) 🚀</li>
                        <li>Graphic Design 🖼️</li>
                    </ul>
                    <br></br>
                    <p>
                        If you resonate with our message and have skills to showcase, seize this volunteer opportunity 🌟 Contribute to a real-world project for your portfolio, be a part of a powerful summit, and grow alongside an incredible tech team.
                    </p>
                    <br></br>
                    <p>
                        🚀 What awaits you?
                    </p>
                    <ul>
                        <li>Showcase your skills 🌈</li>
                        <li>Add a real-world project to your portfolio 📂</li>
                        <li>Learn and grow with like-minded peers 👩‍💻👨‍💻</li>
                    </ul>
                    <hr></hr>
                    <h2>Apply to Join Us</h2>
                    <GetInvolvedForm />
                </div>
            </div>
            <img src={mobileFooter} className="GetInvolvedPage-footer-mobile" alt="drawings of InCo members" />
        </div>
    );

};

export default GetInvolvedPage;
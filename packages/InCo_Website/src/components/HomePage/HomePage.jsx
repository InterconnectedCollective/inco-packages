
import "./HomePage.css";
import homepageOliviaGraphic from "../../assets/left_mainpage_image.png";
import imageAssets from "../../utils/Utils";

/** Component for HomePage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> HomePage
 */
const HomePage = () => {
    return (
        <div className="HomePage">
            <section className="HomePage-hero container">
                <div className="HomePage-hero-left">
                    <h1>We Are InCo.</h1>
                    <p className="HomePage-hero-name">[ Interconnected Collective ]</p>
                    <p className="HomePage-paragraph mb-0 mb-lg-5">
                        Creating community and building<br />
                        connections with bingo!
                    </p>
                    <a href="https://bingo.incocollective.com/" className="btn btn-primary btn-play-bingo HomePage-play-bingo-btn" id="HomePage-hero-desktop-btn">
                        Play Bingo
                    </a>
                </div>
                <div className="HomePage-hero-right">
                    <img
                        src={homepageOliviaGraphic}
                        loading="lazy"
                        alt="purple haired person with headphones and a laptop sitting on the golden gate bridge with a bingo board and confetti"
                        className="HomePage-OliviaGraphic"
                    ></img>
                </div>
                <a href="https://bingo.incocollective.com/" className="btn btn-primary btn-play-bingo HomePage-play-bingo-btn" id="HomePage-hero-mobile-btn">
                    Play Bingo
                </a>
            </section>
            <section className="HomePage-whats-inco container">
                <svg
                    width="829"
                    height="885"
                    viewBox="0 0 829 885"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="blueBlob z-0"
                >
                    <path
                        d="M-585 103.565C58 -138.836 -29 129.282 509 63.2825C1047 -2.71748 753.581 461.389 711 617.283C555.107 1188.02 -585 666.283 -585 666.283V103.565Z"
                        fill="#D8F7FE"
                        fillOpacity="0.75"
                    />
                </svg>
                <img
                    src={imageAssets.pinkCloud}
                    loading="lazy"
                    alt="tiny solo pink cloud"
                    className="pinkCloudImg"
                />
                <img
                    src={imageAssets.tealAndPurpleCloud}
                    loading="lazy"
                    alt="teal and purple clouds"
                    className="tealCloudImg"
                ></img>
                <img
                    src={imageAssets.greenAndPinkCloud}
                    loading="lazy"
                    alt="green and pink clouds"
                    className="greenCloudImg"
                ></img>
                <div className="HomePage-whats-inco-text">
                    <h2 className="">What's InCo?</h2>
                    <p className="HomePage-paragraph">
                        Breaking through digital walls with the power of fun and
                        the <br />
                        passion for people [or gamers]
                    </p>
                </div>
                <div className="HomePage-whats-inco-images">
                    <div className="HomePage-img-and-mtn">
                        <img
                            className="HomePage-whats-inco-image oliviaPortrait"
                            loading="lazy"
                            src={imageAssets.oliviaPortrait}
                            alt="black and white headshot of person with curly hair and glasses"
                        />
                        <img
                            src={imageAssets.blueMountain}
                            loading="lazy"
                            alt="blue mountain shape"
                            className="blueMountainImg z-2"
                        />
                    </div>
                    <img
                        className="HomePage-whats-inco-image laneDrawing"
                        loading="lazy"
                        src={imageAssets.laneDrawing}
                        alt="yellow drawing of person in orange sunglasses"
                    />
                    <img
                        className="HomePage-whats-inco-image vestDrawing"
                        loading="lazy"
                        src={imageAssets.vestDrawing}
                        alt="drawing of a vest on blue background"
                    />
                </div>
                <a href="/about" className="btn btn-info HomePage-pink-btn HomePage-whats-inco-btn">
                    Meet the Team
                </a>
            </section>
            <section className="HomePage-engaging container">
                <div className="HomePage-engaging-left">
                    <h2>
                        Engaging with Lesbians Who Tech
                    </h2>
                    <p className="HomePage-paragraph">
                        Every single member of Interconnected Collective came together
                        because of Lesbians Who Tech - an inspiring organization
                        that continues striving for women, women of color, and
                        nonbinary leaders. We hope to see you at an event!
                    </p>
                    <a href="https://lesbianswhotech.org" className="btn btn-info HomePage-pink-btn HomePage-engage-btn">
                        Learn About LWT
                    </a>
                </div>
                <div className="HomePage-engaging-right">
                    <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicLane"
                        loading="lazy"
                        alt="InCo member Lane drawn in a yellow jacket and a laptop standing against a background of a city and confetti"
                    />
                </div>
            </section>
            <section className="HomePage-not-grandmas">
                <img
                    src={imageAssets.bubbleGumGraphic}
                    className="bubbleGumGraphic z-1"
                    alt="bingo cards around a rainbow, including text pride and can you see my sceen"
                />
                <div className="HomePage-not-grandmas-right">
                    <h2>
                        Not Your Grandma's Bingo!
                    </h2>
                    <p className="HomePage-paragraph">
                        We created a light hearted game to stay engaged and
                        connect, all while learning and interacting with
                        attendees throughout the summit.
                    </p>
                    <a
                        className="btn btn-primary HomePage-play-bingo-btn"
                        href="https://bingo.incocollective.com/"
                    >
                        Play Bingo
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
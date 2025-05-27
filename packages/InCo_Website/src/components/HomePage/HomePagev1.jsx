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
      <>
         <section className="container hero position-relative">
            <div className="row d-flex align-items-stretch justify-content-between">
               <div className="col-lg-6 col-md-12 p-0 order-first order-md-1 order-lg-1 order-sm-1  d-flex flex-column justify-content-end position-relative col-title">
                  <h1 className="m-0">We Are InCo.</h1>
                  <div className="Header-text">
                     <p className="mb-lg-0">
                        <span className="attn-text">
                           [ Interconnected Collective ]
                        </span>
                     </p>
                  </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 order-lg-3 custom-order-3 order-md-last order-sm-last order-sm-3 d-flex flex-column overflow-visible position-relative">
                  <p>Creating community and building</p>
                  <p>connections with bingo!</p>
                  <a href="https://laneecho.github.io/LWT-bingo/">
                     <button
                        type="button"
                        className="btn btn-primary btn-play-bingo mt-5"
                     >
                        PLAY BINGO
                     </button>
                  </a>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 custom-order-2 order-md-2 order-sm-2 heroGraphic object-fit-contain ">
                  <img
                     src={homepageOliviaGraphic}
                     loading="lazy"
                     alt="purple haired person with headphones and a laptop sitting on the golden gate bridge with a bingo board and confetti"
                     className="homepageOliviaGraphic"
                  ></img>
               </div>
            </div>
         </section>

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
         <section className="container whatIsInco position-relative">
            <img
               src={imageAssets.pinkCloud}
               loading="lazy"
               alt="tiny solo pink cloud"
               className="pinkCloudImg z-2"
            />
            <img
               src={imageAssets.tealAndPurpleCloud}
               loading="lazy"
               alt="teal and purple cloud"
               className="tealCloudImg"
            ></img>

            <div className="who-we-are-graphic z-0 position-relative">
               <div className="container d-flex flex-column text-center justify-content-center who-are-we z-1 col-lg-12 col-md-12 position-relative">
                  <h2 className="z-1 mb-4">What's InCo?</h2>
                  <p className="we-are-subtitle z-1 mb-lg-5">
                     Breaking through digital walls with the power of fun and
                     the <br />
                     passion for people [or gamers]
                  </p>
                  <div className="row d-flex align-content-center justify-content-center z-1 position-relative">
                     <div className="col-xl-4 col-lg-12 col-12 position-relative oliviaOuterFrame p-0">
                        <div className="oliviaFrame position-relative">
                           <img
                              className="oliviaPortrait z-1"
                              loading="lazy"
                              src={imageAssets.oliviaPortrait}
                              alt="black and white headshot of person with curly hair and glasses"
                           />
                        </div>
                        <img
                           src={imageAssets.blueMountain}
                           loading="lazy"
                           alt="blue mountain shape"
                           className="blueMountainImg z-2"
                        />
                     </div>
                     <div className="col-xl-4 col-lg-12 col-12 whoWeAreFrame">
                        <img
                           className="laneDrawing"
                           loading="lazy"
                           src={imageAssets.laneDrawing}
                           alt="yellow drawing of person in orange sunglasses"
                        />
                     </div>
                     <div className="col-xl-4 col-lg-12 col-12 whoWeAreFrame">
                        <img
                           className="vestDrawing"
                           loading="lazy"
                           src={imageAssets.vestDrawing}
                           alt="drawing of a vest on blue background"
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <a href="/about">
                           <button
                              type="button"
                              className="btn btn-info team-button z-1 "
                           >
                              MEET THE TEAM
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="container body-bottom z-1 ">
            <div className="row d-flex flex-row-reverse">
               <div className="col-lg-7 order-2 m-0 p-0 z-1 ">
                  <div className="text-content col-xl-12 col-lg-12 col-md-12 col-sm-12">
                     <h2 className="row-h2 z-1">
                        Engaging with the Lesbians Who Tech Pride Summit
                     </h2>
                     <p className="who-are-we-p">
                        Every single member of Interconnected Collective came
                        together because of this Summit! Lesbians Who Tech is
                        such an inspiring organization that continues striving
                        for women, women of color, and nonbinary leaders. We
                        hope to see you there!
                     </p>
                     <a href="https://lesbianswhotech.org/pridesummit2024/">
                        <button
                           type="button"
                           className="btn btn-info summit-button center-md"
                        >
                           JOIN THE SUMMIT
                        </button>
                     </a>
                  </div>
               </div>
               <div className="col-lg-5 order-1 m-0 p-0">
                  <div className="graphicFrame">
                     <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicLane"
                        loading="lazy"
                        alt="InCo member Lane drawn in a yellow jacket and a laptop standing against a background of a city and confetti"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section className="container body-bottom p-0 overflow-hidden z-1 mb-lg-0 mb-md-5 mb-sm-0">
            <div className="row position-relative m-0 p-0 z-1">
               <div className="col-lg-12 position-relative d-flex grandmas-bingo align-items-center justify-content-lg-center justify-content-md-between z-1 column-gap-lg-3 gap-md-0 gap-sm-0 mb-lg-0">
                  <div className="col-lg-7 col-md-12 col-sm-12 order-2 z-1 bg-transparent d-flex flex-column mt-lg-6 mt-md-0 ">
                     <h2 className="row-h2 col-md-12 col-sm-12 mt-md-5 mt-sm-0 d-flex flex-row align-content-center">
                        Not Your Grandma's Bingo!
                     </h2>
                     <p className="who-are-we-p col-md-10 col-sm-12">
                        We created a light hearted game to stay engaged and
                        connect, all while learning and interacting with
                        attendees throughout the summit.
                     </p>
                     <a
                        className="btn btn-primary btn-play-bingo-purple center-md "
                        href="https://laneecho.github.io/LWT-bingo/"
                     >
                        {" "}
                        PLAY BINGO
                     </a>
                  </div>
                  <div
                     className="col-lg-6 col-md-12 graphicFrame order-1 z-2 d-flex justify-content-center bubbleGumFrame mb-md-2 mb-lg-5"                  >
                     <img
                        src={imageAssets.bubbleGumGraphic}
                        className="bubbleGumGraphic z-1"
                        alt="bingo cards around a rainbow, including text pride and can you see my sceen"
                     />
                  </div>
               </div>
            </div>
         </section>
         <div className="wave-container container-fluid z-0 overflow-hidden w-0">
            <img
               className="wave-graphic z-0"
               src={imageAssets.homepageWave}
               alt="purple wave shape"
            />
         </div>
      </>
   );
};

export default HomePage;

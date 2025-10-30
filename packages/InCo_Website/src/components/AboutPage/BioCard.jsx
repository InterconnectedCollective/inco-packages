import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { ArrowRightShort } from "react-bootstrap-icons";
import "./BioCard.css";
import { Bio } from "./bios";
// import BioModal from "./BioModal";


/** Component for BioCard
 *
 * Props:
 * - bio: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn,
 *   behance, github, otherSocial, emoji, reasonForJoining, gainedFromInCo }
 *
 * State:
 * - show: boolean for showing modal
 *
 * BioList -> BioCard -> BioModal
 */
const BioCard = ({ bio }) => {
    // console.debug("BioCard", bio);

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            <ReactCardFlip className="characterCard" cardZIndex="0" isFlipped={isFlipped} flipDirection="horizontal">
                {/* Front of card */}
                {bio instanceof Bio
                    ? <div className={`BioCard-${bio.color}`} style={{ order: bio.mobileOrder }}>
                        <div className="BioCard-link-1">
                            {bio.linkedIn && <div className="BioCard-Btn"><a href={bio.linkedIn}>
                                LinkedIn
                                <svg
                                    className="underline"
                                    viewBox="0 0 100 5"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,3 C20,1 80,5 100,3"
                                        stroke="#8B56A0F5"
                                        strokeWidth="2"
                                        fill="transparent"
                                    />
                                </svg>
                            </a>
                            </div>}
                        </div>
                        <div className="BioCard-link-2">
                            {bio.linkedIn && <div className="BioCard-Btn"><a href={bio.portfolio}>
                                Portfolio
                                <svg
                                    className="underline"
                                    viewBox="0 0 100 5"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,3 C20,1 80,5 100,3"
                                        stroke="#8B56A0F5"
                                        strokeWidth="2"
                                        fill="transparent"
                                    />
                                </svg>
                            </a>
                            </div>}
                        </div>
                        <div
                            onClick={() => setIsFlipped((prev) => !prev)}
                            className="CardFront"
                        >
                            <div className="BioCard-graphics">
                                <img
                                    className="BioCard-headshot img-fluid"
                                    // style={{
                                    //     borderColor: bio.color === "purple"
                                    //         ? "#7030A0"
                                    //         : "#FFA629"
                                    // }}
                                    src={bio.photo}
                                    alt={bio.name}
                                    loading="lazy"
                                />
                                {bio.greyscale &&
                                    <img
                                        className="BioCard-drawing img-fluid"
                                        // style={{
                                        //     borderColor: bio.color === "purple"
                                        //         ? "#7030A0"
                                        //         : "#FFA629"
                                        // }}
                                        src={bio.greyscale}
                                        alt={`${bio.name} headshot`}
                                        loading="lazy"
                                    />}

                            </div>
                            <div className="BioCard-name">{bio.name}</div>
                            <div className="BioCard-pronouns">
                                {bio.pronouns}
                            </div>
                            <div className="BioCard-role">
                                {bio.role}
                            </div>
                        </div>

                    </div>
                    : <div className={`BioCard-blank BioCard-graphics ${bio.stylingClass || ""}`} style={{ order: bio.mobileOrder }}>
                        <img className="BioCard-blank-img img-fluid" src={bio.image} alt={bio.alt} loading="lazy" />
                        <img className="BioCard-blank-hover img-fluid" src={bio.hover} alt={bio.alt} loading="lazy" />
                    </div>
                }
                {/* Back of card */}
                <div onClick={() => setIsFlipped((prev) => !prev)} className="CardBack">
                    <div className={`BioCard-${bio.color}`} style={{ order: bio.mobileOrder }}>
                        <div className="BioCard-Bio">
                            {bio.bio}
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </>

    );
};

export default BioCard;


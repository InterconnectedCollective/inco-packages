import { useState } from "react";
import { ArrowRightShort } from "react-bootstrap-icons";
import "./BioCard.css";
import { Bio } from "./bios";
import BioModal from "./BioModal";

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
    const [modalShow, setModalShow] = useState(false);

    const handleShow = () => setModalShow(true);

    return (
        <>
            {bio instanceof Bio
                ? <div className={`BioCard-${bio.color}`} style={{order:bio.mobileOrder}} onClick={handleShow}>
                    <div className="BioCard-graphics">
                        <img
                            className="BioCard-headshot img-fluid"
                            style={{
                                borderColor: bio.color === "purple"
                                    ? "#7030A0"
                                    : "#FFA629"
                            }}
                            src={bio.photo}
                            alt={bio.name}
                            loading="lazy"
                        />
                        {bio.drawing &&
                            <img
                                className="BioCard-drawing img-fluid"
                                style={{
                                    borderColor: bio.color === "purple"
                                        ? "#7030A0"
                                        : "#FFA629"
                                }}
                                src={bio.drawing}
                                alt={`${bio.name} headshot`}
                                loading="lazy"
                            />}
                        <div className={`BioCard-arrow-${bio.color}`}>
                            <ArrowRightShort size={36} />
                        </div>
                    </div>

                    <div className="BioCard-name">{bio.name}</div>
                    <div className="BioCard-pronouns">
                        {bio.pronouns}
                    </div>
                    <div className="BioCard-role">
                        {bio.role}
                    </div>
                </div>
                : <div className={`BioCard-blank BioCard-graphics ${bio.stylingClass || ""}`} style={{order:bio.mobileOrder}}>
                    <img className="BioCard-blank-img img-fluid" src={bio.image} alt={bio.alt} loading="lazy" />
                    <img className="BioCard-blank-hover img-fluid" src={bio.hover} alt={bio.alt} loading="lazy" />
                </div>
            }
            <BioModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                bio={bio}
            />
        </>

    );
};

export default BioCard;


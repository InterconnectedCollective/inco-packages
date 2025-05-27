import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./BioModal.css";
import { X } from "react-bootstrap-icons";

/** Component for BioModal
 *
 * Props:
 * - bio: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn,
 *   behance, github, otherSocial, emoji, reasonForJoining, gainedFromInCo }
 *
 * State:
 * - readMoreShow: boolean for expanding q and a section on mobile
 *
 * BioCard => BioModal
 *
 */
const BioModal = ({ bio, ...props }) => {

  const [readMoreShow, setReadMoreShow] = useState(false);

  const handleShow = () => setReadMoreShow(true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="BioModal-desktop">
          <div className="BioModal-left">
            <img width="100%" src={bio.photo} alt={`${bio.name} headshot`} />
            {bio.linkedIn && <div className="btn btn-primary BioModal-social-button"><a href={bio.linkedIn}>LinkedIn</a></div>}
            {bio.portfolio && <div className="btn btn-primary BioModal-social-button"><a href={bio.portfolio}>Portfolio</a></div>}
            {bio.github && <div className="btn btn-primary BioModal-social-button"><a href={bio.github}>GitHub</a></div>}
            {bio.behance && <div className="btn btn-primary BioModal-social-button"><a href={bio.behance}>Behance</a></div>}
            {bio.otherSocial && <div className="btn btn-primary BioModal-social-button"><a href={bio.otherSocial}>Social Media</a></div>}
          </div>
          <div className="BioModal-right">
            <div className="BioModal-right-top">
              <div className="BioModal-info">
                <div className="BioModal-name">
                  {bio.name}
                  <div className="BioModal-pronouns">
                    ({bio.pronouns})
                  </div>
                </div>
                <div className="BioModal-role">
                  {bio.role}
                </div>
                <div className="BioModal-bio">
                  {bio.bio}
                </div>
              </div>
              <div className="BioModal-close" onClick={props.onHide}><X size={36} /></div>
            </div>
            <div className="BioModal-qanda">
              <div className="BioModal-reasonForJoining">
                <span className="BioModal-question"><span className="BioModal-q">Q.</span> Why did you join the group?</span><br></br>
                <span><span className="BioModal-a">A:</span> {bio.reasonForJoining}</span>
              </div>
              <div className="BioModal-gainedFromInCo">
                <span className="BioModal-question"><span className="BioModal-q">Q.</span> What have you gained from InCo?</span><br></br>
                <span><span className="BioModal-a">A:</span> {bio.gainedFromInCo}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="BioModal-mobile">
          <div className="BioModal-close" onClick={props.onHide}><X size={36} /></div>
          <div className="BioModal-mobile-graphics">
            <img width="100%" src={bio.photo} alt={bio.name} />
            <div className="BioModal-name">
              {bio.name}
              <div className="BioModal-pronouns">
                {bio.pronouns}
              </div>
            </div>
            <div className="BioModal-role">
              {bio.role}
            </div>
          </div>
          <div className="BioModal-buttons">
            {bio.linkedIn && <div className="btn btn-primary BioModal-social-button"><a href={bio.linkedIn}>LinkedIn</a></div>}
            {bio.portfolio && <div className="btn btn-primary BioModal-social-button"><a href={bio.portfolio}>Portfolio</a></div>}
            {bio.github && <div className="btn btn-primary BioModal-social-button"><a href={bio.github}>GitHub</a></div>}
            {bio.behance && <div className="btn btn-primary BioModal-social-button"><a href={bio.behance}>Behance</a></div>}
            {bio.otherSocial && <div className="btn btn-primary BioModal-social-button"><a href={bio.otherSocial}>Social Media</a></div>}
          </div>
          <div className="BioModal-qanda">
            <div className="BioModal-reasonForJoining">
              <span className="BioModal-question"><span className="BioModal-q">Q.</span> Why did you join the group?</span><br></br>
              <span><span className="BioModal-a">A:</span> {bio.reasonForJoining}</span>
            </div>
            {!readMoreShow && <div className="BioModal-readmore" onClick={handleShow}>
              Read More
              <svg className="AboutPage-caretdown" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#000000" />
              </svg>
            </div>}
            {readMoreShow && <div className="BioModal-gainedFromInCo">
              <span className="BioModal-question"><span className="BioModal-q">Q.</span> What have you gained from InCo?</span><br></br>
              <span><span className="BioModal-a">A:</span> {bio.gainedFromInCo}</span>
            </div>}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BioModal;
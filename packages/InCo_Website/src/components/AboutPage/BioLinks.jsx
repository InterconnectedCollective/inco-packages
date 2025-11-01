import "./BioLinks.css";

/** Component for displaying a member's links on their BioCard
 *
 * Props:
 * - bio: { 
 *      portfolio: string (URL),
 *      linkedIn: string (URL)
 * }
 *  
 * Behavior:
 * - If the member's bio does NOT have a portfolio link, displays only the LinkedIn button
 * - If the member's bio DOES have a portfolio link, displays both buttons
 */

function RenderBioLinks({ bio }) {
  if (!bio.portfolio) {
    return (
      <div className="BioCard-link-solo">
        {bio.linkedIn && (
          <div className="BioCard-Btn"><a href={bio.linkedIn}>
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
          </div>
        )}
      </div>
    );
  }
  else {
    return (
      <>
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
          </div>
          }
        </div>
      </>
    );
  }
}

export default RenderBioLinks;
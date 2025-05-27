import "./NotFoundPage.css";

/** Component for NotFoundPage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> NotFoundPage
 *
 * Linked at /*
 */
const NotFoundPage = () => {
    console.debug("NotFoundPage");

    return (
        <div className="NotFoundPage">
            <div className="NotFoundPage-404">404</div>
            <div className="NotFoundPage-message">
                Hmm...we can't find that page.
            </div>
            <div className="NotFoundPage-bar"></div>
            <div className="NotFoundPage-buttons">
                <a href="https://bingo.incocollective.com"
                    className="btn btn-primary NotFoundPage-button"
                >
                    Play Bingo
                </a>
                <a href="/"
                    className="btn btn-primary NotFoundPage-button"
                >
                    Go Home
                </a>
            </div>

        </div>
    );
};

export default NotFoundPage;
import { useState } from "react";
import "./NewsletterForm.css";

/** Component for NewsletterForm
 *
 * Props:
 * - none
 *
 * State:
 * - email
 * - message: string shown on submit
 *
 * Footer -> NewsletterForm
 */

const NewsletterForm = () => {
    // console.debug("NewsletterForm");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);

    /** Update form input. */
    function handleChange(evt) {
        setEmail(evt.target.value);
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    /** Send form data on form submit and show outcome message. */
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(handleSubmit);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "NewsletterForm", email })
        })
            .then(() => setMessage("Thanks for signing up!"))
            .catch(error => setMessage(error));
    }

    return (
        <>
            <h3>Join our newsletter!</h3>
            <p>
                Stay up to date with all things InCo!
            </p>
            <form
                name="NewsletterForm"
                className="form-group"
                id="NewsletterForm-app"
                onSubmit={handleSubmit}
            >
                <input name="email" type="email" onChange={handleChange} placeholder="Enter Email Address"></input>
                <button type="submit" className="btn subscribe">
                    SUBSCRIBE
                </button>
                <input type="hidden" name="form-name" value="NewsletterForm" />
                {message && <div className="alert alert-success" role="alert">
                    <p>{message}</p>
                </div>}
            </form>
        </>
    );
};

export default NewsletterForm;
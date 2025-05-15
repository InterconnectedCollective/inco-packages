import { useState } from "react";
import "./GetInvolvedForm.css";

const FORM_SUBMIT_THANKS = `Thank you for your submission. Our team will look
over your details and get back to you shortly!`;

/** Component for GetInvolvedForm
 *
 * Props:
 * - none
 *
 * State:
 * - formData: {firstName, lastName, prefName, pronouns, dob, city, state,
 * timezone, gender, sexualOrientation, email, linkedIn, github, portfolio,
 * skills, goals, referral, otherComments}
 * - message: null or thank you message
 *
 * GetInvolevdPage -> GetInvolvedForm
 */
const GetInvolvedForm = () => {
    const initialFormData = {
        firstName: "",
        lastName: "",
        prefName: "",
        pronouns: "she",
        dob: "",
        city: "",
        state: "AL",
        timezone: "",
        gender: "agender",
        sexualOrientation: "lesbian",
        phone: "",
        email: "",
        linkedIn: "",
        github: "",
        portfolio: "",
        skills: "",
        goals: "",
        referral: "",
        otherComments: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [message, setMessage] = useState(null);

    // console.debug("GetInvolvedForm", formData);

    /** Update form input. */
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData((currData) => {
            currData[fieldName] = value;
            return { ...currData };
        });
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    /** Send form data on form submit and show outcome message. */
    function handleSubmit(evt) {
        evt.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "GetInvolvedForm", ...formData })
        })
            .then(() => setMessage(FORM_SUBMIT_THANKS))
            .catch(error => alert(error));
    }

    return (
        <form
            name="GetInvolvedForm"
            className="GetInvolvedForm form-group"
            id="GetInvolvedForm-app"
            onSubmit={handleSubmit}
        >
            <div className="row">
                <h3>Personal Information</h3>
                <div className="col-md-6 my-3">
                    <label htmlFor="firstName" className="form-label">First Name:*</label>
                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" value={formData.firstName} required onChange={handleChange}></input>
                </div>
                <div className="col-md-6 my-3">
                    <label htmlFor="lastName">Last Name:*</label>
                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} required onChange={handleChange}></input>
                </div>
                <div className="col-md-6 my-3">
                    <label htmlFor="prefName">Preferred Name:</label>
                    <input type="text" name="prefName" id="prefName" className="form-control" placeholder="What should we call you?" value={formData.prefName} onChange={handleChange}></input>
                </div>
                <div className="col-md-6 my-3">
                    <label htmlFor="pronouns">Pronouns:*</label>
                    <select className="form-select" name="pronouns" id="pronouns" form="GetInvolvedForm-app" required onChange={handleChange}>
                        <option value="she-her">She / Her</option>
                        <option value="he-him">He / Him</option>
                        <option value="they-them">They / Them</option>
                        <option value="she-they">She / They</option>
                        <option value="he-they">He / They</option>
                        <option value="mx">Mx</option>
                        <option value="ze-zir">Ze / Zir</option>
                        <option value="ey-em">Ey / Em</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="dob">Date of Birth:*</label>
                    <input type="date" name="dob" id="dob" className="form-control" value={formData.dob} required onChange={handleChange}></input>
                </div>
                <div className="form-group col-md-6 my-3">
                    <label htmlFor="city">City:*</label>
                    <input type="text" name="city" id="city" className="form-control" placeholder="City" value={formData.city} required onChange={handleChange}></input>
                </div>
                <div className="form-group col-md-6 my-3">
                    <label htmlFor="state">State:*</label>
                    <select className="form-select" name="state" id="state" form="GetInvolvedForm-app" required onChange={handleChange}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="timezone">Timezone:</label>
                    <input type="text" name="timezone" id="timezone" className="form-control" placeholder="UTC" value={formData.timezone} onChange={handleChange}></input>
                </div>
                <div className="form-group col-md-6 mt-3 mb-5">
                    <label htmlFor="gender">Gender Identity:</label>
                    <select className="form-select" name="gender" id="gender" form="GetInvolvedForm-app" onChange={handleChange}>
                        <option value="agender">Agender</option>
                        <option value="bigender">Bigender</option>
                        <option value="cisgender">Cisgender</option>
                        <option value="gender-non-conforming">Gender Non-Confoming</option>
                        <option value="gender-queer">Gender Queer</option>
                        <option value="man">Man</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="transgender">Transgender</option>
                        <option value="woman">Woman</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mt-3 mb-5">
                    <label htmlFor="sexualOrientation">Sexual Orientation:</label>
                    <select className="form-select" name="sexualOrientation" id="sexualOrientation" form="GetInvolvedForm-app" onChange={handleChange}>
                        <option value="lesbian">Lesbian</option>
                        <option value="gay">Gay</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="queer">Queer</option>
                        <option value="asexual">Asexual</option>
                        <option value="straight">Straight</option>
                        <option value="ally">Ally</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <h3>Contact Information</h3>
                <div className="form-group my-3">
                    <label htmlFor="phone">Phone:*</label>
                    <input type="tel" name="phone" id="phone" className="form-control" placeholder="555-555-5555" value={formData.phone} required onChange={handleChange}></input>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email:*</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="hello@email.com" value={formData.email} required onChange={handleChange}></input>
                </div>
                {/* <div className="form-group my-3">
                    <label htmlFor="linkedin">LinkedIn:*</label>
                    <input type="url" name="linkedin" id="linkedin" className="form-control" placeholder="https://www.linkedin.com/in/your-profile" value={formData.linkedIn} required onChange={handleChange}></input>
                </div> */}
                <div className="form-group my-3">
                    <label htmlFor="linkedIn">LinkedIn:*</label>
                    <input type="url" name="linkedIn" id="linkedIn" className="form-control" placeholder="https://linkedin.com/in/your-profile" value={formData.linkedIn} onChange={handleChange}></input>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="github">GitHub:</label>
                    <input type="url" name="github" id="github" className="form-control" placeholder="https://github.com/your-profile" value={formData.github} onChange={handleChange}></input>
                </div>
                <div className="form-group mt-3 mb-5">
                    <label htmlFor="portfolio">Portfolio:</label>
                    <input type="url" name="portfolio" id="portfolio" className="form-control" placeholder="https://yourprofile.com" value={formData.portfolio} onChange={handleChange}></input>
                </div>
                <h3>Additional Information</h3>
                <div className="form-group my-3">
                    <label htmlFor="background">Do you have any specific skills, experiences, or education that may apply?* </label>
                    <textarea name="background" id="background" className="form-control" value={formData.background} required onChange={handleChange}></textarea>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="skills">What skills are you most interested in learning about / want to develop to achieve your career goals?* </label>
                    <textarea name="skills" id="skills" className="form-control" value={formData.skills} required onChange={handleChange}></textarea>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="goals">What are your professional goals for the next 1-3 years?* </label>
                    <textarea name="goals" id="goals" className="form-control" value={formData.goals} required onChange={handleChange}></textarea>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="referral">Who were you referred by?</label>
                    <input type="text" name="referral" id="referral" className="form-control" placeholder="(if anyone)" value={formData.referral} onChange={handleChange}></input>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="otherComments">Anything else we should know about you or that you'd like to tell us? </label>
                    <textarea name="otherComments" id="otherComments" className="form-control" value={formData.otherComments} onChange={handleChange}></textarea>
                </div>
                <input type="hidden" name="form-name" value="GetInvolvedForm" />
                {message && <div className="alert alert-success" role="alert">
                    <p>{message}</p>
                </div>}
                <button type="submit" className="btn btn-primary GetInvolvedForm-button btn-sm">Submit</button>
            </div>
        </form>
    );
};

export default GetInvolvedForm;
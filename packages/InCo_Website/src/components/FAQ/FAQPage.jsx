import Accordion from 'react-bootstrap/Accordion';
import parse from 'html-react-parser';
import { FAQS } from './faqs';
import "./FAQPage.css";

/** Component for FAQPage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> FAQPage
 *
 * Linked at /faq
 */
const FAQPage = () => {
   // console.debug("FAQPage");
   return (
      <div className="FAQPage">
         <h1>Got Questions?</h1>
         <p>We’ve got answers. If you don’t see your question answered here, email <a href="mailto:intercoll.team@gmail.com">intercoll.team@gmail.com</a> </p>
         <div className="FAQPage-questions">
            <h2>FAQ</h2>
            {FAQS.map((faq, idx) => (
               <Accordion key={idx}>
                  <Accordion.Item eventKey={idx}>
                     <Accordion.Header className="FAQPage-question">{faq.question}</Accordion.Header>
                     <div className="FAQPage-bar"></div>
                     <Accordion.Body className="FAQPage-answer">
                        {parse(faq.answer)}
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            ))}
         </div>
      </div>
   );
};

export default FAQPage;

class FAQ {
  /** Class for FAQs. Requires question and answer. */
  constructor (question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

const FAQ_1 = new FAQ(
  "What does this Bingo Game do for you? / What do YOU get out of ME playing BINGO?",
  "InCo was founded in part as a challenge to expand our knowledge in tech and business and share it with others. We created a BINGO game as a fun way for attendees to ‘play along’ with in-person peeps, stay engaged, and have something neat to talk about."
)

const FAQ_2 = new FAQ(
  "Who is this game for?",
  "YOU! This game is for best friends, co-workers, that person you interned with, and your retired neighbor too. We made this game for everyone who is 18+. Please see our terms of service."
)

const FAQ_3 = new FAQ(
  "How can I play?",
  "You can start at <a href='/'>incocollective.com</a> and hit the button that says “Play Bingo!”"
)

const FAQ_4 = new FAQ(
  "Do I have to register to play?",
  "Registration is only required to claim your rightful place on the leaderboard, but it is totally optional to play. But, I mean, those sweet, sweet INTERNET POINTS.."
)

const FAQ_5 = new FAQ(
  "Are there any prizes?",
  "Not at the moment, but bragging rights!"
)

const FAQ_6 = new FAQ(
  "Where can I get current news and updates on InCo?",
  `You can check us out in the following places:
  <ul>
  <li><a href="https://www.linkedin.com/company/interconnected-collective/">LinkedIn</a></li>
  <li><a href="https://www.facebook.com/people/Interconnected-Collective/61558814939983/">Facebook</a></li>
  <li><a href="https://www.instagram.com/interconnectedco/">Instagram</a></li>
  <li><a href="https://incocollective.com">InCo Website</a></li>
  </ul>
    `
)

const FAQ_7 = new FAQ(
  "Is InCo associated with Lesbians Who Tech?",
  "Nope. InCo first created the BINGO game when we attended our first Lesbians Who Tech conference, but we are not affiliated with or related to Lesbians Who Tech."
)

const FAQ_8 = new FAQ(
  "Is this game really free? Are there any hidden charges or fees associated with it?",
  "This game is 100% free. It’s our way of showcasing our team's skills and piquing your interest. ((eyebrows, eyebrows))"
)

const FAQ_9 = new FAQ(
  "What format is the game in, and what software or applications do I need to use it?",
  "You are good to play on any operating system!"
)

const FAQ_10 = new FAQ(
  "How can I provide feedback or report any issues with the digital product?",
  "We’d love your thoughts and feedback! Feel free to email us a <a href='mailto:intercoll.team@gmail.com'>intercoll.team@gmail.com</a>."
)

const FAQ_11 = new FAQ(
  "Will my personal information be collected or stored when I play?",
  "We don't directly store anything about the user in our database, but Googles authentication system does store off the basic information needed to authenticate to the account (either GitHub or Google)."
)

const FAQ_12 = new FAQ(
  "Are there any updates or new versions planned for this digital product?",
  "You can bet your flannel on it. We are constantly striving to evolve our digital product(s) to reflect our players' interests and the talents of our team."
)

const FAQ_13 = new FAQ(
  "Can I use this game for commercial purposes, such as in my business or on my website?",
  "While we are absolutely flattered, InCo is for private and personal use only without the written consent of the InCo organization. If you’d like to talk to us about using it for your website or business, please reach out to us at <a href='mailto:intercoll.team@gmail.com'>intercoll.team@gmail.com</a>."
)

const FAQ_14 = new FAQ(
  "I have a potential project for InCo. What is the next step?",
  "Reach out to us at <a href='mailto:intercoll.team@gmail.com'>intercoll.team@gmail.com</a>."
)

const FAQ_15 = new FAQ(
  "How do I get involved?",
  "Visit our <a href='/get-involved'>Get Involved page</a> and complete the intake form. We will get in contact with you about our current or upcoming projects!"
)

export const FAQS = [
  FAQ_1,
  FAQ_2,
  FAQ_3,
  FAQ_4,
  FAQ_5,
  FAQ_6,
  FAQ_7,
  FAQ_8,
  FAQ_9,
  FAQ_10,
  FAQ_11,
  FAQ_12,
  FAQ_13,
  FAQ_14,
  FAQ_15,
];
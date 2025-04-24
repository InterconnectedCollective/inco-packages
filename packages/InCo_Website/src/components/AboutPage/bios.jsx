import defaultImage from "../../assets/defaultAboutImage.png";

// Team bios: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn,
// emoji, reasonForJoining, gainedFromInCo }
class Bio {
  constructor (
    name,
    pronouns,
    role="InCo Team Member",
    bio="Bio coming soon.",
    photo=defaultImage,
    drawing,
    portfolio,
    linkedIn,
    behance,
    github,
    otherSocial,
    emoji,
    reasonForJoining,
    gainedFromInCo,
    color="purple", // purple is the default color for borders and hover effects
  ) {
    this.name = name;
    this.pronouns = pronouns;
    this.role = role;
    this.bio = bio;
    this.photo = photo;
    this.drawing = drawing;
    this.portfolio = portfolio;
    this.linkedIn = linkedIn;
    this.behance = behance;
    this.github = github;
    this.otherSocial = otherSocial;
    this.emoji = emoji;
    this.reasonForJoining = reasonForJoining;
    this.gainedFromInCo = gainedFromInCo;
    this.color = color;
  }
}

const TEGAN = new Bio(
  "Tegan Barron",
  "She/They",
  "Founder",
  `Tegan Barron has over ten years in Tech, is the Founder of InCo. As a
  Change Management & future Director | Six Sigma | Lean | Leading global Change
  Management with Optimization, Modernization, Training, Documentation, and
  Cross-Functional Teams engagement.`,
  "/headshots/tegan_headshot.jpg",
  "/drawings/tegan_drawing.png",
  undefined,
  "https://www.linkedin.com/in/tegan-barron/",
  undefined,
  undefined,
  undefined,
  undefined,
  "Whether you're taking your first steps into the professional world, navigating a career transition, or seeking a fresh challenge as an expert, InCo is here to support your journey. I have been experienced all 3 step in my career and all I needed was a safe space to grow with others. That is why I started this group so folx can get out of the edie of needing experience to get a job but to have a job you need to have experience.",
  "Community, friends, and so many good times.",
);

const LIZ = new Bio(
  "Liz Baranowicz",
  "She/Her",
  "Lead UX Designer",
  `UXer with strengths in research, interaction design, and strategy // Lifelong dabbler and lowbrow artist // Unexpected corporate techie​`,
  "/headshots/liz_headshot.jpg",
  "/drawings/liz_drawing.png",
  "https://www.lizbaranowicz.com",
  "https://www.linkedin.com/in/liz-baranowicz/",
  undefined,
  undefined,
  undefined,
  undefined,
  "Go be a part of an amazing and innovative project with cool people and build queer community!​",
  "This project has helped me grow my technical skills, but also forge a network of likeminded friends and collaborators – every time I leave one of our meetings or worksessions, I feel energized and excited and ready to take on the tech world.​",
);

const LANE = new Bio(
  "Lane Hamilton",
  "She/They",
  "Frontend Engineer",
  `I'm a Los Angeles based frontend Software Engineer with experience in
  developing JavaScript applications using React/ Next.js. Passionate about apps
  having an aesthetically pleasing design.​`,
  "/headshots/lane_headshot.jpg",
  "/drawings/lane_drawing.png",
  "https://github.com/LaneEcho ",
  "https://www.linkedin.com/in/aleyna-hamilton/",
  undefined,
  undefined,
  undefined,
  undefined,
  "For fun! And to get experience by creating a project that people will see and use.​",
  "A cool project to add to my resume, and experience working with a UX/ UI team! ",
);

const OLIVIAS = new Bio(
  "Olivia Servaes​",
  "She/Her",
  "Lead UI Designer",
  "Dynamic Digital Designer specializing in storytelling to elevate your brand ",
  "/headshots/olivias_headshot.jpeg",
  "/drawings/olivias_drawing.png",
  "http://oliviaservaes.com/",
  "https://www.linkedin.com/in/oliviaservaes/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I am always on the lookout for community in all aspects of my life, and the Interconnected Collective immediately stood out as a fantastic opportunity to connect with like-minded individuals in the tech space. ",
  "Being part of InCo has been invaluable for developing my teamwork skills. As a freelance designer, I usually work alone, but collaborating with others here has expanded my perspectives and enhanced my ability to integrate diverse feedback effectively.",
);

const JIMENA = new Bio(
  "Jimena Cuadros",
  "She/Her",
  "Senior Software Eng.",
  "Senior Software Engineer at Signal Advisors | React Expert with a Passion for UI/UX Design | DEIB Advocate | Advocate for Environmental Sustainability | Comp Sci Graduate from Western Michigan University",
  "/headshots/jimena_headshot.jpg",
  "/drawings/jimena_drawing.png",
  undefined,
  "https://www.linkedin.com/in/jimena-cuadros/ ",
  undefined,
  undefined,
  undefined,
  undefined,
  "To step out of my comfort zone, learn and collaborate from others!​",
  "Interconnected Collective has been awesome for making new friends and diving into stuff like databases—way out of my comfort zone. It's been a great ride getting into new areas and upping my game in DEIB. Excited for more!",
);

const LYNDS = new Bio(
  "Lynds Lesh",
  "They/Them",
  "Illustrator & Lead Visual",
  "I'm a future NYC-based design generalist (previous Chicago) and illustrator emphasizing visual craft and navigating compelling problems. I also love finding what makes users get excited about a product. ",
  "/headshots/lynds_headshot.jpg",
  "/drawings/lynds_drawing.png",
  "https://www.lyndslesh.com/",
  "https://www.linkedin.com/in/lyndsey-lesh/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I wanted to contribute to a fun group initiative led by LGBTQ+ folx - helping create something that celebrated the joy of gaming.",
  "The appreciation for breaking down digital barriers.",
);

const OLIVIAM = new Bio(
  "Olivia McCartney",
  "-",
  "Dynamo Marketing",
  "Dynamic marketing professional with proven expertise in driving audience engagement with diverse marketing tools and creative storytelling. ",
  "/headshots/oliviam_headshot.jpg",
  "/drawings/oliviam_drawing.png",
  undefined,
  "https://www.linkedin.com/in/omccartney/",
  undefined,
  undefined,
  undefined,
  undefined,
  "To build community, further my professional connections, and hone my skills for dynamic marketing with an emphasis on creative storytelling.",
  "I've been able to enhance my queer community, establish authentic connections with like-minded professionals, and elevated my creative marketing skills.",
);

const JULIANE = new Bio(
  "Juliane Cassidy",
  "They/Them",
  "Frontend Engineer",
  `I am a fullstack software engineer working in JavaScript, TypeScript, React, Python, and
  Django. With a background in web design and database administration, I focus on
  building the interfaces that let end users intuitively interact with data and
  content.`,
  "/headshots/juliane_headshot.png",
  "/drawings/juliane_drawing.png",
  "https://julianecassidy.com/",
  "https://www.linkedin.com/in/julianemcassidy/",
  undefined,
  "https://github.com/julianecassidy",
  undefined,
  undefined,
  "I joined InCo to take on more front end projects, collaborate with a team, and build my community.",
  "I've gotten to work with a really cool group of folks and the opportunity to translate other people's designs into code has been incredible."
);

const CHELSEA = new Bio(
  "Chelsea Snider",
  "She/They",
  "Fullstack Developer",
  `I am a fullstack software developer with experience in JavaScript, TypeScript, React, and Java Spring Boot. I enjoy working with clients to create intuitive and stylish user interfaces, leveraging my skills to develop efficient, scalable, and visually stunning software solutions.`,
  "/headshots/chelsea_headshot.png",
  "/drawings/chelsea_drawing.png",
  "https://chelseasnider.netlify.app/",
  "https://www.linkedin.com/in/chelsea-snider/",
  undefined,
  "https://github.com/cswebdev",
  undefined,
  undefined,
  "I joined InCo to use my experience to help my fellow folks in the LGBTQIA+ community. In addition, I love playing games and web programming, and I'm thrilled to contribute to this wonderful community!​",
  "Community and being able to work with a fantastic group of talented and motivated people!"
);

const WEI = new Bio(
  "Wei Yun Lim",
  "They/She",
  "Operations",
  "Production/Operations Director based in NorCal. ",
  "/headshots/wei_headshot.jpeg",
  "/drawings/wei_drawing.png",
  "http://weimakesgames.carrd.co",
  "http://linkedin.com/in/weiyun",
  undefined,
  undefined,
  undefined,
  undefined,
  "To gain more experience in game dev and to meet like-minded people in the industry!",
  "A great network and wonderful community to share ideas with!",
);

const AMY = new Bio(
  "Amy Ashmore",
  "She/Her",
  "Dynamo Marketing",
  "Marketing Creator and UX Researcher: Driven by Data, Dedicated to User-Centric Strategies​ Houston, TX",
  "/headshots/amy_headshot.JPG",
  "/drawings/amy_drawing.png",
  "https://www.aashmore.com/",
  "https://www.linkedin.com/in/amy-ashmore/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I joined to offer my experience to help in the creation of this project, to push the message of promoting growth in the tech sphere within the #LGBTQIA community, and to also learn and grow within this talented team of individuals.",
  "I have gotten to meet a lot of really talented people that are like-minded and want to share their talents for another to help other stand-out and grow in their careers and passions. ",
);

const KD = new Bio(
  "K.D. Hubbard",
  "She/Her",
  "Fullstack Developer",
  `I'm a fullstack developer and an avid outdoor sports enthusiast.​`,
  "/headshots/kd_headshot.jpg",
  "/drawings/kd_drawing.png",
  undefined,
  "https://www.linkedin.com/in/k-d-hubbard/",
  undefined,
  "https://github.com/kdhubb",
  undefined,
  undefined,
  "I wanted to contribute to the very fun projects from InCo and spend time working with all the amazing folx in this community!",
  "I'm learning a lot about project management and software development from a very talented and organized group of people!"
);

const ALEX = new Bio(
  "Alex Sharp",
  "She/Her",
  "CX Engineer",
  "I'm a customer success engineer with ten years of experience supporting healthcare software. I have a strong interest in developing tools to improve user productivity for my team.",
  "/headshots/alex_headshot.jpg",
  "/drawings/alex_drawing.png",
  undefined,
  "https://www.linkedin.com/in/alex-nicole-sharp",
  undefined,
  "https://github.com/alexsharp4096",
  undefined,
  undefined,
  "I'm interested in expanding my development knowledge and more connections in the queer community.",
  "I’ve met some really great people and have learned a great deal even in a short time.",
);

const JULIE = new Bio(
  "Julie Nguyen",
  "She/Her",
  "UX Designer",
  "UX Designer | UX Researcher | Product Designer | Houston, TX",
  "/headshots/julie_headshot.png",
  "/drawings/julie_drawing.png",
  "https://julienguyen.framer.website/",
  "https://www.linkedin.com/in/julie-nguyen7",
  undefined,
  undefined,
  undefined,
  undefined,
  "I'm excited for the opportunity to work with fellow queer women and folx in tech, especially on something I'm personally interested in: games!",
  "Community and collaboration.",
);

const BRANDI = new Bio(
  "Brandi Ude",
  "She/They",
  "Frontend Engineer",
  "NYC based Software Engineer with a background in Theatre Production Management.",
  "/headshots/brandi_headshot.jpg",
  "/drawings/brandi_drawing.png",
  undefined,
  "https://www.linkedin.com/in/brandiude/",
  undefined,
  undefined,
  undefined,
  undefined,
  "To be able to create fun projects with like-minded folks. To foster community and help each other grow.",
  "Community! And experience collaborating with a dev team.",
);

const MIRANDA = new Bio(
    "Miranda Sajdak",
    "She/Her",
    "Project Manager",
    "Product Manager, Boston",
    "/headshots/miranda_headshot.jpg",
    "/drawings/miranda_drawing.png",
    undefined,
    "https://www.linkedin.com/in/mirandasajdak/",
    undefined,
    undefined,
    undefined,
    undefined,
    "Currently between jobs and really enjoyed playing Bingo at LWT! Wanted to get a chance to contribute to the team.",
    "A fun community with dedicated collaborators who work hard together to make great projects!",
);

const ADA = new Bio(
    "Ada Brewton",
    "They/Them",
    "Website Accessility",
    "QA automation engineer and accessibility enthusiast. WA, USA",
    "/headshots/ada_headshot.jpg",
    undefined,
    "https://linktr.ee/ada.beeeee",
    "https://www.linkedin.com/in/ada-brewton/",
    undefined,
    undefined,
    undefined,
    undefined,
    "To network and to strengthen my QA and web development skills on an exciting new project.",
    "A new community!",
);

// make colors for border and hover effects orange
// const ORANGE = "orange";
// TEGAN.color = ORANGE;
// KD.color = ORANGE;
// JIMENA.color = ORANGE;
// AMY.color = ORANGE;


// create order for mobile screens
// TEGAN.mobileOrder = 1;
// LANE.mobileOrder = 2;
// LIZ.mobileOrder = 3;
// LYNDS.mobileOrder = 4;
// OLIVIAS.mobileOrder = 5;
// KD.mobileOrder = 6;
// JULIANE.mobileOrder = 7;
// CHELSEA.mobileOrder = 8;
// WEI.mobileOrder = 10;
// OLIVIAM.mobileOrder = 11;
// JIMENA.mobileOrder = 12;
// ALEX.mobileOrder = 13;
// AMY.mobileOrder = 15;
// JULIE.mobileOrder = 16;

export const BIOS = [
  TEGAN,
  LANE,
  LIZ,
  OLIVIAS,
  JULIANE,
  ALEX,
  JIMENA,
  BRANDI,
  AMY,
  MIRANDA,
  ADA,
];

export const ALUMS = [
  WEI,
  CHELSEA,
  OLIVIAM,
  JULIE,
  LYNDS,
  KD,
];

export { Bio };

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import pro from './assets/pro.webp';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import lpu from './assets/education_logo/lpu.webp'
import gm from './assets/education_logo/gm.jpg'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import project1 from './assets/work_logo/project1.png'
import project5 from './assets/work_logo/project5.png'
import project6 from './assets/work_logo/project6.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img:pro,
    role: "Technical Consultant (Frontend)",
    company: "Protiviti India Pvt. Ltd.",
    date: "June 2023 – May 2025",
    desc: "Developed and deployed User, Event, and Claim Creation pages for the HDFC Mutual Fund platform using React.js, Tailwind CSS, and Redux. Improved responsiveness and reduced initial page load time by 30% through efficient component structuring, lazy loading, and dynamic rendering with Chart.js.",
    skills: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Axios",
      "REST APIs",
      "Chart.js",
      "Lazy Loading",
      "Code Splitting",
      "RBAC",
    ],
  },
  {
    id: 1,
     img:pro,
    role: "Software Developer Intern (Frontend)",
    company: "Protiviti India Pvt. Ltd.",
    date: "October 2022 – May 2023",
    desc: "Built modular React.js components, reducing feature development time by 40%. Integrated Firebase & JWT authentication to improve security, delivered fully responsive applications with complete cross-browser compatibility, and converted Figma designs into pixel-perfect HTML/CSS layouts with high visual accuracy.",
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "Firebase",
      "JWT",
      "Figma",
      "Responsive Design",
    ],
  },
];

  
  export const education = [
  {
    id: 0,
    img: lpu, // Replace with your Lovely Professional University logo import
    school: "Lovely Professional University, Punjab",
    date: "Aug 2019 - July 2023",
    grade: "7.2 CGPA",
    desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) from Lovely Professional University, Punjab. During my studies, I gained a strong foundation in core computer science subjects like Data Structures, Algorithms, Database Management, Web Development, and Software Engineering. My time at LPU provided me with hands-on experience through projects, hackathons, and technical events, helping me develop practical programming and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: gm, // Replace with your G.M Academy logo import
    school: "G.M Academy School, [Your City]",
    date: "Apr 2017 - March 2018",
    grade: "79%",
    desc: "I completed my class 12 education from G.M Academy School under the CBSE board, where I pursued Physics, Chemistry, and Mathematics (PCM) with Computer Science. This period helped me build a strong base in analytical and technical skills, preparing me for my undergraduate studies.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: gm, // Replace with your G.M Academy logo import
    school: "G.M Academy School, [Your City]",
    date: "Apr 2014 - March 2015",
    grade: "9.2 CGPA",
    desc: "I completed my class 10 education from G.M Academy School under the CBSE board, focusing on Science with Computer Applications. My 10th-grade education laid a solid foundation for my interest in technology and computing.",
    degree: "CBSE (X) - Science with Computer Application",
  },
];

  
  export const projects = [
    {
  id: 1, // Make sure this ID is unique in your list
  title: "ZapTro - Portfolio Showcase",
  description:
    "A sleek, responsive, and interactive personal portfolio website built with modern web technologies. ZapTro elegantly presents projects, skills, and experience with engaging animations, polished UI, and user authentication powered by Clerk. Designed to impress recruiters and clients, it highlights your profile in a professional and creative way.",
  image: project1, // Replace with your actual imported image variable for ZapTro logo/screenshot
  tags: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React JS",
    "Clerk Auth"
  ],
  github: "https://github.com/codingmastr/ZapTro-Portfolio", // Replace with your actual repo URL if public
  webapp: "https://zaptro.netlify.app/",
}
,
    
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
    
    
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 4,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
    {
  id: 5,
  title: "Electro Shop",
  description:
    "A React.js-based e-commerce website for electronics, featuring smooth navigation with React Scroll, responsive design, and modern UI components. Built to showcase a practical shopping experience for gadgets and accessories.",
  image: project5, // Replace this with your image import or URL
  tags: ["React JS", "React Scroll", "E-commerce", "CSS", "Javascript"],
  github: "https://github.com/yourusername/electro-shop", // Replace with your repo if available
  webapp: "https://graceful-klepon-c85bf0.netlify.app/",
},
{
  id: 6,
  title: "Food Delivery App",
  description:
    "A responsive food delivery web application built with React.js, featuring category-based item filtering, debounced search for efficient searching, pagination for easy browsing through large menus, and lazy loading for faster performance. Integrated Redux and Context API for robust state management, styled with Tailwind CSS, and enhanced user interactions with Toastify notifications.",
  image: project6, // Replace with your logo/image import or direct URL
  tags: [
    "React JS",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "Toastify",
    "Debounced Search",
    "Pagination",
    "Lazy Loading",
    "Food Delivery",
    "Responsive Design",
    "Javascript"
  ],
  github: "https://github.com/yourusername/food-delivery-app", // Replace with your actual GitHub repo URL if available
  webapp: "https://your-food-delivery-app.netlify.app/", // Replace with your actual deployed app URL
},
,


  ];  
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
    title: 'Programming',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },

  {
    title: 'Frontend',
    skills: [
      { name: 'Streamlit' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },

  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'NLP' },
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Pandas' },
      { name: 'NumPy' },
    ],
  },

  {
    title: 'Generative AI',
    skills: [
      { name: 'LLMs' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: 'RAG' },
      { name: 'Prompt Engineering' },
      { name: 'AI Agents' },
      { name: 'Hugging Face' },
      { name: 'Transformers' },
      { name: 'FAISS' },
      { name: 'Vector Databases' },
    ],
  },

  {
    title: 'Backend & Database',
    skills: [
      { name: 'FastAPI' },
      { name: 'Firebase' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
    ],
  },

  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Render' },
      { name: 'Netlify' },
      { name: 'Postman' },
      { name: 'VS Code' },
    ],
  },
];



 
export const experiences = [
  {
    id: 0,
    img: pro,
    role: "AI/ML Enginner / Generative AI Engineer",
    company: "Protiviti India Pvt. Ltd.",
    date: "June 2024 – May 2025",
    desc: "Built scalable AI-powered applications using Large Language Models (LLMs), LangChain, LangGraph, and Retrieval-Augmented Generation (RAG) pipelines. Developed AI agents, semantic search systems, and production-ready ML workflows using FastAPI, vector databases, embeddings, and PostgreSQL memory systems for enterprise automation and conversational AI solutions.",
    skills: [
      "Python",
      "Machine Learning",
      "LLMs",
      "LangChain",
      "LangGraph",
      "RAG",
      "FastAPI",
      "FAISS",
      "Vector Databases",
      "PostgreSQL",
      "Prompt Engineering",
      "Semantic Search",
      "AI Agents",
    ],
  },

  {
    id: 1,
    img: pro,
    role: "Data Scientist Intern",
    company: "Protiviti India Pvt. Ltd.",
    date: "October 2022 – May 2023",
    desc: "Worked on end-to-end machine learning pipelines including data preprocessing, exploratory data analysis (EDA), feature engineering, model training, evaluation, and deployment using Python, Pandas, NumPy, and Scikit-learn. Assisted in building predictive models and automated analytics workflows for enterprise data science projects.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
      "Data Visualization",
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
    id: 1,
    title: "AI Travel Agent",
    description:
      "Built an AI-powered Travel Agent using LangChain, LangGraph, FastAPI, and LLMs to provide intelligent travel planning, destination recommendations, itinerary generation, and conversational travel assistance. Implemented multi-agent workflows, API integrations, and PostgreSQL memory for personalized travel experiences.",
  
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "LLMs",
      "AI Agents",
      "PostgreSQL",
      "Streamlit",
      "RAG",
      "API Integration"
    ],
    github: "https://github.com/Vipinkumar20mar/Travel_Agentt",
    webapp: "https://frontendpy-zpcrrjkebwumhr8ryrwpp4.streamlit.app/",
  },

  {
    id: 2,
    title: "HR AI Chatbot",
    description:
      "Developed an AI-powered HR chatbot using LangChain, LangGraph, FastAPI, and Retrieval-Augmented Generation (RAG) to automate HR support tasks such as employee queries, onboarding assistance, leave policies, and company FAQs. Integrated vector search using FAISS for contextual and accurate responses.",
   
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "LLMs",
      "AI Chatbot",
      "Semantic Search",
      "Streamlit"
    ],
    github: "https://github.com/Vipinkumar20mar/HR_ChatBot",
    webapp: "https://fnakv2cn8mmcnaj2h8gtkt.streamlit.app/",
  },

  {
    id: 3,
    title: "Medical AI Assistant",
    description:
      "Created a Medical AI Assistant using LangChain, LangGraph, FAISS, and Large Language Models to answer medical queries using a Retrieval-Augmented Generation pipeline. Implemented embeddings, semantic search, and document retrieval to improve response accuracy and reduce hallucinations.",
  
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "FAISS",
      "RAG",
      "LLMs",
      "Embeddings",
      "Semantic Search",
      "FastAPI",
      "Streamlit"
    ],
    github: "https://github.com/Vipinkumar20mar/AL_Medical_chatbot",
    webapp: "https://9nul7kzv2fi5xebrjycql4.streamlit.app/",
  },
  {
  id: 4,
  title: "AI Chatbot with Persistent Memory",
  description:
    "Built a production-ready AI Chatbot using LangGraph, FastAPI, Streamlit, Firebase Authentication, and PostgreSQL. Implemented persistent conversation memory using LangGraph checkpoints and PostgreSQL, enabling the chatbot to remember previous interactions across sessions. Integrated secure user authentication with Firebase and developed a responsive chat interface for real-time AI conversations.",

  tags: [
    "Python",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "Streamlit",
    "Firebase Authentication",
    "PostgreSQL",
    "AI Chatbot",
    "LLMs",
    "Conversational AI",
    "Memory",
    "OpenAI"
  ],

  github: "https://github.com/vipinkumar20mar/frontend_firebasechatbot/blob/main/frontend/app.py",

  webapp: "https://3xg5z63uljvvif8q4jqje4.streamlit.app/"
},
  {
  id: 5,
  title: "AI Social Media Manager",
  description:
    "Built an end-to-end AI Social Media Manager that generates, reviews, and publishes social media content using a LangGraph multi-agent architecture. Integrated Firebase Authentication for secure user access, FastAPI backend services, Streamlit frontend, and PostgreSQL memory for personalized content history. Implemented Human-in-the-Loop approval workflows, enabling users to edit and approve AI-generated posts before publishing.",

  tags: [
    "Python",
    "LangGraph",
    "FastAPI",
    "Streamlit",
    "Firebase",
    "PostgreSQL",
    "Multi-Agent Systems",
    "Human-in-the-Loop",
    "LLMs",
    "OpenAI",
    "AI Agents",
    "Generative AI"
  ],

  github: "https://github.com/Vipinkumar20mar/Ai_SocialMedia_tweet_frontend",

  webapp: "https://9ddbub2tthxqdx6h2khu9t.streamlit.app/"
}
];


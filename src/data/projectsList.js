import mongodbIcon from '../img/mongodb.svg'
import nodejsIcon from '../img/nodejs.svg'
import expressIcon from '../img/express.svg'
import reactIcon from '../img/react.svg'
import reduxIcon from '../img/redux.svg'
import artesMarciales from '../img/artes-marciales-interface.jpeg'
import pokedex from '../img/pokedex-interface.jpeg'
import socialFlow from '../img/social-flow-interface.jpeg'

const mongodbColor = "#0483043a"
const reactColor = "#00b0f43a"
const reduxColor = '#240044a8'
const nodeColor = "#00f40c3a"
const expressColor = '#000'

export const list = [
  {
    id: 1,
    url: socialFlow,
    title: "SocialFlow",
    description:
      "Aplicación inspirada en Twitter, con algunos ajustes en su diseño. La idea es mostrar mis conocimientos en el MERN stack",
    codeLink: "",
    projectLink: "",
    technologies: [
      {
        icon: mongodbIcon,
        technology: "MongoDB",
        btnColor: mongodbColor,
      },
      {
        icon: nodejsIcon,
        technology: "Node.js",
        btnColor: nodeColor,
      },
      {
        icon: expressIcon,
        technology: "Express.js",
        btnColor: expressColor,
      },
      {
        icon: reactIcon,
        technology: "React.js",
        btnColor: reactColor,
      },
      {
        icon: reduxIcon,
        technology: "Redux",
        btnColor: reduxColor,
      },
    ],
  },
  {
    id: 2,
    url: pokedex,
    title: "Pokedex",
    description:
      "Una página para mostrar las distintas especies pokemon y sus características. El objetivo de este proyecto fue consolidar mis conocimientos en solicitudes a una API mediante el uso de fetch().",
    codeLink: "https://github.com/JDnasello/pokedex",
    projectLink: "https://main--joyful-cuchufli-1015b4.netlify.app",
    technologies: [
      {
        icon: reactIcon,
        technology: "React.js",
        btnColor: reactColor,
      },
    ],
  },
  {
    id: 3,
    url: artesMarciales,
    title: "LandingPage",
    description:
      "Proyecto realizado como actividad para el instituto TECLAB. La idea principal es mostrar mis conocimientos en React.js. Algunos detalles son el uso de react-router-dom, react-hook-form e EmailJS para enviar mensajes a un profesional por mail.",
    codeLink: "https://github.com/JDnasello/artes-marciales-web",
    projectLink: "https://artesmarcialesolav.netlify.app",
    technologies: [
      {
        icon: reactIcon,
        technology: "React.js",
        btnColor: reactColor,
      },
    ],
  },
];
import {
  FaSymfony,
  FaAngular,
  FaNodeJs,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss,SiVite } from "react-icons/si";
import { DiGoogleCloudPlatform,DiVisualstudio  } from "react-icons/di";

export const projects = [
  {
    title: "Vuela21",
    description:
      "Aplicación fullstack desarrollada para un cliente real de mensajería usando Symfony, Angular, PostgreSQL y Docker. Participación en backend, frontend y entorno de desarrollo.",
    image: "/images/vuela21.png",
    tech: [
      { name: "Symfony", icon: FaSymfony },
      { name: "Angular", icon: FaAngular },
      { name: "Docker", icon: FaDocker },
    ],
    //github: "https://github.com/usuario/proyecto-codearts",
    url: "https://web-codearts.com",
    page: "/proyectos/codearts"
  },
  {
    title: "RefMind",
    description:
      "Aplicación de gestión de referencias bibliográficas desarrollada como proyecto final de DAW. Incluye autenticación, CRUDs, panel de administración y un gestor de referencias dinámico asi como autogenerador de citas.",
    image: "/images/RefMind.png",
    tech: [
      { name: "Node.js", icon: FaNodeJs },      
      { name: "React", icon: FaReact },
      { name: "Google Cloud Platform", icon: DiGoogleCloudPlatform },
    ],
    github: "https://github.com/CristianJoseMoreno/ProyectoIntegradoDAW.git",
    url: "https://misitiopi.com",
    page: "/proyectos/pi"
  },
  {
    title: "Portfolio Personal",
    description:
      "Este portfolio, diseñado desde cero en React y Tailwind, muestra mis habilidades, experiencia y proyectos.",
    image: "/images/Portfolio.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Visual Studio Code", icon: DiVisualstudio  },
    ],
    github: "https://github.com/CristianJoseMoreno/Portfolio",
    url: "https://portfolio-cristian.vercel.app",
    page: "/proyectos/portfolio"
  },
];

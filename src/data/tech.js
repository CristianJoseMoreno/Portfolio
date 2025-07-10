
import {
  FaJava,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";
import {
  SiSymfony,
  SiTailwindcss,
  SiBootstrap,
  SiEclipseide,
  SiPostman,
  SiFigma,
  SiApachenetbeanside,
  SiVite,
  SiAxios,
  SiDoctrine,
  SiTypescript,
} from "react-icons/si";
import { DiVisualstudio,DiComposer  } from "react-icons/di";

export const techStack = {
  lenguajes: [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJs },
    { name: "PHP", icon: FaPhp },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "TypeScript", icon: SiTypescript },
  ],
  frameworks: [
    { name: "Angular", icon: FaAngular },
    { name: "React", icon: FaReact },
    { name: "Symfony", icon: SiSymfony },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Vite", icon: SiVite },
    { name: "Axios", icon: SiAxios },
    { name: "Composer", icon: DiComposer},
    { name: "Doctrine", icon: SiDoctrine },
    { name: "Bootstrap", icon: FaBootstrap },
  ],
  herramientas: [
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Postman", icon: SiPostman },
    { name: "Figma", icon: SiFigma },
    { name: "VS Code", icon: DiVisualstudio },
    { name: "NetBeans", icon: SiApachenetbeanside },
    { name: "Eclipse", icon: SiEclipseide },
  ],
};

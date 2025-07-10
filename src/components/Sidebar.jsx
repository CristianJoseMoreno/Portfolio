import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-800 text-white p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-teal-400">Cristian Moreno</h2>
        <p className="text-sm mt-1 text-slate-300">Fullstack Junior</p>

        <nav className="mt-10 space-y-4">
          {[
            { to: "hero", label: "Inicio" },
            { to: "about", label: "Sobre mí" },
            { to: "experience", label: "Experiencia" },
            { to: "projects", label: "Proyectos" },
            { to: "tech", label: "Tecnologías" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              spyThrottle={50}
              offset={-80}
              activeClass="text-teal-300 font-semibold"
              className="block cursor-pointer hover:text-teal-300 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Contactos abajo */}
      <div className="flex justify-start gap-4 mt-10 text-xl text-slate-400 ml-1">
        <a
          href="https://discord.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-teal-300 cursor-pointer">
            <FaDiscord />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/tuusuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-teal-300 cursor-pointer">
            <FaLinkedin />
          </span>
        </a>

        <a href="mailto:cjmorenoberlanga@gmail.com">
          <span className="hover:text-teal-300 cursor-pointer">
            <FaEnvelope />
          </span>
        </a>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-teal-300 cursor-pointer">
            <FaGithub />
          </span>
        </a>

        <a
          href="https://instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-teal-300 cursor-pointer">
            <FaInstagram />
          </span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;

import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="py-10 px-4 sm:px-8 bg-slate-900 text-white"
    >
      <h2 className="text-3xl font-bold text-teal-400 mb-10">Proyectos</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover hover:opacity-90 transition duration-300"
              />
            </a>
            {/* </a> */}

            <div className="p-5 flex flex-col justify-between flex-1">
              <div className="text-center">
                <a href={project.page}>
                  <h3 className="text-lg font-semibold text-teal-300/70 hover:text-teal-300 transition duration-200 cursor-pointer">
                    {project.title}
                  </h3>
                </a>

                <p className="text-slate-300 text-sm mt-3">
                  {project.description}
                </p>
              </div>

              {/* Tecnologías */}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-slate-700 text-white text-xs px-3 py-1 rounded-full hover:bg-slate-600 hover:text-teal-300 transition"
                  >
                    {tech.icon && <tech.icon className="w-4 h-4" />}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* GitHub */}
              <div className="mt-6 flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-slate-400 hover:text-teal-300 transition cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

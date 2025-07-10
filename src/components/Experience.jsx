import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-10 px-4 sm:px-8 bg-slate-900 text-white"
    >
      <h2 className="text-3xl font-bold text-teal-400 mb-10">Experiencia</h2>

      <div className="space-y-12">
        {experience.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4">
            {/* Fecha */}
            <div className="md:w-1/4 text-sm text-slate-400 min-w-[120px]">
              {item.date}
            </div>

            {/* Contenido */}
            <div className="md:w-3/4">
              <h3 className="text-lg font-semibold text-white">
                {item.role} ·{" "}
                <span className="text-slate-300">{item.company}</span>
              </h3>

              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 text-teal-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="/CV-Cristian-Moreno-Berlanga.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-400 hover:text-teal-300 transition-colors duration-200"
        >
          Descargar CV completo
        </a>
      </div>
    </section>
  );
}

export default Experience;

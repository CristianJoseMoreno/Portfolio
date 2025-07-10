import { techStack } from "../data/tech";

function Tech() {
  return (
    <section
      id="tech"
      className="py-10 px-4 sm:px-8 bg-slate-900 text-white min-h-[70vh]"
    >
      <h2 className="text-3xl font-bold text-teal-400 mb-10 text-left">
        Tecnologías
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Tarjeta de Lenguajes */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
          <h3 className="text-center text-lg font-semibold text-teal-300/70 mb-4">
            Lenguajes
          </h3>
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {techStack.lenguajes.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-700 text-white text-sm px-3 py-2 rounded-full hover:bg-slate-600 hover:text-teal-300 transition"
              >
                {tech.icon && <tech.icon className="w-4 h-4" />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
          <h3 className="text-center text-lg font-semibold text-teal-300/70 mb-4">
            Frameworks y Librerias
          </h3>
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {techStack.frameworks.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-700 text-white text-sm px-3 py-2 rounded-full hover:bg-slate-600 hover:text-teal-300 transition"
              >
                {tech.icon && <tech.icon className="w-4 h-4" />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
          <h3 className="text-center text-lg font-semibold text-teal-300/70 mb-4">
            Herramientas
          </h3>
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {techStack.herramientas.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-700 text-white text-sm px-3 py-2 rounded-full hover:bg-slate-600 hover:text-teal-300 transition"
              >
                {tech.icon && <tech.icon className="w-4 h-4" />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;

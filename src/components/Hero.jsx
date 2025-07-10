function Hero() {
  return (
    <section
      id="hero"
      className="py-10 px-4 sm:px-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center sm:justify-between"
    >
      <div className="text-center sm:text-left sm:pr-8">
        {" "}
        {/* Contenedor para el texto */}
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-400">
          ¡Hola! Soy Cristian Moreno Berlanga
        </h1>
        <h2 className="text-2xl sm:text-3xl mt-2 text-slate-200">
          Desarrollador Fullstack Junior
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto sm:mx-0">
          Desarrollador con experiencia en proyectos propios y de cliente,
          versátil en backend y frontend y con una gran capacidad de aprendizaje
          continuo y de trabajo en equipo.
        </p>
      </div>

      {/* Foto de perfil*/}
      <img
        src="/public/images/foto.png"
        alt="Cristian Moreno"
        className="w-40 h-40 rounded-full mt-8 sm:mt-0 sm:ml-8 flex-shrink-0 object-cover"
      />
    </section>
  );
}

export default Hero;

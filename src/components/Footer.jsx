import React from "react";
function Footer() {
  const email = "cjmorenoberlanga@gmail.com";

  return (
    <footer className="bg-slate-900 text-white px-1 pt-10 pb-1 mt-1">
      <p className="text-sm text-slate-400 text-right">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href={`mailto:${email}`}
          className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
        >
          Cristian Moreno
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;

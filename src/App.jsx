import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      scrollSpy.update();
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 bg-slate-900 min-h-screen text-white w-full pb-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Tech />
        <Footer />
      </main>
    </div>
  );
}

export default App;

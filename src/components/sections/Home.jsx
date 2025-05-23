import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight">
          Hi, I'm Lamyae HIMIDI </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a fourth-year computer engineering student passionate about
          software development and tech innovation. I enjoy solving
          problems and building efficient, user-friendly solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative 
            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

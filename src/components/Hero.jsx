import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-emerald-100">
      <div className="mx-auto grid max-w-7xl gap-y-8 px-8 py-24 md:grid-cols-2 md:items-center">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">{"I'm Praveen"}</h1>
          <p className="mt-4 text-3xl tracking-wide text-slate-700">
            Front-end Developer
          </p>
          <p className="mt-2 text-lg capitalize tracking-wide text-slate-700">
            turning ideas into interactive reality
          </p>
          <div className="mt-4 flex gap-x-4">
            <a
              href="https://github.com/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-3xl text-slate-500 duration-300 hover:text-slate-950" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl text-slate-500 duration-300 hover:text-slate-950" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitterSquare className="text-3xl text-slate-500 duration-300 hover:text-slate-950" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero-image" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

import heroImg from "../assets/hero.svg";
import { socialLinks } from "../data";

const Hero = () => {
  return (
    <section className="bg-emerald-100">
      <div className="mx-auto grid max-w-7xl gap-y-8 px-8 py-24 md:grid-cols-2 md:items-center">
        {/* Info */}
        <article>
          <h1 className="text-7xl font-bold tracking-wider">{"I'm Praveen"}</h1>
          <p className="mt-4 text-3xl tracking-wide text-slate-700">
            Front-end Developer
          </p>
          <p className="mt-2 text-lg capitalize tracking-wide text-slate-700">
            turning ideas into interactive reality
          </p>
          {/* Social Icons */}
          <div className="mt-4 flex gap-x-4">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-slate-500 duration-300 hover:text-slate-950"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </article>
        {/* Image */}
        <article className="hidden md:block">
          <img src={heroImg} alt="hero-image" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

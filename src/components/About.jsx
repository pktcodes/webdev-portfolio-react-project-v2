import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid items-center gap-16 md:grid-cols-2">
        <img src={aboutImg} alt="about-image" className="h-64 w-full" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="mt-8 leading-loose text-slate-600">
            I am a passionate programmer who loves code and coffee. Code is the
            way I express my creativity and solve problems. Coffee is the fuel
            that keeps me going and sharpens my mind. Whether I am working on a
            personal project, a freelance assignment, or a team collaboration, I
            always have a cup of coffee by my side.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

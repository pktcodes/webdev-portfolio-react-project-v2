import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle text="tech stack" />
      <div className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;

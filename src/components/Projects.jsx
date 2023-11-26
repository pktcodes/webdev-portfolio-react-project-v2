import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import useFetchProjects from "../fetchProjects";

const Projects = () => {
  const { projects, isLoading, isError } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="align-element text-center text-3xl capitalize tracking-wide">
          Loading...
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20">
        <div className="align-element text-center text-3xl capitalize tracking-wide">
          there was an error...
        </div>
      </section>
    );
  }

  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="web creations" />
      <div className=" grid gap-8 py-16 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

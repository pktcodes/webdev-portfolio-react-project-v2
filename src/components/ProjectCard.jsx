import PropTypes from "prop-types";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ img, title, text, url, github }) => {
  return (
    <article className=" rounded-lg bg-white shadow-md duration-300 hover:shadow-xl">
      <img
        src={img}
        alt={title}
        className="h-64 w-full rounded-t-lg object-cover"
      />
      <div className="p-8">
        <h2 className="text-xl font-medium capitalize tracking-wide">
          {title}
        </h2>
        <p className="mt-4 leading-loose text-slate-700">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-slate-500 duration-300 hover:text-black"
          >
            <TbWorldWww />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-slate-500 duration-300 hover:text-black"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectCard;

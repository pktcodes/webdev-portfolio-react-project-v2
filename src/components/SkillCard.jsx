import PropTypes from "prop-types";

const SkillCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default SkillCard;

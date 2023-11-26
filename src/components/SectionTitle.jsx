import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-gray-200-200 border-b pb-5">
      <h2 className="text-3xl font-medium capitalize tracking-wider">{text}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;

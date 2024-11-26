import PropTypes from 'prop-types';

const Accordion = ({ children, className }) => (
  <ul className={className}>{children}</ul>
);
Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string.isRequired,
};

export default Accordion;

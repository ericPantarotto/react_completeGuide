import PropTypes from 'prop-types';

const AccordionItem = ({ children, title, className }) => (
  <li className={className}>
    <h3>{title}</h3>
    <div>{children}</div>
  </li>
);
AccordionItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default AccordionItem;

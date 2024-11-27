import PropTypes from 'prop-types';

const AccordionItemReusable = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};
AccordionItemReusable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};

export default AccordionItemReusable;

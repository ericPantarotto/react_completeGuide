import PropTypes from 'prop-types';
import { createContext } from 'react';

const AccordionItemContext = createContext();

const AccordionItemReusable = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};
AccordionItemReusable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AccordionItemReusable;

export { AccordionItemContext };

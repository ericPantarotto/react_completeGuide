import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = createContext();

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();

  // const openItem = (id) => setOpenItemId(id);
  // const closeItem = () => setOpenItemId(null);
  // const contextValue = { openItemId: openItemId, openItem, closeItem };

  const toggleItem = (id) =>
    setOpenItemId((prevId) => (prevId === id ? null : id));

  const contextValue = {
    openItemId: openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};
Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string.isRequired,
};

Accordion.Item = AccordionItem;

export default Accordion;
export { AccordionContext };

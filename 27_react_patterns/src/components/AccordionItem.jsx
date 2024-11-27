import PropTypes from 'prop-types';
import { useAccordionContext } from './UseAccordionContext';

const AccordionItem = ({ id, children, title, className }) => {
  // const { openItemId, openItem, closeItem } = useAccordionContext();
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  // const handleClick = () => {
  //   if (isOpen) {
  //     closeItem();
  //   } else {
  //     openItem(id);
  //   }
  // };

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? 'accordion-item-content open' : 'accordion-item-content'
        }
      >
        {children}
      </div>
    </li>
  );
};
AccordionItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default AccordionItem;

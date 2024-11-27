import PropTypes from 'prop-types';
import { useAccordionContext } from './UseAccordionContext';
import { useAccordionItemContext } from './UseAccordionItemContext';

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
      }
    >
      {children}
    </div>
  );
}
AccordionContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

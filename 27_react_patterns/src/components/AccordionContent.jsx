import PropTypes from 'prop-types';
import { useAccordionContext } from './UseAccordionContext';

export default function AccordionContent({ id, children, className }) {
  const { openItemId } = useAccordionContext();
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
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

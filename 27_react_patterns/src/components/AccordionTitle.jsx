import PropTypes from 'prop-types';
import { useAccordionContext } from './UseAccordionContext';
import { useAccordionItemContext } from './UseAccordionItemContext';

export default function AccordionTitle({ children, className }) {
  const { toggleItem } = useAccordionContext();
  const id  = useAccordionItemContext()
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
AccordionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

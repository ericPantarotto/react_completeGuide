import PropTypes from 'prop-types';
import { useAccordionContext } from './UseAccordionContext';

export default function AccordionTitle({ id, children, className }) {
  const { toggleItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
AccordionTitle.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

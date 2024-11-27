import { useContext } from 'react';
import { AccordionContext } from './Accordion';

const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      'Accordion-related components must be wrapped by <Accordion>'
    );
  return ctx;
};

export { useAccordionContext };

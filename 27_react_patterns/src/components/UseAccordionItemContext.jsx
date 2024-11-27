import { useContext } from 'react';
import { AccordionItemContext } from './AccordionItemReusable';

const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx)
    throw new Error(
      'AccordionItem-related components must be wrapped by <AccordionItem>'
    );
  return ctx;
};

export { useAccordionItemContext };

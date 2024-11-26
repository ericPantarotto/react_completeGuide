import Accordion from './components/Accordion';
import AccordionItem from './components/AccordionItem';

function App() {
  // return <h1>React Patterns & Practices</h1>;
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className='accordion'>
          <AccordionItem
            className='accordion-item'
            title='We have got 20 years of experience'
          >
            <article>
              <p>You cannot go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            className='accordion-item'
            title='We are working with local guides'
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Instead, we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

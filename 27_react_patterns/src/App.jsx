import Accordion from './components/Accordion/Accordion';
import SearchableList from './components/SearchableList/SearchableList';
import Place from './Place';
import { PLACES } from './places';
// import AccordionItem from './components/AccordionItem';

function App() {
  // return <h1>React Patterns & Practices</h1>;
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        {/* <Accordion className='accordion'>
          <AccordionItem
            id='experience'
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
            id='local-guides'
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
        </Accordion> */}
        {/* <Accordion className='accordion'>
          <Accordion.Item
            id='experience'
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
          </Accordion.Item>
          <Accordion.Item
            id='local-guides'
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
          </Accordion.Item>
        </Accordion> */}

        {/* <Accordion className='accordion'>
          <Accordion.Item className='accordion-item'>
            <Accordion.Title className='accordion-item-title' id='experience'>
              We have got 20 years of experience
            </Accordion.Title>
            <Accordion.Content
              className='accordion-item-content'
              id='experience'
            >
              <article>
                <p>You cannot go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className='accordion-item'>
            <Accordion.Title className='accordion-item-title' id='local-guides'>
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content
              className='accordion-item-content'
              id='local-guides'
            >
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion> */}

        <Accordion className='accordion'>
          <Accordion.Item className='accordion-item' id='experience'>
            <Accordion.Title className='accordion-item-title'>
              We have got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>You cannot go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className='accordion-item' id='local-guides'>
            <Accordion.Title className='accordion-item-title'>
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['item 1', 'item 2']} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;

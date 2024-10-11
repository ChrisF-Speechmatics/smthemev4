import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from '@zendeskgarden/react-accordions';
import { Row, Col } from '@zendeskgarden/react-grid';

// Rename the component to start with an uppercase letter
const AccExample = () => (
  <Row justifyContent="center">
    <Col sm={10}>
      <Accordion level={4} isBare>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>How do you start gardening?</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            <div contentEditable>
            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
            water spinach avocado daikon napa cabbage asparagus winter purslane kale.
            </div>
          </Accordion.Panel>
        </Accordion.Section>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>What are the basics of gardening?</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
          </Accordion.Panel>
        </Accordion.Section>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>What are the best tools?</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
            gram celery bitterleaf wattle seed collard greens nori.
          </Accordion.Panel>
        </Accordion.Section>
      </Accordion>
    </Col>
  </Row>
);

// Function to mount the accordion into the DOM
const mountAccordion = () => {
  const root = document.getElementById('accordion-root');
  if (root) {
    console.log("Root")
    ReactDOM.render(<AccExample />, root);  // Use the renamed component here
  }
};

// Ensure the component renders when the DOM is fully loaded
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  mountAccordion();
} else {
  document.addEventListener('DOMContentLoaded', mountAccordion);
}

export default AccExample;

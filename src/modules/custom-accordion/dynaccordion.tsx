import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from '@zendeskgarden/react-accordions';
import { Row, Col } from '@zendeskgarden/react-grid';

const DynAcc = () => {
  const contentRoot = document.getElementById('accordion-content');

  if (!contentRoot) return null;

  // Remove the original content after extracting it
  contentRoot.remove();
  
  // Get all headings (accordion labels) and paragraphs (accordion panels)
  const labels = Array.from(contentRoot.getElementsByTagName('h3'));
  const panels = Array.from(contentRoot.getElementsByTagName('p'));

  // Ensure we have the same number of labels and panels
  if (labels.length !== panels.length) return null;

  return (
    <Row justifyContent="center">
      <Col sm={10}>
        <Accordion level={4} isBare>
          {labels.map((label, index) => (
            <Accordion.Section key={index}>
              <Accordion.Header>
                <Accordion.Label>{label.textContent}</Accordion.Label>
              </Accordion.Header>
              <Accordion.Panel>
                <div>{panels[index].textContent}</div>
              </Accordion.Panel>
            </Accordion.Section>
          ))}
        </Accordion>
      </Col>
    </Row>
  );
};

// Mount the accordion when DOM is loaded
const mountAccordion = () => {
  const root = document.getElementById('accordion-root');
  if (root) {
    ReactDOM.render(<DynAcc />, root);
  }
};

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  mountAccordion();
} else {
  document.addEventListener('DOMContentLoaded', mountAccordion);
};

export default DynAcc;

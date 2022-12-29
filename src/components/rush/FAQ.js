import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import './style/faq.css'


function Faq() {
  return (
    <div className = "faq-container">
      <div className = "faq-header">
        <h1 className = "red faq-title"> Frequently Asked Questions </h1>
      </div>
      <Accordion className = 'faq-questions'>
        <Accordion.Item className = 'faq-question-item' eventKey="0">
          <Accordion.Header className = 'faq-question-title'>Accordion Item #1</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="1">
          <Accordion.Header className = 'faq-question-title' >Accordion Item #2</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;

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
          <Accordion.Header className = 'faq-question-title'>What are fraternities and sororities?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Fraternities and Sororities are what many people refer to "Greek Life"— societies that induct members for lifetime membership. Sororities are all-female Greek Organizations, while Fraternities can be both all-male and co-ed Organizations. Each organization has certain rules and values that make each one unique; however, they are often considered either "Social" or "Professional" groups. Professional Greek Organizations have strong focus on developing their members professionally as well as creating a strong Brotherhood or Sisterhood.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="1">
          <Accordion.Header className = 'faq-question-title' >What kind of Greek organization is Theta Tau?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Theta Tau is a Co-ed Professional Engineering Fraternity. This makes us a professional fraternity, which means we value the professional development and conduct of our members more than a social fraternity might. We are also composed of members that have an interest in Engineering, which unites us as another common focus. Finally, we are co-ed, and accept members of all genders.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;

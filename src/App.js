import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JS library for building user interfaces.'
  },
  {
    title: 'Why use React?',
    content: 'According to Stack Overflow survey 2020, it is the most popular JS library.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;

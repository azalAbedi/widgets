import React, { useState } from "react";
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front-end JS library for building user interfaces.'
//   },
//   {
//     title: 'Why use React?',
//     content: 'According to Stack Overflow survey 2020, it is the most popular JS library.'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components.'
//   }
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

function App() {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      <Translate />
    </div>
  );
}

export default App;

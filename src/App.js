import React, { useState } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Form from './components/Form';

const App = () => {
  // This is called a state variable. It is an array that holds the people objects
  const [people, setPeople] = useState([]);

  // All this does is add a person object to the people array
  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="App-header">
      <h1>Hello World</h1>
      {/* This is the form component - we give it the addPerson function like this: addPerson={addPerson}*/}
      <Form addPerson={addPerson} />

      {/* This is the BasicInfo component - we map (Like for each) over the people array and give each person object to the BasicInfo component */}
      {/* We also give each person object a key prop - this just keeps the computer from mixing them up */}
      {people.map((person, index) => (
        <BasicInfo key={index} person={person} />
      ))}
    </div>
  );
}

export default App;
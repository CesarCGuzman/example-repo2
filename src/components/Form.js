import React, { useState } from 'react';
import Person from '../models/Person';

const Form = ({ addPerson }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    // This just stops the browser from refreshing the page
    e.preventDefault();

    // Makes a new person object
    const newPerson = new Person(name, number, birthday);

    // Calls the addPerson function from App.js - adds a new person to the array thingy
    addPerson(newPerson);

    // Resets the form to empty strings
    setName('');
    setNumber('');
    setBirthday('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </div>
      <div>
        <label>Birthday:</label>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
      </div>
      <button type="submit">Add Person</button>
    </form>
  );
};

export default Form;
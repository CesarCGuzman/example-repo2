import React from "react";
// Since basic info is only expecting a person object, we can destructure the person object from the props
// Normally, you would have to do props.person.getName() instead of person.getName() - but since we destructure the person object, we can just do person.getName()
const BasicInfo = ({ person }) => {
  return (
    <div>
      <h3>Basic Info</h3>
      <p>Name: {person.getName()}</p>
      <p>Number: {person.getNumber()}</p>
      <p>Birthday: {person.getBirthday()}</p>
    </div>
  );
}

export default BasicInfo;
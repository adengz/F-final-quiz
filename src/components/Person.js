import React from 'react';
import '../style/Person.scss';

const Person = ({ id, name }) => {
  return <li className="person">{`${id}. ${name}`}</li>;
};

export default Person;

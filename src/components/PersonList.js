import React from 'react';
import Person from './Person';
import '../style/PersonList.scss';

const PersonList = ({ data, title, groupId }) => {
  return (
    <ul className="person-list">
      {Object.values(data).map(({ id, name }) => (
        <Person key={id} id={id} name={name} title={title} groupId={groupId} />
      ))}
    </ul>
  );
};

export default PersonList;

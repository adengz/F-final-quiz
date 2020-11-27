import React from 'react';
import Person from './Person';
import '../style/PersonList.scss';

const PersonList = ({ data, title, groupId, canAdd = false }) => {
  return (
    <ul className="person-list">
      {Object.values(data).map(({ id, name }) => (
        <Person key={id} id={id} name={name} title={title} groupId={groupId} />
      ))}
      {canAdd && (
        <li className="item-container">
          <button className="add-button" type="button">
            + 添加{title === 'trainers' ? '讲师' : '学员'}
          </button>
        </li>
      )}
    </ul>
  );
};

export default PersonList;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addPersonThunk } from '../actions';
import Person from './Person';
import '../style/PersonList.scss';

const PersonList = ({ data, title, groupId }) => {
  const dispatch = useDispatch();
  const titleCN = title === 'trainers' ? '讲师' : '学员';

  const handleAdd = () => {
    const name = prompt(`请输入${titleCN}姓名`);
    dispatch(addPersonThunk(title, name));
  };

  return (
    <ul className="person-list">
      {Object.values(data).map(({ id, name }) => (
        <Person key={id} id={id} name={name} title={title} groupId={groupId} />
      ))}
      {typeof groupId === 'undefined' && (
        <li className="item-container">
          <button className="add-button" type="button" onClick={handleAdd}>
            + 添加{titleCN}
          </button>
        </li>
      )}
    </ul>
  );
};

export default PersonList;

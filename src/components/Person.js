import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePersonThunk } from '../actions';
import '../style/Person.scss';

const Person = ({ id, name, title, groupId }) => {
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePersonThunk(title, id, groupId));
  };

  return (
    <li
      className="person"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      {`${id}. ${name}`}
      {showDelete && (
        <button className="delete-button" type="submit" onClick={handleDelete}>
          &#10005;
        </button>
      )}
    </li>
  );
};

export default Person;

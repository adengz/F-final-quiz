import React, { useState } from 'react';
import '../style/Person.scss';

const Person = ({ id, name }) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <li
      className="person"
      key={id}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      {`${id}. ${name}`}
      {showDelete && (
        <button className="delete-button" type="submit">
          &#10005;
        </button>
      )}
    </li>
  );
};

export default Person;

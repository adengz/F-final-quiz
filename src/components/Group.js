import React from 'react';
import { useSelector } from 'react-redux';
import PersonList from './PersonList';
import '../style/Group.scss';

const Group = ({ gid }) => {
  const { name, trainers, trainees } = useSelector(({ groups }) => groups[gid]);
  return (
    <div className="group-container">
      <header className="group-header">
        <span className="group-name">{name}</span>
        <PersonList data={trainers} title="trainers" groupId={gid} />
      </header>
      <main className="group-trainees">
        <PersonList data={trainees} title="trainees" groupId={gid} />
      </main>
    </div>
  );
};

export default Group;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveDataThunk, refreshGroupsThunk } from '../actions';
import Group from '../components/Group';
import PersonList from '../components/PersonList';
import '../style/App.scss';

const App = () => {
  const { trainers, trainees } = useSelector(({ ungrouped }) => ungrouped);
  const groupIds = useSelector(({ groups }) => Object.keys(groups));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveDataThunk());
  }, []);

  const handleGrouping = () => {
    dispatch(refreshGroupsThunk());
  };

  return (
    <>
      <section>
        <header className="group-header">
          <h2>分组列表</h2>
          <button className="group-button" type="submit" onClick={handleGrouping}>
            分组学员
          </button>
        </header>
        {groupIds.map((gid) => (
          <Group key={gid} gid={gid} />
        ))}
      </section>
      <section>
        <h2>讲师列表</h2>
        <PersonList data={trainers} title="trainers" />
      </section>
      <section>
        <h2>学员列表</h2>
        <PersonList data={trainees} title="trainees" />
      </section>
    </>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialData } from '../actions';
import PersonList from '../components/PersonList';

const App = () => {
  const { trainers, trainees } = useSelector(({ ungrouped }) => ungrouped);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <>
      <section>
        <header>
          <h2>分组列表</h2>
          <button type="submit">分组学员</button>
        </header>
      </section>
      <section>
        <h2>讲师列表</h2>
        <PersonList data={trainers} />
      </section>
      <section>
        <h2>学员列表</h2>
        <PersonList data={trainees} />
      </section>
    </>
  );
};

export default App;

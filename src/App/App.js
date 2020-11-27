import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialData } from '../actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return <div>Hello World</div>;
};

export default App;

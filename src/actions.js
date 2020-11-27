import * as API from './service';

export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

const receivePeople = (trainers, trainees) => ({
  type: RECEIVE_PEOPLE,
  trainers,
  trainees,
});

export const fetchInitialData = () => {
  return async (dispatch) => {
    const trainers = await API.fetchTrainers();
    const trainees = await API.fetchTrainees();

    dispatch(receivePeople(trainers, trainees));
  };
};

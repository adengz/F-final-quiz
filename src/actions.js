import * as API from './service';

export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

const receivePeople = (groups, trainers, trainees) => ({
  type: RECEIVE_PEOPLE,
  groups,
  trainers,
  trainees,
});

export const fetchInitialData = () => {
  return async (dispatch) => {
    const trainers = await API.fetchTrainers();
    const trainees = await API.fetchTrainees();
    const groups = await API.fetchGroups();

    dispatch(receivePeople(groups, trainers, trainees));
  };
};

import * as API from './service';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REFRESH_GROUPS = 'REFRESH_GROUPS';
export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

const receiveData = (groups, trainers, trainees) => ({
  type: RECEIVE_DATA,
  groups,
  trainers,
  trainees,
});

export const receiveDataThunk = () => {
  return async (dispatch) => {
    const groups = await API.getGroups();
    const trainers = await API.getUngrouped('trainers');
    const trainees = await API.getUngrouped('trainees');

    dispatch(receiveData(groups, trainers, trainees));
  };
};

const refreshGroups = (groups, trainers) => ({
  type: REFRESH_GROUPS,
  groups,
  trainers,
  trainees: [],
});

export const refreshGroupsThunk = () => {
  return async (dispatch) => {
    try {
      const groups = await API.postGroups();
      const trainers = await API.getUngrouped('trainers');

      dispatch(refreshGroups(groups, trainers));
    } catch {
      alert('分组失败');
    }
  };
};

const addPerson = (title, id, name) => ({
  type: ADD_PERSON,
  title,
  id,
  name,
});

export const addPersonThunk = (title, name) => {
  return async (dispatch) => {
    try {
      const { id } = await API.postPerson(title, name);

      dispatch(addPerson(title, id, name));
    } catch {
      alert('创建失败');
    }
  };
};

const deletePerson = (title, id, groupId) => ({
  type: DELETE_PERSON,
  title,
  id,
  groupId,
});

export const deletePersonThunk = (title, id, groupId) => {
  return (dispatch) => {
    dispatch(deletePerson(title, id, groupId));
    API.deletePerson(title, id);
  };
};

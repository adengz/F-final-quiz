import { RECEIVE_PEOPLE } from './actions';

const defaultState = {
  ungrouped: {
    trainers: {},
    trainees: {},
  },
  groups: {},
};

const array2Object = (arr) => Object.fromEntries(arr.map((item) => [item.id, item]));

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PEOPLE: {
      const { trainers, trainees } = action;
      return {
        ...state,
        ungrouped: {
          trainers: array2Object(trainers),
          trainees: array2Object(trainees),
        },
      };
    }
    default:
      return state;
  }
};

export default reducers;

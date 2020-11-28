import { RECEIVE_DATA, REFRESH_GROUPS, ADD_PERSON, DELETE_PERSON } from './actions';

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
    case RECEIVE_DATA:
    case REFRESH_GROUPS: {
      const { groups, trainers, trainees } = action;
      return {
        ...state,
        groups: Object.fromEntries(
          groups.map((group) => [
            group.id,
            {
              ...group,
              trainers: array2Object(group.trainers),
              trainees: array2Object(group.trainees),
            },
          ])
        ),
        ungrouped: {
          trainers: array2Object(trainers),
          trainees: array2Object(trainees),
        },
      };
    }
    case ADD_PERSON: {
      const { title, id, name } = action;
      return {
        ...state,
        ungrouped: {
          ...state.ungrouped,
          [title]: {
            ...state.ungrouped[title],
            [id]: { id, name },
          },
        },
      };
    }
    case DELETE_PERSON: {
      const { title, id, groupId } = action;
      if (typeof groupId === 'undefined') {
        const { [id]: _, ...rest } = state.ungrouped[title];
        return {
          ...state,
          ungrouped: {
            ...state.ungrouped,
            [title]: rest,
          },
        };
      }
      const { [id]: _, ...rest } = state.groups[groupId][title];
      return {
        ...state,
        groups: {
          ...state.groups,
          [groupId]: {
            ...state.groups[groupId],
            [title]: rest,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducers;

import constants from "./../constants";
import { defaultState, types } = constants;

const dogsById = (state = defaultState, action) => {
  let dog;
  let newDog;
  let newState;
  switch (action.type) {
    case types.REQUEST_DOG:
      newDog = {
        isFetching: true,
        dogSearch: action.dogSearch,
        dogId: action.dogId
      };
      newState = Object.assign({}, state, {[action.dogId]: newDog
      });
      return newState;
    case types.DISPLAY_DOG:
      dog = state[action.dogId];
      newDog = Object.assign({}, dog, {
        isFetching: false,
        dog: action.dog.
        dogId: action.dogId
      });
      return newDog;
    default:
      return state;
  }
}

export default dogsById;

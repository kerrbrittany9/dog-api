import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestDog = (dogSearch, dogId) => {(
  type: types.REQUEST_DOG,
  dogSearch,
  dogId: dogId
)};

export const displayDog = (dog, dogId) => ({
  type: types.DISPLAY_DOG,
  dog,
  dogId
});

export function fetchDog(dogSearch) {
  return function (dispatch) {
    const dogId = v4();
    dispatch(requestDog(dogSearch, dogId));
    // dogSearch = dogSearch.replace(" ", "/");
    return fetch("https://dog.ceo/api/breed/" + dogSearch + "/images")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      if (json.message > 0) {
        const dog = json.message[0];
        dispatch(displayDog(dog, dogId));
      } else {
        const dog = "No dogs found";
        dispatch(displayDog(dog, dogId));
      }
    });
  };
}

import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestDog = (dogSearch, dogId) => ({
  type: types.REQUEST_DOG,
  dogSearch,
  dogId: dogId
});

export const displayDog = (dog, dogSearch, dogId) => ({
  type: types.DISPLAY_DOG,
  dog,
  dogSearch,
  dogId
});

export function fetchDog(dogSearch) {
  return function (dispatch) {
    const dogId = v4();
    let dogSearchSplit;
    let dogSearchReverse;
    let dogSearchSlash;
    let dogSearchJoin;

    dispatch(requestDog(dogSearch, dogId));
    dogSearchSplit = dogSearch.split(" ");
    dogSearchReverse = dogSearchSplit.reverse();
    dogSearchSlash = dogSearchReverse.join("/");
    return fetch("https://dog.ceo/api/breed/" + dogSearchSlash + "/images")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      if (json.status === "success") {
        const dog = json.message[0];
        dispatch(displayDog(dog, dogSearch, dogId));
      } else {
        const dog = "https://i.pinimg.com/736x/90/28/c8/9028c873956c39dbc6f7c9049e3c6fed--puppy-dog-eyes-error.jpg";
        dispatch(displayDog(dog, dogId));
      }
    });
  };
}

import { createStore } from 'redux';

const initialState = {
  imgSrc: 'http://icons.iconarchive.com/icons/mazenl77/I-like-buttons-3a/512/Cute-Ball-Go-icon.png',
  position: {
    left: 0,
    top: 0
  }
};

const store = (state, action) => {
  state = state || initialState;
  console.log(action);
  switch (action.type) {
    case 'UPDATE_POSITION':
      return Object.assign({}, state, {
        position: action.position
      });
    case 'UNDO':
      return Object.assign({}, stateHistory.pop());
    default:
      return state;
  }
}

export default createStore(store);

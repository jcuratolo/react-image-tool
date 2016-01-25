import { createStore } from 'redux';

const initialState = {
  imgSrc: 'http://icons.iconarchive.com/icons/kyo-tux/aeon/256/Sign-LogOff-icon.png',
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
    case 'UPDATE_IMG_SRC':
      return Object.assign({}, state, {
        imgSrc: action.src
      });
    default:
      return state;
  }
}

export default createStore(store);

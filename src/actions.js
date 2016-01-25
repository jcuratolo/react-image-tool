import store from './store.js';
import actionTypes from './actionTypes.js';

const at = actionTypes;

let actions = {};

actions[at.UPDATE_IMG_SRC] = (src) => {
    store.dispatch({
      type: at.UPDATE_IMG_SRC,
      src: src
    });
};

actions[at.UPDATE_POSITION] = (position) => {
    store.dispatch({
      type: at.UPDATE_POSITION,
      position: position
    });
};

export default actions;

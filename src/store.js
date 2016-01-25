import { createStore } from 'redux';

const initialState = {
  position:{
    left: 0,
    top: 0
  }
};

function todosApp(state, action) {
  state = state || initialState;
  switch (action.type) {
    case 'UPDATE_POSITION':
    console.log('updating position');
      const nextState = Object.assign({}, state, {
        position: action.position
      });
      break;
    default:
      return state;
  }
  console.log(nextState);
  return nextState || state;
}

export default createStore(todosApp);

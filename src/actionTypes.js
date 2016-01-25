const actionTypes = [
  'UPDATE_POSITION',
  'UPDATE_IMG_SRC'
];
let actionTypesMirrored = {};

actionTypes.forEach(type => {
  actionTypesMirrored[type] = type;
});

export default actionTypesMirrored;

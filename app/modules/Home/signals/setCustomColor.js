// import setCustomColor from 'cerebral-addons/setCustomColor';

let changeColorAction = (input, state, output) => {
  state.set(['color'], state.get(['customColor']));
};

export default [
  changeColorAction
];

import colorChanged from './signals/colorChanged';
import inputChanged from './signals/inputChanged';
import setCustomColor from './signals/setCustomColor';

export default (controller) => {

  controller.signal('colorChanged', colorChanged);
  controller.signal('inputChanged', inputChanged);
  controller.signal('setCustomColor', setCustomColor);

};

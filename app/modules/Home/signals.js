import colorChanged from './signals/colorChanged';
import inputChanged from './signals/inputChanged';
import setCustomColor from './signals/setCustomColor';
import songLoaded from './signals/songLoaded';

export default (controller) => {

  controller.signal('colorChanged', colorChanged);
  controller.signal('inputChanged', inputChanged);
  controller.signal('setCustomColor', setCustomColor);
  controller.signal('songLoaded', songLoaded);

};

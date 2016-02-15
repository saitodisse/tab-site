import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import song_body from './fixture-song.js';

const model = Model({
  title: 'Hello world!',
  color: '#333',
  customColor: '',
  song: {
    title: 'Title',
    body: song_body.join('\n'),
    rendered_read_tree: '',
  }
});

export default Controller(model);

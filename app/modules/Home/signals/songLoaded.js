import React from 'react';
import MTRC from 'markdown-to-react-components';
import {Extractor} from 'chord-md-parser';

let convertToMarkDown = (input, state, output) => {
  let song_body = state.get(['song', 'body']);

  let react_parsed = MTRC(song_body).tree;
  window.react_parsed = react_parsed;

  let extractor = new Extractor({
    md: {
      filepath: null,
      content: song_body
    }
  });

  let song = extractor.getSong();
  state.set(['song', 'song_parsed'], song);
};

export default [
  convertToMarkDown
];

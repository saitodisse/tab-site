import React from 'react';
import styles from './styles.css';

function Song(props) {
  return (
    <div>
      <h1>
        {props.song.title}
      </h1>
      {props.song.rendered_read_tree}
    </div>
  );
}

export default Song;

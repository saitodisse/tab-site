import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import Title from './components/Title';
import Song from './components/Song';

@Cerebral({
  title: ['title'],
  color: ['color'],
  customColor: ['customColor'],
  song: ['song'],
})
class App extends React.Component {

  componentDidMount() {
    this.props.signals.songLoaded();
  }

  render() {
    return (
      <div>
        <Song song={this.props.song}></Song>

        <Title color={this.props.color}>
          {/* Title.children is required */}
          {this.props.title}
        </Title>

        <p>title: {this.props.title}</p>
        <p>color: {this.props.color}</p>

        <button onClick={() => this.props.signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => this.props.signals.colorChanged({color: 'blue'})}>Blue</button>
        {' | '}
        <input
          value={this.props.customColor}
          onChange={(e) => this.props.signals.inputChanged({customColor: e.target.value})}
        />
        <button onClick={() => this.props.signals.setCustomColor()}>Set</button>

      </div>
    );
  }
}

export default App;

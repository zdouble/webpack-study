import React from 'react';
import image from './webpack.svg';
import { hot } from 'react-hot-loader'
class App extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count+1,
      })
    }, 1000);
  }
  
  render() {
    return (
      <>
        <img src={image} />
        <div>hello refasfact{this.state.count}</div>
      </>
    );
  }
}

export default hot(module)(App);

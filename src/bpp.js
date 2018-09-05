import React from 'react';
import { render } from 'react-dom';
import './style.css';
import image from './webpack.svg';
const App = () => (
  <>
    <img src={image} />
    <div>hello react</div>
  </>
);

render(<App />, document.getElementById('app'));

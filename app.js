import React from 'react';
import { render } from 'react-dom';

const App = () => <div>hello react</div>;

// class App extends React.Component {
//   render() {
//     return <div>hello react</div>;
//   }
// }

render(<App/>, document.getElementById('app'));
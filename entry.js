import React from 'react';
import ReactDOM from 'react-dom';

import Clicker from './clicker.js';
import Label from './label.js';

require("./style.css");

class App extends React.Component {
  render() {
    return (
    	<div>
    		<Clicker/>
    		<Label/>
    	</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

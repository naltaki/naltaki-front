import React  from 'react';
import App    from './App';
import config from './config';

var mountNode = document.getElementById('main');

React.render(<App config={config.params} />, mountNode);
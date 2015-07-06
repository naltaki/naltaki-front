import React  from 'react';
import Parse  from 'parse';
import App    from './App';
import Router from 'react-router';
import routes from './routes';

Parse.initialize(window.PARSE_APPLICATION_ID, window.PARSE_JAVASCRIPT_KEY);

var mountNode = document.getElementById('main');

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root config={window.GROUP_CONFIG} />, mountNode);
});
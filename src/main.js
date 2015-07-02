import React  from 'react';
import Parse  from 'parse';
import App    from './App';
import Router from 'react-router';
import routes from './routes';

Parse.initialize(window.PARSE_APPLICATION_ID, window.PARSE_JAVASCRIPT_KEY);

var mountNode = document.getElementById('main');

const config = {
  name: window.GROUP_NAME,
  description: window.GROUP_DESCRIPTION,
  rootUrl: window.ROOT_URL,
  formContact: window.FORM_CONTACT,
  headerMenuLinks: window.HEADER_MENU_LINKS,
  twitterUsername: window.TWITTER_USERNAME,
  twitterWidgetId: window.TWITTER_WIDGET_ID
};

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root config={config} />, mountNode);
});
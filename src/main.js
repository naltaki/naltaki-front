import React      from 'react';
import { Parse }  from 'parse';
import ParseReact from 'parse-react';
import App        from './App';

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

React.render(<App config={config} />, mountNode);
import React  from 'react';
import App    from './App';

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
import Router, { Route, DefaultRoute } from 'react-router';

import App            from './App';
import Homepage       from './Homepage';
import CodeOfConduct  from './CodeOfConduct';
import Contact        from './Contact';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Homepage} />
    <Route path="code-of-conduct" handler={CodeOfConduct} />
    <Route path="contact" handler={Contact} />
  </Route>
);
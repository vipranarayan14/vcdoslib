import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BooksByRack } from './pages/BooksByRack';
import { BooksBySubject } from './pages/BooksBySubject';
import { Browse } from './pages/Browse';
import { RackList } from './pages/RackList';
import { Results } from './pages/Results';
import { SubjectList } from './pages/SubjectList';

export const Router = booksProps => (
  <Switch>
    {/* Note: `render` prop accepts only a function, so only 
    functional component can be passed directly. */}
    <Route
      path="/browse/racks/:rack"
      render={routeProps => <BooksByRack {...routeProps} {...booksProps} />}
    />

    <Route path="/browse/racks" render={RackList} />

    <Route
      path="/browse/subjects/:code"
      render={routeProps => <BooksBySubject {...routeProps} {...booksProps} />}
    />

    <Route path="/browse/subjects" render={SubjectList} />

    <Route path="/browse/authors">
      <h2>Browse by Author</h2>
    </Route>

    <Route path="/browse/titles">
      <h2>Browse by Title</h2>
    </Route>

    <Route path="/browse" render={Browse} />

    <Route
      path="/"
      render={routeProps => <Results {...routeProps} {...booksProps} />}
    />
  </Switch>
);

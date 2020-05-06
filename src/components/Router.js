import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withProps } from './containers/WithProps';

import { BooksProvider } from './containers/BooksProvider';

import { BooksByRack } from './pages/BooksByRack';
import { BooksBySubject } from './pages/BooksBySubject';
import { Browse } from './pages/Browse';
import { RackList } from './pages/RackList';
import { Results } from './pages/Results';
import { SubjectList } from './pages/SubjectList';

export const Router = () => (
  <BooksProvider>
    {booksProps => (
      <Switch>
        <Route
          path="/browse/racks/:num"
          component={withProps(BooksByRack, booksProps)}
        />

        <Route path="/browse/racks" component={RackList} />

        <Route
          path="/browse/subjects/:code"
          component={withProps(BooksBySubject, booksProps)}
        />

        <Route path="/browse/subjects" component={SubjectList} />

        <Route path="/browse/authors">
          <h2>Browse by Author</h2>
        </Route>

        <Route path="/browse/titles">
          <h2>Browse by Title</h2>
        </Route>

        <Route path="/browse" component={Browse} />

        <Route path="/" component={withProps(Results, booksProps)} />
      </Switch>
    )}
  </BooksProvider>
);

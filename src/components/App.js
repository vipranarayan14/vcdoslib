/* libraries */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BooksProvider } from './providers/BooksProvider';

/* components */
import { BooksByRack } from './pages/BooksByRack';
import { BooksBySubject } from './pages/BooksBySubject';
import { Browse } from './pages/Browse';
import { Footer } from './blocks/Footer';
import { Logo } from './icons/icons';
import { Nav } from './blocks/Nav';
import { RackList } from './pages/RackList';
import { Results } from './pages/Results';
import { ScrollReset } from './blocks/ScrollReset';
import { ScrollToTop } from './blocks/ScrollToTop';
import { SearchBox } from './blocks/SearchBox';
import { SubjectList } from './pages/SubjectList';

/* stylesheets */
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <ScrollReset />

          <header>
            <div>
              <h1>
                <Logo /> Library
              </h1>
              <h2>
                Department of Sanskrit, <br />
                RKM Vivekananda College
              </h2>
              <Route
                exact
                path="/"
                component={props => <SearchBox {...props} />}
              />

              <Nav />
            </div>
          </header>

          <main>
            <BooksProvider>
              {booksProps => (
                <Switch>
                  <Route path="/browse/racks/:rack">
                    <BooksByRack {...booksProps} />
                  </Route>

                  <Route path="/browse/racks" component={RackList} />

                  <Route path="/browse/subjects/:code">
                    <BooksBySubject {...booksProps} />
                  </Route>

                  <Route path="/browse/subjects" component={SubjectList} />

                  <Route path="/browse/authors">
                    <h2>Browse by Author</h2>
                  </Route>

                  <Route path="/browse/titles">
                    <h2>Browse by Title</h2>
                  </Route>

                  <Route path="/browse" component={Browse} />

                  <Route
                    path="/"
                    render={props => (
                      <Results location={props.location} {...booksProps} />
                    )}
                  />
                </Switch>
              )}
            </BooksProvider>
            <ScrollToTop />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

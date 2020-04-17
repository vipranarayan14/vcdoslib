/* libraries */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* components */
import { BooksByRack } from './components/BooksByRack';
import { BooksBySubject } from './components/BooksBySubject';
import { Browse } from './components/Browse';
import { Footer } from './components/Footer';
import { Logo } from './icons/icons';
import { Nav } from './components/Nav';
import { Notify } from './components/Notify';
import { RackList } from './components/RackList';
import { Results } from './components/Results';
import { ScrollReset } from './components/ScrollReset';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchBox } from './components/SearchBox';
import { SubjectList } from './components/SubjectList';

/* utils */
import { initFuse } from './utils/init-fuse';
import { parseCSV } from './utils/parse-csv';

/* stylesheets */
import styles from './App.module.css';

let allBooks = [],
  fuse = {};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingData: true
    };

    this.logError = console.error; //eslint-disable-line no-console
  }

  componentDidMount() {
    parseCSV()
      .then(results => {
        allBooks = results.data;
        fuse = initFuse(allBooks);
        this.setState({
          isLoadingData: false
        });
      })
      .catch(err => this.logError(err));
  }

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
            <Switch>
              <Route
                path="/browse/racks/:rack"
                component={() => (
                  <BooksByRack
                    allBooks={allBooks}
                    isLoadingData={this.state.isLoadingData}
                  />
                )}
              />

              <Route path="/browse/racks" component={RackList} />

              <Route
                path="/browse/subjects/:code"
                component={() => (
                  <BooksBySubject
                    allBooks={allBooks}
                    isLoadingData={this.state.isLoadingData}
                  />
                )}
              />

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
                  <Results
                    fuse={fuse}
                    isLoadingData={this.state.isLoadingData}
                    {...props}
                  />
                )}
              />
            </Switch>

            {this.state.isLoadingData && <Notify msg="Loading books..." />}

            <ScrollToTop />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

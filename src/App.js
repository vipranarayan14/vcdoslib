/* libraries */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* components */
import { Browse } from './components/Browse';
import { Nav } from './components/Nav';
import { Results } from './components/Results';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchBox } from './components/SearchBox';
import { SubjectList } from './components/SubjectList';
import { RackList } from './components/RackList';
import { BooksBySubject } from './components/BooksBySubject';
import { BooksByRack } from './components/BooksByRack';

/* utils */
import { initFuse } from './utils/init-fuse';
import { parseCSV } from './utils/parse-csv';

/* stylesheets */
import './App.css';
import { Notify } from './components/Notify';
import { ScrollReset } from './components/ScrollReset';

let allBooks = [],
  fuse;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHomepage: true,
      isLoadingData: true,
      isTop: true,
      searchQuery: '',
      searchResults: {
        exactMatches: [],
        partialMatches: []
      }
    };

    this.logError = console.error; //eslint-disable-line no-console
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

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

  handleScroll() {
    const maxScrollTop = 250;

    const isTop =
      document.body.scrollTop < maxScrollTop &&
      document.documentElement.scrollTop < maxScrollTop;

    this.setState({ isTop });
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      isHomepage: false
    });
  }

  render() {
    return (
      <Router>
        <ScrollReset />
        <div className="App">
          <header>
            <div>
              <h1>Library</h1>
              <h2>
                Department of Sanskrit
                <br />
                RKM Vivekananda College
              </h2>
              <Route exact path={['/', '/search']}>
                <SearchBox
                  searchQuery={this.state.searchQuery}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </Route>
              <Route path="/search/:query">
                <SearchBox
                  searchQuery={this.state.searchQuery}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </Route>
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
                path="/search/:query"
                render={() => (
                  <Results
                    fuse={fuse}
                    searchResults={this.state.searchResults}
                    isLoadingData={this.state.isLoadingData}
                    isHomepage={this.state.isHomepage}
                  />
                )}
              />
              {/* <Route path="/">
                <Redirect to="/search" />
              </Route> */}
            </Switch>
            {this.state.isLoadingData && <Notify msg="Loading books..." />}

            <ScrollToTop isTop={this.state.isTop} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

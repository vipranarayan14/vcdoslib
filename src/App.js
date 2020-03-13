/* libraries */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

/* components */
import { LoadingMsg } from './components/LoadingMsg';
import { Results } from './components/Results';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchBox } from './components/SearchBox';

/* modules */
import { initFuse } from './modules/init-fuse';
import { parseCSV } from './modules/parse-csv';

/* stylesheets */
import './App.css';
import { Nav } from './components/Nav';

let allbooks = [],
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
    this.handleHashchange = this.handleHashchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.setSearchQueryFromHash = this.setSearchQueryFromHash.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('hashchange', this.handleHashchange);

    this.setSearchQueryFromHash();

    parseCSV()
      .then(results => {
        allbooks = results.data;
        fuse = initFuse(allbooks);
        this.setState({
          isLoadingData: false
        });
      })
      .then(this.getSearchResults)
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

  handleHashchange() {
    this.setSearchQueryFromHash();
    this.getSearchResults();
  }

  handleSubmit(e) {
    e.preventDefault();

    window.location.hash = `/search/${encodeURIComponent(
      this.state.searchQuery
    )}`;

    this.setState({
      isHomepage: false
    });
  }

  setSearchQueryFromHash() {
    const searchQueryRegex = /#\/search\/(.+)/;
    const encodedSearchQuery = window.location.hash.match(searchQueryRegex);

    if (encodedSearchQuery) {
      this.setState({
        isHomepage: false,
        searchQuery: decodeURIComponent(encodedSearchQuery[1])
      });
    }
  }

  getSearchResults() {
    if (!this.state.isLoadingData && this.state.searchQuery) {
      const fuseResults = fuse.search(this.state.searchQuery);

      const partialMatchScore = 0.05;

      const firstPartialMatchIndex = fuseResults.findIndex(
        result => result.score > partialMatchScore
      );

      /* using `firstPartialMatchIndex` directly will not give unexpected results. Tested! */
      const exactMatches = fuseResults.slice(0, firstPartialMatchIndex);

      /* Array.slice() will extract till the end if end is not specified. */
      const partialMatches = fuseResults.slice(firstPartialMatchIndex);

      const searchResults = {
        exactMatches,
        partialMatches
      };

      this.setState({ searchResults });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              <h1>Library</h1>
              <h2>
                Department of Sanskrit <br />
                RKM Vivekananda College
              </h2>
              <SearchBox
                searchQuery={this.state.searchQuery}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <Nav />
            </div>
          </header>
          <main>
            <LoadingMsg
              isLoadingData={this.state.isLoadingData}
              msg="Loading Books..."
            />
            <Route path="/">
              <Redirect to="/search" />
            </Route>
            <Route path="/search">
              <Results
                searchResults={this.state.searchResults}
                isLoadingData={this.state.isLoadingData}
                isHomepage={this.state.isHomepage}
              />
            </Route>
            <Route path="/browse">
              <h1>Browse</h1>
            </Route>
            <ScrollToTop isTop={this.state.isTop} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

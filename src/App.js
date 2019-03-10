/* libraries */
import React, { Component } from 'react';

/* components */
import { Results } from './components/Results';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchBox } from './components/SearchBox';

/* modules */
import { initFuse } from './modules/init-fuse';
import { parseCSV } from './modules/parse-csv';

/* stylesheets */
import './App.css';

let allbooks = [],
  fuse;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      isHomepage: true,
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
      })
      .then(this.getSearchResults)
      .catch(err => this.logError(err));
  }

  handleScroll() {
    const isTop =
      document.body.scrollTop < 250 && document.documentElement.scrollTop < 250;

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
        searchQuery: decodeURIComponent(encodedSearchQuery[1]),
        isHomepage: false
      });
    }
  }

  getSearchResults() {
    if (this.state.searchQuery) {
      const fuseResults = fuse.search(this.state.searchQuery);

      const firstPartialMatchIndex = fuseResults.findIndex(
        result => result.score > 0.05
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
      <div className="App">
        <header>
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
        </header>
        <main>
          <Results
            searchResults={this.state.searchResults}
            isHomepage={this.state.isHomepage}
          />
          <ScrollToTop isTop={this.state.isTop} />
        </main>
      </div>
    );
  }
}

export default App;

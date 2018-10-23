/* libraries */
import React, {Component} from 'react';

/* components */
import {Results} from './components/Results';
import {ScrollToTop} from './components/ScrollToTop';
import {SearchBox} from './components/SearchBox';

/* modules */
import {initFuse} from './modules/init-fuse';
import {parseCSV} from './modules/parse-csv';

/* stylesheets */
import './App.css';

let allbooks = [],
  fuse;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      searchQuery: '',
      searchResults: {
        exactMatches: [],
        partialMatches: []
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    parseCSV().then(results => {
      allbooks = results.data;
      fuse = initFuse(allbooks);
    });

    window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll() {

    const isTop = document.body.scrollTop < 250 && document.documentElement.scrollTop < 250;

    this.setState({isTop});

  }

  handleSubmit(e) {
    e.preventDefault();

    const searchQuery = e.target.search.value;
    const fuseResults = fuse.search(searchQuery);

    const firstPartialMatchIndex = fuseResults.findIndex(result => result.score > 0.05);

    /* using `firstPartialMatchIndex` directly will not give unexpected results. Tested! */
    const exactMatches = fuseResults.slice(0, firstPartialMatchIndex);

    /* Array.slice() will extract till the end if end is not specified. */
    const partialMatches = fuseResults.slice(firstPartialMatchIndex);

    const searchResults = {
      exactMatches,
      partialMatches
    };

    this.setState({searchQuery, searchResults});
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.isTop)}
        <header>
          <h1>Library</h1>
          <h2>Department of Sanskrit, RKM Vivekananda College</h2>
          <SearchBox handleSubmit={this.handleSubmit}/>
        </header>
        <main>
          <Results searchResults={this.state.searchResults} searchQuery={this.state.searchQuery}/>
          <ScrollToTop isTop={this.state.isTop}/>
        </main>
      </div>
    );
  }

}

export default App;

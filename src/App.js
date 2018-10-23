/* libraries */
import React, {Component} from 'react';

/* components */
import {Results} from './components/Results';
import {ResultStats} from './components/ResultStats';
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
      searchQuery: '',
      searchResults: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    parseCSV().then(results => {
      allbooks = results.data;
      fuse = initFuse(allbooks);
    });

  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      searchQuery: e.target.search.value,
      searchResults: fuse.search(e.target.search.value)
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Library</h1>
          <h2>Department of Sanskrit, RKM Vivekananda College</h2>
          <SearchBox handleSubmit={this.handleSubmit}/>
        </header>
        <main>
          <ResultStats searchResults={this.state.searchResults}/>
          <Results searchResults={this.state.searchResults} searchQuery={this.state.searchQuery}/>
        </main>
      </div>
    );
  }

}

export default App;

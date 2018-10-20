import React, {Component} from 'react';
import {BookList} from './components/BookList';
import {ResultStats} from './components/ResultStats';
import {SearchBox} from './components/SearchBox';

import {parse} from 'papaparse';
import * as Fuse from 'fuse.js';

import './App.css';

const options = {
  distance: 100,
  findAllMatches: true,
  keys: [
    'BookTitle', 'Author', 'AccesionNo', 'RackNo'
  ],
  location: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.5
};

const parseCSV = () => new Promise((resolve, reject) => {
  parse(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y' +
        '78r7Y488E/pub?gid=0&single=true&output=csv',
    {
      header: true,
      download: true,
      complete: resolve
    }
  );
});

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
      fuse = new Fuse(allbooks, options);
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
          <BookList searchResults={this.state.searchResults} searchQuery={this.state.searchQuery}/>
        </main>
      </div>
    );
  }

}

export default App;

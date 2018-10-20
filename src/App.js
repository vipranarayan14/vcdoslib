import React, {Component} from 'react';
import {BookList} from './components/BookList'

import {parse} from 'papaparse';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {

    const config = {
      header: true,
      download: true,
      complete: results => {
        this.setState({books: results.data});
      }
    };

    parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y' +
          '78r7Y488E/pub?gid=0&single=true&output=csv',
      config
    );

  }

  render() {
    return (
      <div className="App">
        <BookList books={this.state.books} />
      </div>
    );
  }

}

export default App;

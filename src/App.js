import React, {Component} from 'react';
import {parse} from 'papaparse';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {

    const config = {
      header: true,
      download: true,
      complete: results => {
        this.setState({data: results});
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
        <div className="data-table">
          {
            this.state.data
              ? this.state.data.data.map((row, i) => (
                <div className="row" key={i}>
                  <span className="accno">{row['Accesion No.']}</span>
                  <span className="title">{row['Book Title']}</span>
                  <span className="author">{row['Author']}</span>
                  <span className="rack">{row['Rack No.']}</span>
                  <span className="subject">{row['Classification']}</span>
                </div>
              ))
              : null
          }
        </div>
      </div>
    );
  }

}

export default App;

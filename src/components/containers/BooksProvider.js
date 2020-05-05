import React, { Component } from 'react';

import { initFuse } from '../../utils/init-fuse';

import { loadBooks } from '../../utils/load-books';

export class BooksProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingBooks: true
    };

    this.books = [];
    this.fuse = {};

    this.logError = console.error; //eslint-disable-line no-console
  }
  componentDidMount() {
    loadBooks()
      .then(({ data }) => {
        this.books = data;
        this.fuse = initFuse(this.books);

        this.setState({
          isLoadingBooks: false
        });
      })
      .catch(this.logError);
  }

  render() {
    return (
      <>
        {this.props.children({
          books: this.books,
          fuse: this.fuse,
          isLoadingBooks: this.state.isLoadingBooks
        })}
      </>
    );
  }
}

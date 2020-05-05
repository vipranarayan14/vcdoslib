/* libraries */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BooksProvider } from './providers/BooksProvider';

/* components */
import { Footer } from './blocks/Footer';
import { Header } from './blocks/Header';
import { Router } from './Router';

import { ScrollReset } from './blocks/ScrollReset';
import { ScrollToTop } from './blocks/ScrollToTop';

/* stylesheets */
import styles from './App.module.css';

const App = () => (
  <BrowserRouter>
    <div className={styles.App}>
      <ScrollReset />

      <Header />

      <main>
        <BooksProvider>
          {booksProps => <Router {...booksProps} />}
        </BooksProvider>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;

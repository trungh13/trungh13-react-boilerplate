import React from 'react';
import styles from './App.css';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
  <div className={styles.App}>
    <header>
      <Header />
    </header>
    <main>
      <Main/>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);
export default App;

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News page={2} pagesize={9} apiKey={'edbffe49f92e4dfaabd4f8f603f3940b'} country={'in'} category="science" />
      </div>
    )
  }
}

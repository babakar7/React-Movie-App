import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import SearchResults from './components/SearchResults'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter, Route} from 'react-router-dom'

import { ScrollContext } from 'react-router-scroll-4';


library.add(faStar)
library.add(faChevronRight)
library.add(faChevronLeft)


class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
        <ScrollContext>

        <>
        <Route path="/" exact  component={Home} />
        <Route path="/movie/:id" component={MovieDetails}/>
        <Route path='/results' component={SearchResults}/>
        </>
        </ScrollContext>
      </BrowserRouter>


      </div>
    );
  }
}

export default App;

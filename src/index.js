//Create a new component.
//This component shoudl produce some html
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDleICMbIA_XQbBKLZi33fUeUMPbEhauEY';
const App =() => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


//Take this components HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

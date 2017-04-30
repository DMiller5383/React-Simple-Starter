//Create a new component.
//This component shoudl produce some html
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDleICMbIA_XQbBKLZi33fUeUMPbEhauEY';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
      console.log(videos);
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}


//Take this components HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

import React, {Component} from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD_zvnQfNkuDJHoxrY0Kqg1O4zhPaXjkEc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
      this.setState({ videos });
      //{videos} eq to {videos: videos} in ES6
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"))

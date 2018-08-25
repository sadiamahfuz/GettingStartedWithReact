import React from "react"
import ReactDOM from "react-dom"

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD_zvnQfNkuDJHoxrY0Kqg1O4zhPaXjkEc";

const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"))

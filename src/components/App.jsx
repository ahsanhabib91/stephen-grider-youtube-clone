import React from "react";
import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: { q: term }
    });
    console.log(response.data);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;

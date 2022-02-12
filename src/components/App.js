import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (videos) => {
    console.log("From the app!", videos);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        I Have {this.state.videos.length} videos.
      </div>
    );
  }
}
export default App;

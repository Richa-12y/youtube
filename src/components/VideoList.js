import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((videos) => {
    return <VideoItem onVideoSelect={onVideoSelect} videos={videos} />;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};
export default VideoList;

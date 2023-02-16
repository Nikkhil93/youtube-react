import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import Shimmer from './Shimmer';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const VideoContainer = ({cardType}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const maxResults = cardType === 'block'? 50: 20;
    const data = await fetch(YOUTUBE_VIDEOS_API+'&maxResults='+maxResults+'&key=' + API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className={cardType === 'block'?"flex flex-wrap": " block"}>
      {videos.length>0? videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} cardType={cardType} />
        </Link>
      )): <Shimmer />}
    </div>
  );
};

export default VideoContainer;

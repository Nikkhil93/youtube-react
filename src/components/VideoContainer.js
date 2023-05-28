import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import Shimmer from './Shimmer';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setVideoList } from "../utils/videoListSlice";
import useHttp from "../hooks/use-http";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const VideoContainer = ({cardType}) => {

  const dispatch = useDispatch();
  const [videos] = useSelector(store => store.videoList.videoLists);
  const isLoading = useSelector(store => store.videoList.isLoading);
  const maxResults = cardType === 'block'? 50: 20;

  const afterVideosFetched = (json) => {
    error? alert(error): dispatch(setVideoList([json.items]));    
  }
  const {error, fetchDetails} = useHttp({url: YOUTUBE_VIDEOS_API+'&maxResults='+maxResults+'&key=' + API_KEY}, afterVideosFetched, [{key: setIsLoading, value: true}]);

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className={cardType === 'block'?"flex flex-wrap": " block"}>
      { !isLoading ? videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.etag} info={video} cardType={cardType} />
        </Link>
      )): <Shimmer />}
    </div>
  );
};

export default VideoContainer;

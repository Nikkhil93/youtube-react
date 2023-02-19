import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import VideoContainer from "./VideoContainer";
import WatchMedaData from "./WatchMedaData";
import { YOUTUBE_SEARCH_ID } from "../utils/contants";
import { setmetaData } from "../utils/videoDetailsSlice";
import { resetComments } from "../utils/commentSlice";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(resetComments());
    getVideo();
    window.scrollTo(0, 0);
  }, [searchParams]);

  const setVideoDetails = (video) => {
    dispatch(setmetaData({snippet: video[0].snippet, statistics: video[0].statistics}));
  }

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_SEARCH_ID+searchParams.get("v")+'&key=' + API_KEY);
    const json = await data.json();
    setVideoDetails(json.items);
  };
  

  return (
    <div className=" w-[calc(100vw_-_75px)] flex justify-center">
      <div className="pr-5 h-screen w-4/6 mt-2">
        <iframe
        className=" h-4/6 w-full"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") +'?autoplay=0'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <WatchMedaData />
      </div>
      <div className=" w-4/12"> <VideoContainer cardType ="Suggestions"/></div>
    </div>
  );
};

export default WatchPage;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import VideoContainer from "./VideoContainer";
import WatchMedaData from "./WatchMedaData";
import { YOUTUBE_SEARCH_ID } from "../utils/contants";
import { setmetaData } from "../utils/videoDetailsSlice";
import { resetComments } from "../utils/commentSlice";
import LiveChat from "./LiveChat";
import useHttp from "../hooks/use-http";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [showLiveChat, setShowLiveChat] = useState(false);

  const dispatch = useDispatch();
  const toggleClasses="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"; 

  const setVideoDetails = (json) => {
    dispatch(setmetaData({snippet: json.items[0].snippet, statistics: json.items[0].statistics}));
    window.scrollTo(0, 0);
  }

  const {error, fetchDetails} = useHttp(setVideoDetails, [{key:closeMenu , value:null }, {key:resetComments , value:null} ])

  useEffect(() => {
    fetchDetails({url:YOUTUBE_SEARCH_ID+searchParams.get("v")+'&key=' + API_KEY});
  }, [searchParams]);
  

  return (
    <div className=" w-[calc(100vw_-_75px)] flex justify-center ml-5">
      <div className="pr-5 h-screen w-4/6 mt-2">
        <iframe
        className=" h-4/6 w-full"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") +'?autoplay=1'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <WatchMedaData />
      </div>
      <div className=" w-4/12">
        <label className="inline-flex items-center cursor-pointer my-2">
          <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">Live Chat</span>
          <div className=" flex relative">
            <input type="checkbox" checked={showLiveChat} className="sr-only peer" onChange={()=> setShowLiveChat(!showLiveChat)}/>
            <div className={toggleClasses}></div>
          </div>
        </label>
        {!showLiveChat? <VideoContainer cardType ="Suggestions"/>: <div className=" w-11/12"><LiveChat /></div>}
      </div>
    </div>
  );
};

export default WatchPage;

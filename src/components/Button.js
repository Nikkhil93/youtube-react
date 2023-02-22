import React from "react";
import { useDispatch } from "react-redux";
import { CATEGORY_SEARCH_URL , YOUTUBE_VIDEOS_API  } from "../utils/contants";
import { setVideoList,setIsLoading } from "../utils/videoListSlice";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Button = (props) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    dispatch(setIsLoading(true));
    if(props.listItem.id !== 1){
      const data = await fetch(CATEGORY_SEARCH_URL+'&q='+ props.listItem.name + '&key=' + API_KEY);
      const json = await data.json();
      const items = json.items.map((item) => {return{...item, id: item.id.videoId}})
      dispatch(setVideoList([items]));
    } else {
      const data = await fetch(YOUTUBE_VIDEOS_API+'&maxResults=50'+'&key=' + API_KEY);
      const json = await data.json();
      dispatch(setVideoList([json.items]));
    }
  };
  return (
    <div>
      <button onClick={() => getVideos()} className="px-5 py-1 m-2 bg-gray-200 rounded-lg hover:bg-gray-400">{props.listItem.name}</button>
    </div>
  );
};

export default Button;

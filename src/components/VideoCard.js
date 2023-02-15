import React, { useState, useEffect }  from "react";
import { useSelector } from 'react-redux';
import VIEWS from '../logos/view-6444.svg'
import Tooltip from "./Tooltip";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [container, setContainer] = useState('p-2 m-2 md:w-48 lg:w-64 shadow-lg');
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  useEffect(() => {
    isMenuOpen? setContainer('p-2 m-2 md:w-48 lg:w-64 shadow-lg') : setContainer('p-2 m-2 md:w-48 lg:w-72 shadow-lg');
  }, [isMenuOpen]);

  return (
    <div className={container}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2 ">
          <Tooltip content={title} direction="top">{title}</Tooltip></li>
        <li>{channelTitle}</li>
        <li className="flex items-center">
          <img
            className=" mr-1 h-6"
            alt="views"
            src={VIEWS}
          />
          {statistics.viewCount> 1000000? Math.ceil(statistics.viewCount / 1000000 )+ 'M': statistics.viewCount> 1000? Math.ceil(statistics.viewCount / 1000 ) + 'K': statistics.viewCount } • 
          <span className="flex ml-2">
          {Math.ceil((new Date() -new Date(publishedAt))/(1000 * 60 * 60 * 24))} Days ago </span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

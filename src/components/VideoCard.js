import React, { useState, useEffect }  from "react";
import { useSelector } from 'react-redux';
import VIEWS from '../logos/view-6444.svg'
import Tooltip from "./Tooltip";

const VideoCard = ({ info, cardType }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [container, setContainer] = useState('p-2 m-2 md:w-48 lg:w-64 shadow-lg');
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  useEffect(() => {
    if(cardType === 'block'){
      isMenuOpen? setContainer('p-2 m-2 sm:w-56 md:w-48 lg:w-72 shadow-lg') : setContainer('p-2 m-2 sm:w-56 md:w-48  lg:w-80 shadow-lg');
    } else {
      setContainer('flex')
    }
  }, [isMenuOpen, cardType]);


  return (
    <div className={container}>
      <img className={cardType === 'block'?"rounded-lg ": "rounded-lg  w-2/5 h1/10 m-1"} alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className={cardType === 'block'?"font-bold pt-2 ": "pt-2"}>
          <Tooltip content={title} direction="top" contentStyle= {{display: '-webkit-box', WebkitBoxOrient: 'vertical',  WebkitLineClamp: '2'}} contentClasses = {cardType === 'block'?"max-h-14 overflow-hidden sm:w-56 md:w-48 lg:w-72 ": "max-h-14 overflow-hidden w-56 text-sm"}>{title}</Tooltip></li>
        <li className=" text-zinc-600 text-xs">{channelTitle}</li>
        <li className="flex items-center text-xs text-zinc-600">
          <img
            className=" mr-1 h-6"
            alt="views"
            src={VIEWS}
          />
          {statistics?.viewCount> 1000000? Math.ceil(statistics.viewCount / 1000000 )+ 'M': statistics?.viewCount> 1000? Math.ceil(statistics?.viewCount / 1000 ) + 'K': statistics?.viewCount ? statistics?.viewCount: 'NA' } • 
          <span className="flex ml-2">
          {Math.ceil((new Date() -new Date(publishedAt))/(1000 * 60 * 60 * 24))} Days ago </span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

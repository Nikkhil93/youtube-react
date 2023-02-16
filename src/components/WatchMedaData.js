import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import USER_ICON from '../logos/user-profile-icon.svg';
import DISLIKE_ICON from '../logos/dislike-icon.svg';
import LIKE_ICON from '../logos/like-icon.svg'

const WatchMedaData = () => {
  const [showMore, setShowMore] = useState(false);
  const {snippet ,statistics } = useSelector((store) => store.videoDetails.metaData);
  
  useEffect(() => {
    if(!showMore){
      window.scrollTo(0, 0)
    }
  }, [showMore])
  return (
    <div className=' m-3 relative'>
      <h1 className=' text-2xl font-bold my-6'> {snippet?.title}</h1>
      <div className='flex mb-4'>
        <img
          className=" h-16"
          alt="user"
          src={USER_ICON}
        />
        <div className=' mx-2'>
          <h1 className=' font-bold text-lg'>{snippet?.channelTitle}</h1>
          <span className=' text-gray-500'>{(Math.random()*100).toFixed(2)}k subscribers</span>
        </div>
        <div className=' mx-6 h-16 w-40 bg-black text-white border rounded-full flex text-center justify-center items-center text-xl'> Subscribe 
        </div>
        <div className=' absolute right-3 flex bg-gray-200 rounded-full p-4 justify-center'>
          <div className='flex justify-center items-center border-r-2 border-black'>
            <img
            className=" h-8"
            alt="Likes"
            src={LIKE_ICON}
            />
            <span className=' ml-2 mr-4'>{statistics?.likeCount? Math.floor(statistics.likeCount/1000)+'k':''}</span>
          </div>
            <img
            className=" h-8 ml-4"
            alt="dislike"
            src={DISLIKE_ICON}
            />
        
        </div>
      </div>
      <div className={ !showMore ? 'bg-gray-200 relative p-3 rounded-lg h-24 overflow-clip': 'bg-gray-200 relative p-3 rounded-lg h-max  my-4'}>
        {snippet?.description}
        <span onClick={() => setShowMore(!showMore)} className='bg-gray-200  absolute bottom-0 right-0 z-20 cursor-pointer font-bold p-1 mr-3'>{!showMore? 'Show More': 'Show Less'}</span>
      </div>

    </div>
  )
}

export default WatchMedaData
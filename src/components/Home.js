import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Home = () => {
  return (
    <div className='ml-2'>
      <ButtonList />
      <VideoContainer cardType='block' />
    </div>
  )
}

export default Home
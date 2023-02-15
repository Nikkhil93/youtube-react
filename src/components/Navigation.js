import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HOME from '../logos/home-icon.svg';
import SHORTS from'../logos/youtube-shorts-icon.svg';
import VIDEOS from '../logos/movie-videos-icon.svg';
import LIVE from '../logos/livestream-icon.svg';
import SPORTS from '../logos/start-icon.svg';
import GAMING from '../logos/gaming-pc-icon.svg';
import MOVIES from '../logos/movies-clapperboard-svgrepo-com.svg';
import MUSIC from '../logos/music-note-svgrepo-com.svg';

const Navigation = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const classNames = 'flex h-12 items-center cursor-pointer justify-between hover:bg-gray-300 px-2 rounded-lg';


  return (
    <div className={(isMenuOpen? 'p-5': 'p-2 w-16') + ' shadow-lg'}>
      <ul className={isMenuOpen? 'w-48': 'w-12 ' }>
        <li>
          <Link to="/" className={ classNames }>
            <img className={isMenuOpen?"h-4": 'w-8'} alt="HOME" src={HOME} />
            <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Home</div>
          </Link>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="SHORTS" src={SHORTS} />
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Shorts</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="VIDEOS" src={VIDEOS} /> 
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Videos</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="LIVE" src={LIVE} /> 
           <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Live</div>
        </li>
      </ul>
      <h1 className={"font-bold pt-5 "+(!isMenuOpen?'hidden': null)} >Subscriptions</h1>
      <ul className={isMenuOpen? 'w-48': 'w-12' }>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="MUSIC" src={MUSIC} />  
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Music</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="SPORTS" src={SPORTS} />
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Sports</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="GAMING" src={GAMING} />
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Gaming</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="MOVIES" src={MOVIES} />
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Movies</div>
        </li>
      </ul>
      <h1 className={"font-bold pt-5 "+(!isMenuOpen?'hidden': null)} >Watch Later</h1>
      <ul className={isMenuOpen? 'w-48': 'w-12' }>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="MUSIC" src={MUSIC}/>  
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Music</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="SPORTS" src={SPORTS}/>  
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Sports</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="GAMING" src={GAMING}/>  
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Gaming</div>
        </li>
        <li className={ classNames }>
          <img className={isMenuOpen?"h-4": 'w-8'} alt="MOVIES" src={MOVIES}/>  
          <div className={!isMenuOpen?'hidden': 'w-32 flex  justify-end'}>Movies</div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

import { Link } from "react-router-dom";
import HOME from '../logos/home-icon.svg';
import SHORTS from'../logos/youtube-shorts-icon.svg';
import VIDEOS from '../logos/movie-videos-icon.svg';
import LIVE from '../logos/livestream-icon.svg';
import SPORTS from '../logos/start-icon.svg';
import GAMING from '../logos/gaming-pc-icon.svg';
import MOVIES from '../logos/movies-clapperboard-svgrepo-com.svg';
import MUSIC from '../logos/music-note-svgrepo-com.svg';

const NavigationItems = ({isMenuOpen}) => {
    const classNames = 'flex h-12 items-center cursor-pointer justify-between hover:bg-gray-300 px-2 rounded-lg';
    return (
    <div className={(isMenuOpen? 'px-3 ': 'p-2 w-16') + ' shadow-lg relative'}>
        <div className={(isMenuOpen ? 'w-52': '') +" sticky top-16 hover:overflow-y-auto h-[calc(100vh_-_60px)]"}>
            <ul className={isMenuOpen? 'w-48': 'w-12 ' }>
                <li>
                <Link to="/" className={ classNames }>
                    <img className={isMenuOpen?"h-4": 'w-8'} alt="HOME" src={HOME} />
                    <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Home</div>
                </Link>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="SHORTS" src={SHORTS} />
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Shorts</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="VIDEOS" src={VIDEOS} /> 
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Videos</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="LIVE" src={LIVE} /> 
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Live</div>
                </li>
            </ul>
            <h1 className={"font-bold pt-5 "+(!isMenuOpen?'hidden': null)} >Subscriptions</h1>
            <ul className={isMenuOpen? 'w-48': 'w-12' }>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="MUSIC" src={MUSIC} />  
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Music</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="SPORTS" src={SPORTS} />
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Sports</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="GAMING" src={GAMING} />
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Gaming</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="MOVIES" src={MOVIES} />
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Movies</div>
                </li>
            </ul>
            <h1 className={"font-bold pt-5 "+(!isMenuOpen?'hidden': null)} >Watch Later</h1>
            <ul className={isMenuOpen? 'w-48': 'w-12' }>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="MUSIC" src={MUSIC}/>  
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Music</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="SPORTS" src={SPORTS}/>  
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Sports</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="GAMING" src={GAMING}/>  
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Gaming</div>
                </li>
                <li className={ classNames }>
                <img className={isMenuOpen?"h-4": 'w-8'} alt="MOVIES" src={MOVIES}/>  
                <div className={!isMenuOpen?'hidden': 'w-32 flex'}>Movies</div>
                </li>
            </ul>
            <hr></hr>
            {isMenuOpen && <div className="my-2">
                <div className="text-xs">Contact:</div>
                <div className=" text-[10px]  text-gray-500">
                    <span>Nikhil Kumar</span><br/>
                    <span>Mobile: +91-7972862988</span><br/>
                    <span>Email: nikkhil993@gmail.com</span>
                </div>
                </div>}
        </div>
    </div>
  )
}

export default NavigationItems;
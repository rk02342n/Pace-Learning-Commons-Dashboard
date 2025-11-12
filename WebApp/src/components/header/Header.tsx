import WeatherBanner from '../weather/WeatherBanner';
import { titleProps } from '../../types/props';
// import PaceLogo from '../../images/pace-logo.png';
// import LearningCommonsHeader from '../../images/learning-commons-header.png';
import logo from '../../images/paceLCSingleLine.jpg'
import { Link } from 'react-router-dom';
import useDate from '../../hooks/use-date';

const Header = ({
    location,
    coordinates,
    weather_banner = false,
}: titleProps) => {
    const { currentDate, currentTime } = useDate();

    return (
        <div>
        <div className="flex mb-2">
            {/* <Link to="/nyc"> <img className="h-48 w-64 object-contain" alt="logo" src={PaceLogo}></img></Link> */}
            <Link to="/nyc"> <img className="h-36 w-144 object-contain" alt="logo" src={logo}></img></Link>
            {/* <Link to="/nyc"> <img className="absolute top-16 right-10 h-16 object-contain" alt="Learning-Commons-Header-logo" src={LearningCommonsHeader}></img></Link> */}
            <div className="flex flex-col items-end mb-4 absolute right-10 top-10 object-contain font-extrabold text-lg">
                <h1 className="relative object-contain right font-mono">{currentDate}</h1>
                <h1 className="relative object-contain right font-mono">{currentTime}</h1>
            </div>
        </div>
        
       
            
            <br/>
            {weather_banner &&
                location &&
                WeatherBanner({ location, coordinates })}
        </div>

    );
};

export default Header;

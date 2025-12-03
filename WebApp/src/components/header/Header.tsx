import logo from '../../images/paceLCSingleLine.jpg'
import { Link } from 'react-router-dom';
import useDate from '../../hooks/use-date';
import WeatherWidget from '../weather/WeatherWidget';



interface HeaderProps {
    location: string;
}

const Header: React.FC<HeaderProps> = ({ location }: HeaderProps) => {

// const Header = () => {
    const { currentDate, currentTime } = useDate();

    return (
        <div className="flex flex-row mb-20 justify-between items-center place-content-center">
            <div className="absolute top-10 left-10 flex flex-col max-w-1/4 items-start mb-20 ml-4 object-contain font-extrabold text-lg">
                <h1 className="relative object-contain font-mono">{currentDate}</h1>
                <h1 className="relative object-contain font-mono">{currentTime}</h1>
            </div>
            <div className=''>
                <Link to="/nyc"> <img className="absolute h-36 w-144 top-0 right-1/3 " alt="logo" src={logo}></img></Link>
            </div>
            <div className="absolute top-0 right-0 w-1/4 h-36 bg-white rounded-xl"><WeatherWidget location={location}/></div>
        </div>

    );
};

export default Header;

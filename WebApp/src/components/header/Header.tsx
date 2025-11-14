import logo from '../../images/paceLCSingleLine.jpg'
import { Link } from 'react-router-dom';
import useDate from '../../hooks/use-date';

const Header = () => {
    const { currentDate, currentTime } = useDate();

    return (
        <div>
        <div className="flex mb-2">
            <Link to="/nyc"> <img className="h-36 w-144 object-contain" alt="logo" src={logo}></img></Link>
            <div className="flex flex-col items-end mb-4 absolute right-10 top-10 object-contain font-extrabold text-lg">
                <h1 className="relative object-contain right font-mono">{currentDate}</h1>
                <h1 className="relative object-contain right font-mono">{currentTime}</h1>
            </div>
        </div>
            <br/>
        </div>

    );
};

export default Header;

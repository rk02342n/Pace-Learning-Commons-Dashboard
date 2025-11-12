import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import TradingViewWidget from '../components/stockticker/TradingViewTickerTape';
import { lc_coordinates, lc_locations } from '../consts/consts';

const Home_nyc = () => {
    return (
        <div className="h-screen bg-white p-2">
            <Header
                location={lc_locations.nyc}
                coordinates={lc_coordinates.nyc}
            />
            <Body />
            <br />
            <br />
            <br />
            <TradingViewWidget />
        </div>
    );
};

export default Home_nyc;

import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import TradingViewWidget from '../components/stockticker/TradingViewTickerTape';

const Home_nyc = () => {
    return (
        <div className="h-screen bg-white p-2">
            <Header />
            <Body />
            <br />
            <br />
            <br />
            <TradingViewWidget />
        </div>
    );
};

export default Home_nyc;

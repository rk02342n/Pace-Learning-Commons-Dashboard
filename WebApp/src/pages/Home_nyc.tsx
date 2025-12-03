import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import NYTimesWidget from '../components/NewsWidget';
import TradingViewWidget from '../components/stockticker/TradingViewTickerTape';

const Home_nyc = () => {
    return (
        <div className="h-screen bg-white p-2">
            <Header location={'new york'}/>
            <br/>
            <br/>
            <br/>
            <Body location={'new york'}/>
            <NYTimesWidget/>
            <hr/>
            <TradingViewWidget /> 
        </div>
    );
};

export default Home_nyc;

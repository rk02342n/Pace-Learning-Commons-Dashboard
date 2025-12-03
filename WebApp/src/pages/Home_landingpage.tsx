import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import nyc from '../images/Pace_NYC.jpg';
import plv from '../images/Pace_PLV.jpg';

const Home = () => {
    return (
        <div className="h-screen bg-white p-2 md:px-10">
            <Header location={'new york'}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flex flex-row place-content-center w-full gap-8">
                    <Link to="/nyc" className="flex flex-col justify-center text-center rounded-l-md w-1/2">
                        <div className=" overflow-hidden shadow-lg rounded-l-md">
                            <img className="w-full h-96 object-cover" src={nyc} alt="nyc"/>
                            <div className="px-6 py-4">
                                <div className="font-stretch-condensed font-bold text-3xl mb-2">New York City</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/plv" className="flex flex-col justify-center text-center rounded-l-md w-1/2">
                        <div className=" overflow-hidden shadow-lg rounded-l-md">
                            <img className="w-full h-96 object-cover" src={plv} alt="plv"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2">Pleasantville</div>
                            </div>
                         </div>
                    </Link>
                </div>
        </div>
    );
};

export default Home;


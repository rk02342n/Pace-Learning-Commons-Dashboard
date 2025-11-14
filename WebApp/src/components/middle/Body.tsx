// import YouTubePlayer from './YouTubePlayer';
// import useYoutube from '../../hooks/use-youtube';
import NYTimesWidget from "../NewsWidget";
import WeatherWidget from "../weather/WeatherWidget";

const Body = () => {
    // const { youTubeLink } = useYoutube();

    return (
        <div className="flex flex-row place-content-center h-2/4 w-full gap-4">
            <div className="h-full w-1/3 flex flex-col justify-center text-center rounded-xl"><NYTimesWidget/></div>
            <button className="h-full w-1/3 bg-gradient-to-r from-sky-900 to-blue-900 hover:from-orange-400 hover:to-yellow-600"></button>
            <div className="h-full w-1/3 bg-white rounded-xl"><WeatherWidget /></div>
        </div>
    );
};

export default Body;

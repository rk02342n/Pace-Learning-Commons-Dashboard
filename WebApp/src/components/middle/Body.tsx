import useYoutube from '../../hooks/use-youtube';

import YouTubePlayer from './YouTubePlayer';

interface BodyProps {
    location: string;
}

const Body: React.FC<BodyProps> = () => {
    const { youTubeLink } = useYoutube();

    return (
        <div className="flex flex-row place-content-center h-3/5 w-full gap-4 ">
            <div className="h-full w-1/3 bg-gradient-to-r hover:from-sky-900 hover:to-blue-200 from-orange-400 to-yellow-100 rounded-xl text-center font-bold p-6 font-serif"><h1>Fun Facts</h1></div>
            <div className="h-full w-2/3"><YouTubePlayer videoId={youTubeLink}/></div>
        </div>
    );
};

export default Body;

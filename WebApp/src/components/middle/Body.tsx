// import YouTubePlayer from './YouTubePlayer';
// import useYoutube from '../../hooks/use-youtube';

const Body = () => {
    // const { youTubeLink } = useYoutube();

    return (
        <div className="flex flex-row place-content-center h-2/4 w-full">
            <div className="h-full w-1/3 bg-sky-500 flex flex-col justify-center text-center rounded-l-md">
            </div>
            <div className="h-full w-1/3 bg-sky-900">
                {/* <YouTubePlayer videoId={youTubeLink} /> */}
                
            </div>
            <div className="h-full w-1/3 bg-yellow-400"></div>
        </div>
    );
};

export default Body;

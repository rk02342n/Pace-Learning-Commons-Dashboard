import { YoutubePlayerType } from '../../types/youtubePlayerType';

const YouTubePlayer = ({ videoId }: YoutubePlayerType) => {
 
    return (
        <div className="h-full w-full">
            <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
};

export default YouTubePlayer;

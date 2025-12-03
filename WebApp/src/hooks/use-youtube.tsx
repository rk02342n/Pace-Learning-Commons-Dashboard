import { useEffect, useState } from 'react';

const useYoutube = () => {
    const url = process.env.REACT_APP_YOUTUBE_LINK;
    const youtubeVideos = [ 
        {id: 'EF8C4v7JIbA', title: 'nat geo blue planet'},
        {id: 'IwYx9hKWoGw', title: '3d printer'},
        {id : 'DHUnz4dyb54', title: 'tropical reef'}]

    const [youTubeLink, setYouTubeLink] = useState(youtubeVideos[0].id);

    const changeYouTubeLink = (link: string) => {
        const regex = /(?:v=)([^&]+)/;
        const match = link.match(regex);
        if (match) {
            const videoId = match[1];
            setYouTubeLink(videoId);
        }
    };

    useEffect(() => {
        if (url) {
            changeYouTubeLink(url);
        }
    }, [url]);

    return { youTubeLink };
};

export default useYoutube;

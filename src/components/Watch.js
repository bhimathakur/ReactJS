import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utilities/appSlice";
import { json, useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import { API_KEY, YOUTUBE_VIDEO_BY_ID_API } from "../config";
import YouTube, {YouTubeProps} from "react-youtube";
import ShimmerWatch from "./ShimmerWatch";
import ErrorHandler from "./ErrorHandler";
const Watch = () => {

    const comments = [
        {
            name: 'Bhima Thakur',
            comment: "Hello this is dummy comment",
            replies: [
                {
                    name: 'Bhima Thakur',
                    comment: "Hello this is dummy comment",
                },
                {
                    name: 'Bhima Thakur 2',
                    comment: "Hello this is dummy comment",
                },
                {
                    name: 'Bhima Thakur3 ',
                    comment: "Hello this is dummy comment",
                },
            ],            
        },
        {
            name: 'Bhima Thakur2',
            comment: "Hello this is dummy comment2",
            replies: [
                {
                    name: 'Bhima Thakur2',
                    comment: "Hello this is dummy comment3",
                },
                {
                    name: 'Bhima Thakur 23',
                    comment: "Hello this is dummy comment3",
                },
                {
                    name: 'Bhima Thakur3 ',
                    comment: "Hello this is dummy comment",
                },
            ],
        },
    ];
    const [searchParams] = useSearchParams();
    const [releatedVideos, setReleatedVideos] = useState(['video1', 'video2']);
    const [showRelatedVideos, setShowRelatedVideos] = useState(false);
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      const opts: YouTubeProps['opts'] = {
        height: '315',
        width: '560',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      


    const dispatch = useDispatch();

    async function getVidoeData() {
        try{
        const video = await fetch(YOUTUBE_VIDEO_BY_ID_API+searchParams.get('v')+"&key="+API_KEY);
        const json = await video.json();
        setReleatedVideos(json.itemsw);
        setShowRelatedVideos(true);
        } catch(e) {
            setReleatedVideos([]);

            return (<ErrorHandler />);

        }
    }

    useEffect(() => {
        getVidoeData();
        dispatch(closeMenu());
                
    }, []);
    
if (releatedVideos.length === 0 ) return <ShimmerWatch />;
    return (
        <>
        <div className="block w-[570px] ">
            <div className="w-[570px] ml-10">
            <YouTube opts={opts} videoId={searchParams.get('v')} onReady={onPlayerReady} />
            </div>

            <div className="w-[570px] ml-10 mt-10">
                <span className="font-bold">Comments:</span>
                
               <Comment data={comments} />
            </div>


        </div>

<div className="block ml-10 w-[700px]">

    {releatedVideos.map((video) => {

    return (
    <div className="flex ml-10">
        <div className="flex p-2 0">
        <span className="float-left"><img src={video.snippet?.thumbnails?.medium?.url} alt="video" /></span>
        <div className="pl-10 ">
        <span className="block ">{video?.snippet?.title}</span>
        <span className="block">{video.snippet?.channelTitle}</span>
        <span className="block">Views</span>

        </div>
        
        </div>
        
    </div>
    )
    })}
    

    
</div>
</>
    );
}

export default Watch;
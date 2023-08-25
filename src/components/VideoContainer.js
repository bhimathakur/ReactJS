import { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_VIDEO_BY_CATEGORY_ID, YOUTUBE_VIDEO_BY_CATEGORY_ID_API } from "../config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import appSlice from "../utilities/appSlice";
const VideoContainer = () => {
    const [video, setVideo] = useState(([]));
    var url = YOUTUBE_API;
    const category = useSelector((state) => state.app.showAll);
      if (category !== 'All') {
            var url =  YOUTUBE_VIDEO_BY_CATEGORY_ID_API+category;
        }
    useEffect(() => {
        getVideos(url);
    }
    ,[category]
    );

    async function getVideos (url){
        const response = await fetch(url);
        const json = await response.json();
        setVideo(json.items);
        }
     if(video.length === 0) return <Shimmer />;
    
    return (
        <div className="block" data-testid="video-list">
            {video.map((video) => {
            return (<div key={video.id} className="p-5 m-2 border border-red-100 w-72 inline-block" >
                
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            
            <span className="flex-wrap">Title: <Link to={"/watch?v="+video.id}>{video.snippet.title}</Link ></span>
            <span>View: {video?.statistics?.viewCount}</span>
            <span>Like: {video?.statistics?.likeCount}</span>

            </div>
            
            );

            })}
        </div>

    )
}

export default VideoContainer;
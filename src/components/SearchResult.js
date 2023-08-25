import {Link, useSearchParams } from "react-router-dom";
import { API_KEY } from "../config";
import { useEffect, useState } from "react";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const param = searchParams.get('q');
    const [result, setResult] = useState([]);
    useEffect(() => {
        Result();
    }, [])

async function Result() {
    const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+param+"&key="+API_KEY);
    const json = await data.json();
    setResult(json.items);
}
if(result.length === 0) return null;
return (
    <div className="flex ">
        <div>
            {result.map((data) => {

             return (<div className="block">   
            <span className="inline-flex ml-10">
                <Link to={"/watch?v="+data.id.videoId}>
                <img src={data.snippet.thumbnails.medium.url} alt="video" width="320" height="180" />
                </Link>
                </span>
            <div className="inline-block absolute">
            <span className="block ml-5 pt-1">{data.snippet.title}</span>
            <span className="block ml-5 pt-1">{data.snippet.channelTitle}</span>
            <span className="block ml-5 pt-1">{data.snippet.description}</span>
            </div>
            </div>)
        })}
        </div>

    </div>
);
}

export default SearchResult;
import { useEffect, useState } from "react";
import { YOUTUBE_CATEGORY_LIST } from "../config";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import appSlice, { videoType } from "../utilities/appSlice";
import Carausal from "./Carausal";

const Buttons = () => {

const [category, setCategory] = useState([]);
const dispatch = useDispatch(); 
const button = useSelector((state) => state.app.showAll);
async function categories () {
    const data = await fetch(YOUTUBE_CATEGORY_LIST);
    const json  = await data.json();
    setCategory(json.items);
   }

const updateVideo = (id) => {
    dispatch(videoType(id));
    return (                        
    <VideoContainer />)
}
useEffect(() => {
    categories();
}, []);
if(category.slice(0,5).length === 0 ) return null;
    return (
        
        <div >
            <button value="All" key="all" onClick={(e) => {
                    updateVideo(e.target.value);
            }} className={`bg-gray-300 p-2  m-2 rounded-lg ${button == 'All' && "active bg-gray-500"} `} name="button">All</button>
            {category.map((cat, index) => {
                return <button value={cat.id} key={cat.id} onClick={(e) => {
                    updateVideo(e.target.value);
            }} className={`bg-gray-300 p-2  m-2 rounded-lg ${button == cat.id && "active bg-gray-500"} `} name="button">{cat.snippet.title}</button>
            }) }
        </div>
    );
}

export default Buttons;
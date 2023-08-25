import Buttons from "./Buttons";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return (

        <div className="pl-20 block">
            <div className="flex">
            <Buttons />
            </div>
            <div>
            <VideoContainer />
            </div>
        </div>

    );
}

export default MainContainer;
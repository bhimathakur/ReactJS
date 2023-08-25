import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    //subscribe store single slice and slice is a portion of the store.
 
    const isOpen = useSelector((state) => state.app.isMenuOpen);
    if(isOpen) return null;
    return (
        <div className="pl-6">
            <Link to="/">
            <h5 className="font-bold">Home</h5></Link>
            <ul >
                
            <li>Shorts</li>
            <li>Subscriptions</li>
            </ul>
            <h5 className="font-bold">Watch Later</h5>

            <ul>
            <li>Your Video</li>
            <li>History</li>

            <li>Saved Videos</li>
            </ul>
        </div>
    );
}

export default Sidebar;
import "./Navbar.css"
import {Location} from "../index.js"
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Navbar(){

    const options = ["Live shows", "Streams", "Movies", "Plays", "Events", "sports", "Activites"];

    return(
        <div className="nav-container">
            {/* first Div */}
            <div className="logo-container">
                <h1 className="logo-name">BookUsNow</h1>
                <Location location={"Mumbai, India"} className="location-icon" nextBtn={true}/>
            </div>
            {/* Second Div */}


            <div className="btw-container">
                <div className="search-btn-container">
                    <div className="categories-btn">
                        <IoMenu />
                        Categories
                    </div>
                    <div className="input-container">
                        <input 
                            type="text"
                            placeholder="DJI phantom" 
                        />
                        <IoSearch className="search-icon"/>
                    </div>
                </div>
                <div className="options">
                    {options.map((option, index) => (
                        <div key={index}>{option}</div>
                    ))}
                </div>
                
            </div>

            {/* Third Div */}
            <div className="logo--btns">
                <IoSearch className="mobile-search-btn"/>
                <div className="fav-btn">
                    <FaHeart className="heart-icon" />
                    <p className="fav-text">Favorites</p>
                </div>
                <div className="sign-btn">
                    Sign In
                </div>
               
                <FaUser className="user-icon" />
                

            </div>
        </div>
    )
}
export default Navbar;
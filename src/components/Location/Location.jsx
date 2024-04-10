import { IoLocationSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import "./Location.css";


function Location({
    location, 
    style,
    nextBtn=false,
}){
    return(
        <div className="location-container" style={style}>
            <IoLocationSharp className="location-icon"/>
            {location}
            {nextBtn && <MdNavigateNext className="next-icon"/>}
        </div>
    )
}

export default Location;
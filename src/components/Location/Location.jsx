import { IoLocationSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import "./Location.css";


function Location({
    location, 
    style,
    size="",
    nextBtn=false,
}){
    return(
        <div className="location-container" style={{fontSize:size}}>
            <IoLocationSharp className="location-icon" style={style}/>
            {location}
            {nextBtn && <MdNavigateNext className="next-icon"/>}
        </div>
    )
}

export default Location;
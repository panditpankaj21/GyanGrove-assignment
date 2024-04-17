import { IoLocationSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";


function Location({
    location, 
    className="",
    size="",
    nextBtn=false,
}){
    return(
        <div className="text-xs flex items-center" style={{fontSize:size}}>
            <IoLocationSharp 
                className={`text-[#B0BABF]  ${className}`} 
            />
            {location}
            {
                nextBtn 
                    && 
                <MdNavigateNext className="text-gray-400 mr-1"/>
            }
        </div>
    )
}

export default Location;
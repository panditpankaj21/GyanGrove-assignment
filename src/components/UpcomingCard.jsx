import {Location} from "./index.js"
import { formateDate } from "../calc/formateDate.js";

function UpcomingCard({item}){
    const {eventName, cityName, imgUrl, date, weather, distanceKm} = item;
    const imageId = imgUrl.split('/')[5]
    return(
        <div className="border-[#B0BABF] border-[1px] w-80 rounded-lg overflow-hidden ">
            <div className="relative">
                <img 
                    src={`https://drive.google.com/thumbnail?id=${imageId}`} alt="image" 
                    className="w-full"
                />
                <p className="absolute bottom-[15px]  w-[289px] bg-black text-white bg-opacity-70 rounded-b-lg pl-3 text-xs py-1 left-[15px]">{formateDate(date)}</p>
            </div>
            <div className="ml-3 "> 
                <h4 className="font-extrabold text-sm pb-1">{eventName}</h4>
                <div className="flex justify-between pr-3 text-[#B0BABF] pb-3">
                    <Location location={cityName}/>
                    <p className="text-xs">{weather} | {Math.round(distanceKm).toLocaleString()} Km</p>
                </div>
            </div>
            
        </div>
    )
}
export default UpcomingCard;
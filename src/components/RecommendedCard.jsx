import {Location} from "./index.js"
import { formateDate } from "../calc/formateDate.js";

function RecommendedCard({item}){
 const {eventName, cityName, imgUrl, date, weather, distanceKm} = item;
 const imageId = imgUrl.split('/')[5]

 return (
    <div className="w-52 h-72 rounded-lg overflow-hidden relative ml-5 mt-5">
        <img 
          src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`} alt="Image Description"
          className="scale-150 w-full h-full" 
        />
        <div className="absolute text-white bottom-0 bg-black bg-opacity-5 text-[.52rem] p-2 w-full">
          <div className="flex items-center justify-between">
            <span className="text-sm">{eventName}</span>
            <p className="text-gray-300 text-[.5rem]">{formateDate(date)}</p>
          </div>
          <div className="flex items-center justify-between text-gray-300">
            <Location  
              location={cityName} 
              className="m-1"
              size={".5rem"}
            />
            <p className="text-[.45rem]">{weather} | {Math.round(distanceKm).toLocaleString()} Km</p>
          </div>  
        </div>
    </div>
  )
}
export default RecommendedCard
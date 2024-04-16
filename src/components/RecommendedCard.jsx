import {Location} from "./index.js"

function RecommendedCard(props) {
  return (
    <div className="w-52 h-72 rounded-lg overflow-hidden relative ml-5 mt-5">
        <img 
          src="https://drive.google.com/thumbnail?id=1p5wheVC-3wlz7EWw9d_vB14fKzwoQAhX&sz=w1000" alt="Image Description"
          className="scale-150 w-full h-full" 
        />
        <div className="absolute text-white bottom-0 bg-black bg-opacity-5 text-[.52rem] p-2 w-full">
          <div className="flex items-center justify-between">
            <span className="text-[1rem]">Make Agree</span>
            <p className="text-gray-300">March 23, 2024</p>
          </div>
          <div className="flex items-center justify-between text-gray-300">
            <Location  
              location={"West Dougals"} 
              className="m-1"
              size={".6rem"}/>
            <p>Snowy, 26*C | 42 Km</p>
          </div>  
        </div>
  </div>
  )
}
export default RecommendedCard
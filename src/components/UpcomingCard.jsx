import {Location} from "./index.js"

function UpcomingCard(){
    return(
        <div className="border-[#B0BABF] border-[1px] w-80 rounded-lg overflow-hidden ">
            <div className="relative">
                <img 
                    src="https://drive.google.com/thumbnail?id=1p3UpSZMEVhQRKyqlxbvl4X-rNCWXmqF_" alt="image" 
                    className="w-full"
                />
                <p className="absolute bottom-[15px] ml-[12px] w-[293px] bg-black text-white bg-opacity-70 rounded-b-lg pl-3 text-xs py-1">March 23, 2024</p>
            </div>
            <div className="ml-3 "> 
                <h4 className="font-extrabold text-sm pb-1">After note nearly</h4>
                <div className="flex justify-between pr-3 text-[#B0BABF] pb-3">
                    <Location location={"West Dougles"}/>
                    <p className="text-xs">Snowy, 26*C | 42 Km</p>
                </div>
            </div>
            
        </div>
    )
}
export default UpcomingCard;
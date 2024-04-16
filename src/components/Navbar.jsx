import {Location, OptionList} from "./index.js"
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Navbar(){

    return(
        <>
        <div className="flex justify-around items-start py-5 bg-white relative">
            
            {/* first Div */}
            <div className="logo-container">
                <h1 
                    className="text-[#CF2D2D] text-xl font-bold md:mb-4"
                >
                    BookUsNow
                </h1>
                <Location 
                    location={"Mumbai, India"} className="text-[#B0BABF]" 
                    nextBtn={true}
                />
            </div>

            {/* Second Div */}
            <div>
                <div className="hidden sm:flex items-center mb-4">
                    <div className="text-white bg-black flex items-center gap-1 p-2 rounded-md mr-2 text-sm">
                        <IoMenu />
                        Categories
                    </div>
                    <div className="relative w-full">
                        <input 
                            type="text"
                            placeholder="DJI phantom" 
                            className="p-2 border-[#B0BAB] border-[1px] w-full rounded-md"
                        />
                        <IoSearch className="absolute right-4 top-3 text-[#B0BABF] cursor-pointer"/>
                    </div>
                </div>
                    
                <div className="hidden md:block">
                    <OptionList />
                </div>
            </div>
                

            {/* Third Div */}
            <div className="flex gap-2 items-center text-sm">
                <IoSearch className="text-[#B0BABF] text-lg sm:hidden"/>
                <div className="flex gap-2 cursor-pointer">
                    <FaHeart className="text-[#B0BABF]" />
                    <p className="fav-text hidden sm:block">Favorites</p>
                </div>
                <div className="border-[#B0BABF] border-[1px] rounded-md p-2 cursor-pointer hidden sm:block">
                    Sign In
                </div>
                <FaUser className="text-[#B0BABF] text-lg sm:hidden" />
            </div>

        </div>
        <div className="md:hidden">
            <OptionList/>
        </div>
        </>

    )
}
export default Navbar;
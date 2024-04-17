import { UpcomingCard } from "../components/index.js";
import { GrFormNextLink } from "react-icons/gr";

function UpComingShow(){
    const content = [<UpcomingCard/>, <UpcomingCard/>, <UpcomingCard/>, <UpcomingCard/>, <UpcomingCard/>, <UpcomingCard/>, <UpcomingCard/>,<UpcomingCard/>, <UpcomingCard/>]
    return(
        <div className="sm:mx-14 mt-5 sm:mr-40">
            <div className="flex justify-around sm:justify-between">
                <div className="flex items-center mb-1">
                    <p>Upcoming events</p>
                    <GrFormNextLink className="text-xl ml-1" />
                </div>
                <p className="underline">see all</p>
            </div>
            <div className="sm:grid flex flex-col gap-10 items-center sm:grid-cols-3 sm:gap-y-7">
                {
                    content.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default UpComingShow;
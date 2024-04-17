import { useEffect, useState } from "react";
import {RecommendedCard} from "../../components/index.js"
import { GrFormNextLink } from "react-icons/gr";

function RecommendedShows(){
    const [content, setContent] = useState([])

    useEffect(() => {
        async function fetchEvents(){
            try{
                const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
                if(!response.ok){
                    throw new Error('Network response was not ok ' + response.statusText)
                }
                const data = await response.json();
                setContent(data.events);
            }
            catch(error){
                console.log('There was a problem with your fetch operation:', error);
            }
        }
        fetchEvents();
    }, []);

    if(!content){
        return <p>Loading...</p>
    }

    return(
        <>
            <div className=" flex flex-col mt-[-60%] sm:mt-[-10%] h-auto  ml-10">
                <div className=" text-white mx-5 flex justify-between cursor-pointer">
                    <div className="flex items-center">
                        <p>Recommended shows</p>
                        <GrFormNextLink className="text-xl ml-1" />
                    </div>
                    <div className=" underline cursor-pointer">
                        <p>see all</p>
                    </div>
                </div>
                <div className="flex overflow-x-scroll scrollbar-hide ">
                    { 
                        content.map((item, index) => (
                            <div key={index}>
                                <RecommendedCard
                                    key={index}
                                    item = {item}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default RecommendedShows;
import {RecommendedCard} from "../../components/index"

function RecommendedShows(){
    const content = [<RecommendedCard/>, <RecommendedCard/>, <RecommendedCard/>, <RecommendedCard/>, <RecommendedCard/>, <RecommendedCard/>]
    return(
        <div className="h-auto overflow-x-auto flex absolute p-3 w-full ml-14">
            { 
                content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))
            }
        </div>
    )
}
export default RecommendedShows;
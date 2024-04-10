import "./RecommendedCard.css"
import {Location} from "../index.js"

function RecommendedCard(props) {
  return (
    <div className = "card">
        <img src="https://drive.google.com/thumbnail?id=1lS1XAo47YvNSoFp1NE5rmhTSQ8qNBWEh" alt="Image Description"/>
        <div className="card-content">
            <h2>
                Card Heading
            </h2>
            <Location className="location" locatioin={"Madhya Pradesh, India"}/>
            
        </div>
  </div>
  )
}
export default RecommendedCard
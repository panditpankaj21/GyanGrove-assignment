import "./RecommendedCard.css"
import {Location} from "../index.js"

function RecommendedCard(props) {
  return (
    <div className = "card">
        <img src="https://drive.google.com/thumbnail?id=1DJDmufd4dZw--32HpuAxNSfPJqqHa6Pq" alt="Image Description"/>
        <div className="card-content">
          <div className="card-item">
            <span>Make Agree</span>
            <p className="card-date">March 23, 2024</p>
          </div>
          <div className="card-item second-item">
            <Location  location={"West Dougals"} style={{marginRight: ".3rem"}} size={".6rem"}/>
            <p>Snowy, 26*C | 42 Km</p>
          </div>  
        </div>
  </div>
  )
}
export default RecommendedCard
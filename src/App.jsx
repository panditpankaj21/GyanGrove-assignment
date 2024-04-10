import bannerImage from './assets/Banner.svg'
import './App.css'
import { Navbar, RecommendedCard } from './components'

function App() {
  return (
    <div className='main--container'>
      {/* <div>
        <Navbar />
      </div>
      <div className='banner-img-container'>
        <img src={bannerImage} alt="banner" />
      </div> */}
      <div>
        <RecommendedCard />
      </div>
    </div>
  )
}

export default App

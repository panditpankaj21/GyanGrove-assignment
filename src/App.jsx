import bannerImage from './assets/Banner.svg'
import { Navbar} from './components/index.js'
import RecommendedShows from './pages/RecommendedShows/RecommendedShows.jsx'
import UpcomingShow from "./pages/UpComingShow.jsx"
import './App.css'

function App() {
  return (
    <div className='w-full h-full relative'>
      <Navbar />
      <div className='w-full h-full relative overflow-hidden'>
        <img 
          src={bannerImage} 
          alt="banner" 
          className='h-[700px] object-cover sm:h-full sm:object-none border-red-900 border-3'
        />
        <div className='absolute top-0 left-0 w-full bg-black/10 flex flex-col items-center justify-start   h-auto sm:pt-40 pt-10 text-center text-gray-50'>
          <h1 className='sm:text-4xl text-3xl font-bold leading-loose line line-clamp-3 sm:lineclamp-2 sm:px-60 sm:leading-relaxed'>Discover Exciting Events Happening Near You-Stay Tunned for Updates! </h1>
          <p className='w-[60%] pt-4 line-clamp-3 sm:line-clamp-none leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint quia illo nemo soluta molestias possimus exercitationem, corrupti labore maxime itaque, omnis animi, laudantium et doloribus? Maiores officiis nihil alias.</p>
        </div>
        <RecommendedShows />
      </div>

      <UpcomingShow/>
    </div>
  )
}

export default App

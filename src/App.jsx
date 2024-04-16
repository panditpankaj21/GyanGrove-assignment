import bannerImage from './assets/Banner.svg'
import { Navbar } from './components/index.js'
import RecommendedShows from './pages/RecommendedShows/RecommendedShows.jsx'

function App() {
  return (
    <div className='w-full h-full relative border-red-700 border-2 '>
      <Navbar />
      <div className='w-full relative overflow-hidden'>
        <img 
          src={bannerImage} 
          alt="banner" 
          className='w-full h-auto'
        />
        <div className='absolute top-0 left-0 w-full bg-black/10 flex flex-col items-center justify-start   h-auto pt-40 text-gray-50
]'>
          <h1 className='text-5xl font-bold'>Discover Exciting Events Happening <br /> Near You-Stay Tunned for Updates! </h1>
          <p className='w-[60%] text-center pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint quia illo nemo soluta molestias possimus exercitationem, corrupti labore maxime itaque, omnis animi, laudantium et doloribus? Maiores officiis nihil alias.</p>
        </div>
      </div>
        <RecommendedShows />
    </div>
  )
}

export default App

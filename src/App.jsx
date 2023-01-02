import './App.css'
import {Navbar,Contact, Header, Project, Work} from './index';
import skills from './assets/Skills.png'
import mask from './assets/mask.png'
import Portfolio from './assets/Portfolio.png'

function App() {
  return (
    <div className='bg-backgroundColor overflow-hidden scroll-smooth ' id="App" >
      <Navbar/>
      <Header/>
      <Work/>
      <img src={skills} className="m-auto w-[80%]"/>
      <div id="Work">
      <Project styles=" w-[70%] m-auto text-white flex lg:flex-row  flex-col  mb-10 mt-20 flex-1 justify-between items-center" src={mask}/> 
      <Project styles=" w-[70%] h-auto m-auto text-white flex lg:flex-row-reverse flex-col flex-1 justify-between items-center" src={Portfolio}/>
      </div>
      <Contact/>

    </div>
  )
}

export default App

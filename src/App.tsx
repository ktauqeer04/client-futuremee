import './App.css'
import Appbar from './components/Appbar'
import ParentInput from './components/ParentInput'

function App() {

  return (
    <div>    

      <div>
        <Appbar />
      </div>

      <div className='bg-red-400'>
          animation
      </div>

      <ParentInput />

      <div className='bg-gray-500'>
        new div
      </div>
            
    </div>
  )
}

export default App

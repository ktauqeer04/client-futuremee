import './App.css'
import Appbar from './components/Appbar'
import Inputs from './components/Inputs'
import ContentInput from './components/TextEditor'

function App() {

  return (
    <div>    

      <div>
        <Appbar />
      </div>

      <div className='bg-red-400'>
          animation
      </div>

      <div className='flex w-full'>

        <div className='w-1/2'>
            <ContentInput />
        </div>

        <div className='w-1/2'>
          <Inputs />
        </div>

      </div>

      <div className='bg-gray-500'>
        new div
      </div>
            
    </div>
  )
}

export default App

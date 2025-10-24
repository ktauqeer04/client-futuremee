import './App.css'
import Appbar from './components/Appbar'
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
          emails and shit
        </div>

      </div>
            
    </div>
  )
}

export default App

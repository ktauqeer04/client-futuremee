import './App.css';
import Appbar from './components/Appbar';
import TextEditor from './components/TextEditor';
import Animation from './components/Animation';



function App() {

  return (
    <div>    

      <div>
        <Appbar />
      </div>

      <div className='bg-red-500'>
        <Animation />
      </div>

      <div>
        <div className='flex justify-center bg-blue-500 h-screen'>  
          <TextEditor />
        </div>
      </div>

            
    </div>
  )
}

export default App

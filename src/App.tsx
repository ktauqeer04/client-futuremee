import './App.css'
import Appbar from './components/Appbar'
import ParentInput from './components/ParentInput'
import SplitText from './components/SplitText';

function App() {

  const handleAnimationComplete = () => {
      console.log('All letters have animated!');
  };


  return (
    <div>    

      <div>
        <Appbar />
      </div>

      <div>
            <SplitText
                text="Hello, GSAP!"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />

      </div>

      <ParentInput />

      <div className='bg-gray-500'>
        new div
      </div>
            
    </div>
  )
}

export default App

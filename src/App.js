import './App.css';
import Signup from './Components/Signup';
import frame from './images/frame.png';
import framee from "./images/framee.png"
function App() {
  return (
    <div className="App">
      <div className='imagestack'>
        <img src={frame} alt="image1" className='frame' />
        <img src={framee} alt="image2" className='framee' /> 
      </div>
        <Signup/>
    </div>
    )
  }
export default App;

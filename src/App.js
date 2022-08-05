import './App.css';
import LeftForm from './LeftForm';
import RightImage from './RightImage';
import { useState } from 'react';


export default function App() {
  const[currentState, setCurrentState] = useState(0)
  const formInformation = [
    {title:'Apply to work with our agency'},
    {title:'What\'s your budget?'},
    {title:'Anything else we should know?'},
    {title:'Thank you!'}
    ]
  console.log(currentState)
  return (
    <div className="App">
      <LeftForm 
        heading={formInformation[currentState].title}
        next={() => {currentState != 3 && setCurrentState(currentState + 1)}}
        state={currentState}
      />
      <RightImage imageNumber={currentState + 1}/>
      
    </div>
  );
}
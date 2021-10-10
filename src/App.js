import { useEffect, useState } from 'react';
import './App.css';
import ShadeInput from './components/ShadeInput';
import Shades from './components/Shades';
import randomColor from 'randomcolor'

function App() {
  const [color,setColor] = useState('#6e33d1');
  useEffect(()=>{
    setColor(randomColor())
  },[])

  const onInputChange =(val)=>{
    setColor(val)
  }

  return (
    <div className="App">
      <ShadeInput color={color} onInputChange={onInputChange} />
      <Shades color={color}/>
    </div>
  );
}

export default App;

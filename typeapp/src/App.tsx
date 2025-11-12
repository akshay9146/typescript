
import { useState } from 'react';
import './App.css';
import Greeting from './coding/Greeting';

function App() {
  const [num,setNum]=useState<number>(0);
  const onCLick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e.currentTarget)
    setNum((prev)=>prev+1)
  }
  return (
    <div className="App">
      <header className="App-header">
       
       <Greeting name="akshay" num={num} onClick={onCLick}> Metange</Greeting>
      </header>
    </div>
  );
}

export default App;

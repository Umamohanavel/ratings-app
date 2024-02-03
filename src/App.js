import { FaRegHeart } from "react-icons/fa";
import './App.css';
import { useState } from "react";

function App() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);

  const handleS1 = () => {
    if(s1){
      setS1(false);
      setS2(false);
      setS3(false);
      setS4(false);
      setS5(false);

    }
    else {
      setS1(true);
    } 
   }
  const handleS2 = () => {
    if(s2){
      setS2(false);
      setS3(false);
      setS4(false);
      setS5(false);
    }
    else {
      setS1(true);setS2(true)
    } 
   }
  const handleS3 = () => {  
    if(s3){
      setS3(false);
      setS4(false);
      setS5(false);
    }
    else {
      setS1(true);setS2(true);setS3(true);
    }
  }
  const handleS4 = () => {  
    if(s4){
      setS4(false);
      setS5(false);
    }
    else {
      setS1(true);setS2(true);setS3(true);setS4(true);
    } 
   }
  const handleS5 = () => { 
    if(s5){
      setS5(false);
    }
    else {
      setS1(true);setS2(true);setS3(true);setS4(true);setS5(true);
    }
  }

  return (
    
    <div className="App">
      <h1>Give Ratings </h1>
      <div className="ratings">
        <div><FaRegHeart className={s1 && "bg"} onClick={handleS1} /></div>
        <div><FaRegHeart className={s2 && "bg"} onClick={handleS2} /></div>
        <div><FaRegHeart className={s3 && "bg"} onClick={handleS3} /></div>
        <div><FaRegHeart className={s4 && "bg"} onClick={handleS4} /></div>
        <div><FaRegHeart className={s5 && "bg"} onClick={handleS5} /></div>
        <br />
        {s5 ? "5" : s4 ? "4" : s3 ? "3" : s2 ? "2" : s1 ? "1" : ""}/5
      </div>
    </div>
  );
}

export default App;


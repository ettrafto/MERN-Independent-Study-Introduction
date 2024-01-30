import { useState, useEffect } from "react";
import { React } from "react";


import Header from "./header";

const App = () => {
    
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
        setCounter(counter+1);
        },1000);

        {/*Dependency Array*/}
        return () => {
            clearInterval(intervalId);
        };
    });

    return  <div>

      {/* using another component within a component */}
      <Header message="React Intro Website"/>
        <button
            onClick = {()=> {

            setCounter(counter+1);

        }}
            >
            {counter}
            </button>
  
      </div>;
    //return React.createElement("Div",null,"Hello React");
  };

  export default App
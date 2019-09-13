import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import Example from './components/Example'

const App = () => {
const [data, setData] = useState([]);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect((props) => {
    axios
    .get(`https://swapi.co/api/people`)
    .then(item => {
      console.log(item.data.results)
      const data = item.data.results
      setData(data)
    })

  },[])
// console.log('THIS DATA', data)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     {
       data.map((data) => {
         return(
         <Example
         key = {data.data}
         name = {data.name}
         height= {data.height}
         gender = {data.gender}
         created={data.created}
         eyeColor={data.eye_color}

         
         />
       )})
       
     }
    </div>
  );
}

export default App;

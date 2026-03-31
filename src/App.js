import logo from './logo.svg';
import './App.css';
import { ThemeProvider , createTheme } from "@mui/material/styles";
import SimpleContainer from './Components/Container';

import { useEffect, useState } from 'react';
import axios from "axios"

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})





function App() {
  const [temp, setTemp] = useState(null)

  useEffect(()=>{
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?lat=30.0445&lon=31.2388&appid=0709665bc0a413c44283438e449979cc")
      .then((response) => {
        const responseTemp = Math.round(response.data.main.temp - 272.15)
        setTemp(responseTemp)
        console.log(responseTemp)
      })
      .catch((error) => {console.error(error)})
  }, [])

  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <SimpleContainer temp = {temp} />
      </div>
    </ThemeProvider>
  );
}

export default App;

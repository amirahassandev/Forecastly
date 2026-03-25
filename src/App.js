import logo from './logo.svg';
import './App.css';
import { ThemeProvider , createTheme } from "@mui/material/styles";
import SimpleContainer from './Components/Container';

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <div className="App" style={{backgroundColor: '#250707'}}>
        <SimpleContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;

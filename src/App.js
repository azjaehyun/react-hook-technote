import './App.css';
import ExamUseState from './component/ExamUseState';
import ExamUseEffect from './component/ExamUseEffect';
import ExamUseContext from './component/ExamUseContext';
import React ,{createContext} from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
  border:{
    border: "1px"
  }
};

export const AppContext = createContext(themes);
function App() {
  return (
    <div className="App">
       <AppContext.Provider  value={themes} >
        <ExamUseState  />
        <ExamUseEffect />
        <ExamUseContext />
        </AppContext.Provider>
    </div>
  );
}

export default App;

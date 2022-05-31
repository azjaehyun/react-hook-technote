
import React , {useContext, useState} from 'react';
import {AppContext} from '../App.js';
const ThemedButton = () => {
    const  theme  = useContext(AppContext); 
    const [themeCopy,setThemeCopy] = useState({...theme});
    const changeTheme = (e) => {
       if(e.target.style.color==='rgb(255, 255, 255)'){
        setThemeCopy(theme.light);
       }else{
        setThemeCopy(theme.dark);
       }
    }
    return (
      <div><p>ExamUseContext</p>
        <button style={{ background: themeCopy.background, color: themeCopy.foreground }} onClick={(e)=>changeTheme(e)} >
          UseContext Button
        </button>
      </div>
    );
  }
  export default ThemedButton;
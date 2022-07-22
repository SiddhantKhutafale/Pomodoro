
import {BrowserRouter as Switch, Router,Routes, Route} from "react-router-dom";
import './App.css';
import CountdownAnimation from './Components/CountdownAnimation';
import Navbar from "./Components/Navbar";
import SetPomodoro from "./Components/SetPomodoro";
import React, { useEffect, useContext } from 'react';
import { SettingContext } from './context/SettingsContext'
import { Button } from './Components/Button';


function App() {
  const { pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingContext)

  useEffect(()=> {updateExecute(executing)},[executing,startAnimate])
  return (
    <>
      <Navbar />

      <div className="container1">
        <h1>Pomodoro</h1>
        <small>Be productive the right way.</small>
        {pomodoro !== 0 ?
          
          <>
            <ul className='labels'>
              <li>
                <Button
                  title="Work"
                  activeClass={executing.active === 'work' && 'active-label'}
                  _callback={() => setCurrentTimer('work')}
                />
              </li>
              <li>
                <Button
                  title="Short Break"
                  activeClass={executing.active === 'short' && 'active-label'}
                  _callback={() => setCurrentTimer('short')}
                />
              </li>
              <li>
                <Button
                  title="Long Break"
                  activeClass={executing.active === 'long' && 'active-label'}
                  _callback={() => setCurrentTimer('long')}
                />
              </li>

            </ul>
            <Button title='Settings' _callback={SettingBtn} />
            <div className="time-container">
              <div className="time-wrapper">
                <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}

                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Button title="Start" className={!startAnimate ? 'active' : undefined} _callback={startTimer}/>
              <Button title="Pause" className={startAnimate ? 'active' : undefined} _callback={pauseTimer}/>
              
            </div>
          </>: <SetPomodoro/>
        }


      </div>
      
    </>




  );
}

export default App;

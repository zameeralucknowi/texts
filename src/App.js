
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { Routes, Route } from 'react-router-dom'





function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }

  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} about="About us" />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">

        {/* <Routes>
          <Route  exact path='/' element={} />
          <Route exact path='/about' element={<About />} />
        </Routes> */}

        <Textform showAlert={showAlert} heading="write text to analyze below" mode={mode} />

        {/* <About/> */}

      </div>


    </>
  );
}


export default App;

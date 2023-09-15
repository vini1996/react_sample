import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import News from './components/News';
import Users from './components/Users';
import TextForm from './components/TextForm';
import NoteState from './context/NoteState';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses =() => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    //console.log('remove', cls)
  }
  const togglemode = (cls) => {
    removeBodyClasses()
    document.body.classList.add(`bg-${cls}`)
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      
      showAlert("Dark Mode has been enabled", "success")
      document.title = "Text Utils - Dark Mode"
      console.log('add', cls)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = "Text Utils - Light Mode"
    }
  }
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar title="Text Utils new" about="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm title="Enter the text to display" mode={mode} showAlert={showAlert} />} />
        <Route path="/about/*" element={<About />} />
        <Route exact path="/news">
          <Route index element={<News key="general" pageSize={5} country="us" category="general" />} />
          <Route path="business" element={<News key="business" pageSize={10} country="us" category="business" />} />
          <Route path="entertainment" element={<News key="entertainment" pageSize={10} country="us" category="entertainment" />} />
          <Route path="health" element={<News key="health" pageSize={10} country="us" category="health" />} />
          <Route path="science" element={<News key="science" pageSize={10} country="us" category="science" />} />
          <Route path="sports" element={<News key="sports" pageSize={10} country="us" category="sports" />} />
          <Route path="technology" element={<News key="technology" pageSize={10} country="us" category="technology" />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </NoteState>
    
  
</>
   
  );
}

export default App;

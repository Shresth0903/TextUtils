import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App(){
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = ()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "success")
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return(
    <>
 
<Navbar title="Textutils" aboutText="About" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
{<Textform showAlert={showAlert} heading="Enter the text to be analyzed"/>}
</div>
    </>
  )
}

export default App;

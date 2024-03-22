import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './components/Menu';
import OpenFaults from './components/OpenFaults';
import ClosedFaultd from './components/ClosedFaultd';
import OpenHelp from './components/OpenHelp';
import Deferredfaults from './components/Deferredfaults';
import { useState,useEffect } from 'react';
import OpenHelpPage from './components/OpenHelpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Commend from './components/Commend';
import './components/style.css'


function App() {
const[faultd,setFaultd] = useState([])
const [selectedNameIndex, setSelectedNameIndex] = useState(null);
const[closeFaultd,setcloseFaultd] = useState([])
const [deferredfaults,setdeferredfaults]=useState([])
const [inTreatment,setinTreatment] = useState([])
const [color,setColor] = useState('black')
const[openFaultd,setOpenFultd] =useState([])






const addFunction = (index, newStatus, names, deferDate) => {
  const faultToMove = faultd[index];

  // Update the name and status of the fault being moved
  const updatedFault = { ...faultToMove, names, status: newStatus };
  const updatedFaults = [...faultd];
  updatedFaults[index] = updatedFault;

  if (newStatus === 'סגורה') {
    const currentClosedFaults = [...closeFaultd];
    currentClosedFaults.push(updatedFault);
    setFaultd(updatedFaults.filter((_, i) => i !== index));
    setcloseFaultd(currentClosedFaults);
  }
  else if (newStatus === 'בטיפול') {
    // Update fault to be in treatment
    updatedFaults[index] = { ...updatedFaults[index], names: names, status: 'בטיפול' };

    // Update state
    setFaultd(updatedFaults);
  } 
else if (newStatus === 'פתוחה'){
    // Update fault to be in treatment
    updatedFaults[index] = { ...updatedFaults[index], names:'', status: 'פתוחה' };

    // Update state
    setFaultd(updatedFaults);


}else if ( (newStatus === 'דחויה' && deferDate <= new Date())) {
    const currentClosedFaults = [...closeFaultd];
    const newOpenFaults = [];
    currentClosedFaults.forEach((fault, i) => {
      if (i === index && fault.names === names && fault.status.includes('סגורה')) {
        const currentFaults = [...faultd];
        currentFaults.push(updatedFault);
        setFaultd(currentFaults);
        setcloseFaultd(currentClosedFaults.filter((fault) => fault !== faultToMove));
      } else {
        newOpenFaults.push(fault);
      }
    });
    setOpenFultd([...openFaultd, ...newOpenFaults]);
  } else if (newStatus === 'דחויה') {
    const currentDeferredFaults = [...deferredfaults];
    
    // Find the fault being updated
    const updatedFaultIndex = updatedFaults.findIndex((fault, i) => i === index);
  
    if (updatedFaultIndex !== -1) {
      // Update the fault status and date
      updatedFaults[updatedFaultIndex] = { ...updatedFaults[updatedFaultIndex], status: 'דחויה', date: deferDate };
  
      // Move the fault to deferred faults
      const updatedDeferredFaults = [...currentDeferredFaults, updatedFaults[updatedFaultIndex]];
      setFaultd(updatedFaults.filter((_, i) => i !== updatedFaultIndex));
      setdeferredfaults(updatedDeferredFaults);
    }
  
    // Check if deferDate has passed
    if (new Date() >= deferDate) {
      const filteredDeferredFaults = currentDeferredFaults.filter(fault => fault.date !== deferDate);
      const faultToReturn = currentDeferredFaults.find(fault => fault.date === deferDate);
      if (faultToReturn) {
        // Move the fault back to open faults
        setOpenFultd([...openFaultd, faultToReturn]);
        setdeferredfaults(filteredDeferredFaults);
      }
    }
  }
};
const createFault = (n, r, p, e, t) => {
  const date = new Date();
  let temp = {
    id: Math.random().toString(36).substring(2, 9), // מספר מזהה אקראי
    name: n,
    room: r,
    phone: p,
    exp: e,
    mat: Math.floor(Math.random() * 378786 - 521212) + 521212,
    date: date.toLocaleString(),
    today: t,
    status: '',
    names:''
  };
  if (temp.room.length > 4) {
    alert('the length off room not ok');
    return false;
  }
  if (isNaN(temp.room)) {
    alert('the room need to be a number');
    return false;
  }
  if (isNaN(temp.phone)) {
    alert('the phone need to be a number');
    return false;
  }
  if (temp.phone.length <= 9 || temp.phone.length < 10) {
    alert('the phone length small 10 or 9');
    return false;
  }
  
   setFaultd([...faultd,temp])
  alert('הקריאה נפתחה בהצלחה');
};

const date = new Date();
  

  


  return (
    <div className="App">
     


<h1 style={{fontSize:'70px',color:'red',fontFamily:'inherit'}}>תקלות שירות </h1>
<h5 style={{color:'blue'}}>{date.toLocaleString()}</h5>
<BrowserRouter>
<Menu   />
<Routes>

<Route path='/' element = {<OpenFaults  faultd ={faultd} inTreatment = {inTreatment} closeFaultd = {closeFaultd} addFunction = {addFunction}   color = {color} openFaultd = {openFaultd} deferredfaults = {deferredfaults}  />}   />

<Route path='/תקלותסגורות' element = {<ClosedFaultd  closeFaultd = {closeFaultd} addFunction = {addFunction} deferredfaults = {deferredfaults} createFaultd = {createFault} faultd = {faultd}   color = {color} openFaultd = {openFaultd}/>} />



<Route path='/פתיחתתקלה' element = {<OpenHelp faultd = {faultd}  createFaultd = {createFault} />} />

<Route path= '/תקלותדחויות' element = {<Deferredfaults  closeFaultd = {closeFaultd} addFunction = {addFunction} createFaultd = {createFault} faultd = {faultd} deferredfaults = {deferredfaults}  color = {color} />}  />
{deferredfaults.map((val,index)=>{
   return <Route path={`/HelpPage${val.name}`} element = {<OpenHelpPage id= {val.id} Date = {val.date} dateTime = {val.dateTime} name = {val.name} room = {val.room} phone = {val.phone} exp = {val.exp}  mat = {val.mat} index = {index} addFunction = {addFunction}  closeFaultd ={closeFaultd}  color = {color}  faultd = {faultd}  />}  />
})}
{faultd.map((val,index)=>{
  return <Route path={`/HelpPage${val.name}`} element = {<OpenHelpPage  createFault = {createFault} id = {val.id}  Date = {val.date} name = {val.name} room = {val.room} phone = {val.phone} exp = {val.exp}  mat = {val.mat} index = {index} addFunction = {addFunction} closeFaultd ={closeFaultd} color = {color} openFaultd = {openFaultd} faultd = {faultd} deferredfaults = {deferredfaults}  />}  />
})}
{closeFaultd.map((val,index)=>{
  return <Route path={`/HelpPage${val.name}`} element = {<OpenHelpPage  createFault = {createFault} id={val.id} Date = {val.date} name= {val.name} room = {val.room} phone = {val.phone} mat = {val.mat} exp = {val.exp} index = {index} addFunction = {addFunction}  closeFaultd ={closeFaultd} color = {color} openFaultd = {openFaultd} faultd = {faultd} deferredfaults = {deferredfaults}   />}  />
})}
{openFaultd.map((val,index)=>{
  return <Route path={`/HelpPage${val.name}`} element = {<OpenHelpPage id = {val.id} createFault = {createFault}  Date = {val.date} name= {val.name} room = {val.room} phone = {val.phone} mat = {val.mat} exp = {val.exp} index = {index} addFunction = {addFunction}  closeFaultd ={closeFaultd} color = {color} openFaultd = {openFaultd} faultd = {faultd} deferredfaults = {deferredfaults}  />}  />
})}

</Routes>
</BrowserRouter>










    </div>
  );
}

export default App;

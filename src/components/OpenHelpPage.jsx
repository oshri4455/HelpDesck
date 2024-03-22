import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function OpenHelpPage(props) {
  const [functions, setFunctions] = useState('');
  const [names, setNames] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [selectedNameIndex, setSelectedNameIndex] = useState(null);

  useEffect(() => {
    const savedFunctions = localStorage.getItem(`selectedFunctions_${props.id}`);
    const savedNames = localStorage.getItem(`selectedNames_${props.id}`);
    const savedDateTime = localStorage.getItem(`selectedDateTime_${props.id}`);
  
    if (savedFunctions) {
      setFunctions(savedFunctions);
    }
  
    if (savedNames) {
      setNames(savedNames);
    }
  
    if (savedDateTime) {
      setDateTime(savedDateTime);
    }
  }, [props.id]);
  
  useEffect(() => {
    localStorage.setItem(`selectedFunctions_${props.id}`, functions);
  }, [functions, props.id]);
  
  useEffect(() => {
    localStorage.setItem(`selectedNames_${props.id}`, names);
  }, [names, props.id]);
  
  useEffect(() => {
    localStorage.setItem(`selectedDateTime_${props.id}`, dateTime);
  }, [dateTime, props.id]);

  return (
    <div>
      <h2 id='h2' style={{ color: 'red' }}>קריאה מספר: {props.mat}</h2>
      <h3>זמן הקריאה:</h3>
      <h3 style={{ color: 'blue' }}> {props.Date}</h3>
      <label id='label' htmlFor="">שם: </label>
      <input id='inpt' type="text" value={props.name} />
      <label id='label' htmlFor="">חדר: </label>
      <input id='inpt' type="text" value={props.room} />
      <label id='label' htmlFor="">טלפון: </label>
      <input id='inpt' type="text" value={props.phone} />
      <br />
      <br />
      <br />
      <br />
      <label id='label1' style={{position:'relative',top:'-35px'}} htmlFor="">פירוט הקריאה : </label>
      <br />
      <br />
      <textarea  style={{ fontSize: '30px',position:'relative',top:'-50px' }} name="" id="inptExp" cols="30" rows="10" defaultValue={props.exp} disabled></textarea>
      <br />
      <br />
      <label id='label2' htmlFor="">סטטוס:</label>
      <select value={functions} onChange={(e) => { setFunctions(e.target.value) }} name="" id="select1">
        <option value=" ">בחר מהרשימה</option>
        <option value="פתוחה">פתוחה</option>
        <option value="בטיפול">בטיפול</option>
        <option value="סגורה">סגורה</option>
        <option value="דחויה">דחויה</option>
      </select>
      <br />
      <label id='label3' htmlFor="">מבצע:</label>
      <select value={names} onChange={(e) => { setNames(e.target.value) }} name="" id="select2">
        <option value=" ">בחר מהרשימה</option>
        <option value="אושרי">אושרי</option>
        <option value="יוסי">יוסי</option>
        <option value="אבי">אבי</option>
        <option value="עדן">עדן</option>
      </select>
      <label id='label4' htmlFor="">תאריך לדחיה:</label>
      <input  onChange={(e) => { setDateTime(e.target.value) }} id='date' type='date' value={dateTime} />
      <Link to={'/'}><button onClick={() => { props.addFunction(props.index, functions, names, dateTime) }} id='buttonPge'>שלח</button></Link>
    </div>
  );
}
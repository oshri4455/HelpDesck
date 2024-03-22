import React, { useState } from 'react'

import './style.css'
import { Link } from 'react-router-dom'



export default function OpenHelp(props) {

const [name,setName] = useState('')
const[room,setroom] =useState('')
const [phone,setphone] = useState('')
const [exp,setexp] =useState('')

const handleCreateFaultd = () => {
  if (!name || !room || !phone || !exp) {
    alert('אנא מלא את כל הפרטים');
    return;
  }
  props.createFaultd(name, room, phone, exp);
};




  return (
    <div id='divOpen'>
<h1>פתיחת קריאת שירות</h1>
<br />
<label id='labell2' htmlFor="">שם: </label>
<input className='inpt' onChange={(e)=>{setName(e.target.value)}} type="text" />
<br />
<label id='labell2' htmlFor="">חדר: </label>
<input className='inpt' onChange={(e)=>{setroom(e.target.value)}} type="text" />
<br />
<label id='labell2' htmlFor="">טלפון: </label>
<input className='inpt' onChange={(e)=>{setphone(e.target.value)}} type="text" />
<br />
<br />
<label id='labell3' htmlFor="">פירוט הקריאה: </label>
<textarea onChange={(e)=>{setexp(e.target.value)}} className='inpt1' name="" id="" cols="30" rows="10"></textarea>
<br />
<br />
<Link to={'/'}><button id='button' onClick={handleCreateFaultd}>שלח</button></Link>
    </div>
  )
}

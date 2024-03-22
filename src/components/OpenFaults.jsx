import React from 'react'
import './style.css'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Commend from './Commend'


export default function OpenFaults(props) {
 



  return (
    <div id='divTble'>
<h2 style={{color:'red'}}>תקלות פתוחות</h2>
<br />
<br />
<table>


<tr >
<th>פרטים</th>
<th  >פירוט קריאה</th>
<th >טלפון</th>
<th  >חדר</th>
<th  >שם</th>
<th>מטפל</th>
<th>זמן קריאה</th>
  <th >מספר  קריאה</th>
</tr>

{props.faultd.length === 0 ? (
  <h2 style={{ position: 'absolute', left: '50%', top: '150%', transform: 'translate(-50%, -50%)', color: 'green' }}>!אין תקלות להצגה כרגע</h2> 
) : (
  <>
    {props.faultd.length > 0 && (
       <h2 style={{position: 'absolute', left: '50%', top: '-50px', transform: 'translateX(-50%)', color: 'green'}}>סה"כ {props.faultd.length} תקלות פעילות</h2>
    )}
    {props.faultd.map((val, index) => {
      let textColor = val.functions === 'פתוחה' ? 'red' : val.status === 'בטיפול' ? 'black' : 'red';
      return (
        <tr key={index} style={{ color: textColor }}>
          <td><Link to={`/HelpPage${val.name}`}><button id='button1'>+</button></Link></td>
          <td><textarea style={{ color: textColor, width: '600px', height: '100px', position: 'relative', left: '0px', top: '0px' }} name="" id="text" cols="30" disabled rows="10">{val.exp}</textarea></td>
          <td style={{ color: textColor }}>{val.phone}</td>
          <td style={{ color: textColor }}>{val.room}</td>
          <td style={{ color: textColor }}>{val.name}</td>
          <td style={{ color: textColor }}>{val.names}</td>
          <td style={{ color: textColor }}>{val.date}</td>
          <td style={{ color: textColor }}>{val.mat}</td>
        </tr>
      );
    })}
  </>
)}

</table>
    </div>
  )
}

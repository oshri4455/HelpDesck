import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ClosedFaultd(props) {
    
  return (
    <div>
<h2 style={{color:'green'}}>תקלות סגורות</h2>




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

{props.closeFaultd.map((val,index)=>{

return   <tr   style={{color:'black'}}>
<td>  <Link to={`/HelpPage${val.name}`} ><button id='button1' >+</button></Link></td>
<td>  <textarea  style={{color:'black',width:'600px',height:'100px',position:'relative',left:'0px',top:'0px'}} name="" id="text" cols="30" rows="10">{val.exp}</textarea></td>
<td    style={{color:'black'}} >{val.phone}</td>
<td   style={{color:'black'}}>{val.room}</td>
<td   style={{color:'black'}} >{val.name}</td>
<td   style={{color:'black'}} >{val.names}</td>
<td  style={{color:'black'}} >{val.date}</td>
<td  style={{color:'black'}}>{val.mat}</td>

</tr>


})}
</table>
    </div>
  )
}

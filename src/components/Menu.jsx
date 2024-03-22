import React from 'react'
import {Link} from 'react-router-dom'


export default function Menu() {
  return (
    <div>
<Link to={'/'}><button className='btn btn-dark'>תקלות פתוחות</button></Link>
<Link to={'/תקלותסגורות'}><button className='btn btn-dark'>תקלתות סגורות</button></Link>
<Link to={'/פתיחתתקלה'}><button className='btn btn-dark'>פתיחת תקלה</button></Link>
<Link to={'/תקלותדחויות'}><button className='btn btn-dark'>תקלות דחויות</button></Link>




    </div>
  )
}

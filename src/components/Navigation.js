
import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='nav'>
        <h3>App Logo</h3>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='Home'>About Us</Link></li>
            <li><Link to='Home'>Our Contact</Link></li>
            <li><Link to='Home'>Blog</Link></li>
        </ul>
        <div className='search'>
            <input type='text' name='search' placeholder='search..'/>
            <input type ='submit' name='submit' value='search'/>    
        </div>
    </div>
  )
}

export default Navigation
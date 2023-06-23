import React from 'react'
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom'


function Navbar() {
 
  const navigate = useNavigate();

  const handleScrollToBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <div className='nav-bar'>
        <div className='nav-title' onClick={(e) => navigate('/')}>
           BlogTown
        </div>
        <div className='nav-menu'>
          <div onClick={handleScrollToBottom}>
            About
          </div> 
          <div onClick={handleScrollToBottom}>
            Contact
          </div>
          <div onClick={(e) => navigate('/favourites')}>
            Favourites
          </div> 
        </div>
    </div>
  )
}

export default Navbar
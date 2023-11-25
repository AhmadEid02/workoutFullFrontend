import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem('user')
    // dispatch logout action
    navigate('/')
    window.location.reload(false);
  }
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <header>
      <div className='container'>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
      <div className='.div'>
        {!user &&
          <>
            <Link to={"/login"} className='link' >log in</Link>
            <Link to={"/signup"} className='link'>sign up</Link>
          </>
        }
        {user &&
          <>
            <span>{user.email}</span>
            <button className='btn' onClick={logout}> log out</button>
          </>
        }

      </div>
    </header>
  )
}

export default NavBar
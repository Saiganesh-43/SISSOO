 import React from 'react'
import sissooLogo from '../images/Vector 316.png'
const Signup = () => {
  return (
    <div className='signup5'>
        <img src={sissooLogo} alt="" className='logoimage'/>
        <div>
        <h1 className='heading'>Sign Up</h1>
        <h1 className='profile'>Choose Your Profile</h1>
        </div>
        <button className="but button-1">Employeer</button>
        <button className="but button-2">Trainer</button>
        <button className="but button-3">candidate</button>
        <button className="button-4">Continue</button>
    </div>
  )
}
export default Signup
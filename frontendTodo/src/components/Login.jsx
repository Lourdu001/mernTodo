import React from 'react'

const Login = () => {
  return (
<div className='loginpagecontainer'>
    <div className='formcontainer'>
<div className='profilelogincontainer '>
    <div className='imagecontainer'>
        
        <img src="" alt="" />
    </div>
</div>
<div className='Formlogincontainer '>
    <div className='input-container'>
    <span className='input-icon'>✉️</span>
<input className='input-field' type="text" name="username" id="username" placeholder='user name' />
</div>
<div className='input-container'>
        <span className='input-icon'>🔒</span>

<input className='input-field' type="password" name="password" id="password" />
</div>

<button className='loginbutton'>Login</button>
<h6 >Forgt Username/Password?</h6>
</div>
    </div>
</div>
)
}

export default Login
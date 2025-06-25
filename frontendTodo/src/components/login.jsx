import React,{useState} from 'react'

const Login = () => {
const [sighupdisplay, setsighupdisplay] = useState(false);
    return (
    <div>
        <div className='logincontainer'>
            {sighupdisplay===false?<div className='boxcontaineruser' style={{ maxHeight: sighupdisplay ? '300px' : '220px' }}>
                <label className='useritem' htmlFor="Uname">User Name:</label>
                <input className='useritem inputnone' type="text" name="Uname" id="Uname" />
                <label htmlFor="Upassword" className='useritem'>Password:</label>
                <input type="password" name="Upassword" id="Upassword" className='useritem inputnone' />
                <button className='useritem buttonlogin' type="submit">Login</button>
                <div className='useritem newadjustflex '>
                <h6 > Dont have an account?</h6> 
                <h6 onClick={()=>setsighupdisplay(true)} className='pointerbutton'>Signup</h6>
                </div>
            </div>:
            <div className='boxcontaineruser' style={{ maxHeight: sighupdisplay ? '270px' : '220px' }}>
                <label className='useritem' htmlFor="NewUname">User Name:</label>
                 <input className='useritem inputnone' type="text" name="NewUname" id="NewUname" />
                <label className='useritem' htmlFor="Newpassword">Password:</label>
                <input className='useritem inputnone' type="password" name="Newpassword" id="Newpassword" />
                <label className='useritem' htmlFor="Repassword">Re-Password:</label>
                <input className='useritem inputnone' type="password" name="Repassword" id="Repassword" />
                <button className='useritem buttonlogin' type="submit">Signup</button>
                <div  className='useritem newadjustflex'>                
                    <h6>Already have an account?</h6> 
                    <h6 onClick={()=>setsighupdisplay(false)} className='pointerbutton'>Login</h6>
                </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Login
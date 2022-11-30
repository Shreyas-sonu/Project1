import React from 'react'
import css from "./GLobal.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <div>
        <section>
            <article id='login_Block'>
                <div id='main_Block'>
                    <aside id='welcome_block' >
                        <h1>Welcome Back</h1>
                        <div><TextField id="input-with-sx" label="Email" variant="standard" /></div>
                        <div><TextField id="input-with-sx" label="Password" variant="standard" /></div>
                        <a href="" id="button"><Button disabled>Forgot Password</Button></a> 
                        <a  id="sign">Sign IN</a>




                    </aside>
                    <aside id='signup_part'>
                        <div id="signup_back">
                           <h3>New here? </h3> 
                           <h3>Sign Up and discover great</h3> 
                           <h3>amount of new oppurtunites</h3>

                           <a href="" ><Button variant="outlined">Sign Up</Button></a>
                 
                        </div>
                    
                    </aside>


                </div>
            </article>

        </section>
    </div>
  )
}

export default Login
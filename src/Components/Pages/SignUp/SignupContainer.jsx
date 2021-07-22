import React from "react";
import "../../../Styles/Pages/SignUp/SignupContainer.scss";

function SignupContainer() {
  return (
    <div className='signupContainer'>
      <div className='signupForm'>
        <form action=''>
          <h1>Signup Form</h1>
          <input type='text' placeholder='Enter your email' />
          <input type='password' placeholder='Enter your password' />
          <input type='password' placeholder='Re-Enter your password' />
          <button onClick={(e) => e.preventDefault()}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupContainer;

import React from 'react';
import './style.css'
import { Link } from'react-router-dom';

const SignIn = () => {
    return(
    <div>
        <div className="SignIn-bg">
            <div className="container ">
            <h1><span className="badge badge-light">Log in</span></h1>
            <br/>
            <form>
    <div className="form-group">
      <label for="exampleInputEmail1" className="badge badge-light">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      <small id="emailHelp" className="form-text text-muted badge badge-light">Your emial will not be shown by others.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1" className="badge badge-light">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" required />
    </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
      <label className="form-check-label badge badge-light" for="exampleCheck1">Rememmber me</label>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <br/>

    <div >
        <span className="bg-light">Do not have an account yet ?<Link to="/Sign-up">Join us</Link></span> 
    </div>
  <br/>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>

    )
}

export default SignIn;
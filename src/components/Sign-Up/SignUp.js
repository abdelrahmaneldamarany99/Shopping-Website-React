import React from 'react';
import './style.css'
import { Link } from'react-router-dom';

const SignUp = () => {
    return(
    <div>
        <div className="SignUp-bg w-100">

<div className="container ">
<br/><br/>
<h1><span className="badge badge-light">Join us</span></h1>

      {/* <br/><br/> */}
  <br/><br/>

  <form>
    <div className="row">
      <div className="col">
      <label for="First-name"><span className="bg-light">First name</span> </label>
        <input type="text" id="First-name" className="form-control" placeholder="First name" required />
      </div>
      <div className="col">
      <label for="Last-name"><span className="bg-light">Last name</span> </label>
        <input type="text" id="Last-name" className="form-control" placeholder="Last name" required />
      </div>
    </div>
      <br/>

    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4"><span className="bg-light">Email</span> </label>
        <input type="email" className="form-control" id="inputEmail4" required / >
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4"><span className="bg-light">Password</span></label>
        <input type="password" className="form-control" id="inputPassword4" required / >
      </div>
      <br/>
    </div>
    <div className="form-group">
      <label for="inputAddress"><span className="bg-light">Address</span></label>
      <input type="text" className="form-control" id="inputAddress" placeholder="Enter your village" required / >
    </div>
    <div className="form-group">
      <label for="inputAddress2"><span className="bg-light">Address 2</span></label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Enter your detailed address" required / >
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputCity"><span className="bg-light">City</span></label>
        <input type="text" className="form-control" id="inputCity" required / >
      </div>
      <div className="form-group col-md-4">
        <label for="inputState"><span className="bg-light">State</span></label>
        <select id="inputState" className="form-control">
          <option selected>Choose...</option>
          <option>Egypt</option>
          <option>Emirates</option>
          <option>Jordan</option>
        </select>
      </div>
      <div className="form-group col-md-2">
        <label for="inputZip"><span className="bg-light">Zip</span></label>
        <input type="text" className="form-control" id="inputZip" required / >
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <br/>

  <div>
    <span className=" bg-light">Already have an account ? <Link to="/Sign-in">Sign in</Link></span>
  </div>
  <br/>
</div>


</div>
    </div>

    )
}

export default SignUp;
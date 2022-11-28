import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom'

const Contact = () => {
    return(
      <div>
        <div className="wrapper container">
<h1 className="mt-5"><span className="bg-light">Contact us</span></h1>

<br/>

<form>
  <div className="form-group">
    <label for="exampleInputEmail1"><span className="bg-light">Email address</span></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <small id="emailHelp" className="form-text text-muted"><span className="bg-light">Your emial will not be shown by others.</span></small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1"><span className="bg-light">Password</span></label>
    <input type="password" className="form-control" id="exampleInputPassword1" required />
  </div>
  <div className="form-group">
      <label for="exampleFormControlTextarea1"><span className="bg-light">Comment</span></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  <button type="submit" className="btn btn-info">Submit</button>
</form>
<br/>
<h3><div class="badge badge-light"
// eslint-disable-next-line
  class="badge badge-light">
    <span >Haven't an account yet ? </span> <Link to="/Sign-up">Join us</Link>
  </div></h3>
<br/>
<br/>
<br/>
<br/>
<br/>

</div>

</div>
    )
}

export default Contact;
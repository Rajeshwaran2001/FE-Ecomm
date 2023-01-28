import React, { lazy } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

function SignUp() {
  const onSubmit = async(values)=>{
    const res =await axios.post("http://20.219.190.188/api/user/",{...values,gender:'male'})
    console.log(res)
    // alert(JSON.stringify(values))
  }
  return (
    <div className="container my-3">
    <div className="row border">
      <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
        <Link to="/">
          <img
            src="../../images/banner/Dell.webp"
            alt="..."
            className="img-fluid"
          />
        </Link>
        <Link to="/">
          <img
            src="../../images/banner/Laptops.webp"
            alt="..."
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="col-md-6 p-3">
        <h4 className="text-center">Sign Up</h4>
        <SingUpForm onSubmit={onSubmit} />
      </div>
    </div>
  </div>
  )
}

export default SignUp
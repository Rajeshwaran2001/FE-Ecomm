import React, { lazy } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));


function SignUp() {
  const navigate = useNavigate() 
  const onSubmit = async(values)=>{
    const res =await axios.post("https://api.rajeshwaran.me/api/user/",{...values,gender:'male'})
    console.log(res)
    if(res.status===200 || res.statusText){
      navigate("/account/signin")
    }
  }
  return (
    <div className="container my-3">
    <div className="row border">
      <div className="col-md-6 bg-light bg-gradient p-5 d-none d-md-block">
        <Link to="/">
          <img
            src="../../images/authentication/signup.svg"
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
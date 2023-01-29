import React, { lazy } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignIn = () => {
  const navigate = useNavigate()
  const onSubmit = async(values)=>{
    console.log(values)
    var LoginData = new FormData();
    LoginData.append("email", values.email);
    LoginData.append("password", values.password);
    const res = await axios.post("http://20.219.190.188/api/user/login/",LoginData)
    console.log(res.data.user.id,res.data.token);
    localStorage.setItem("user",JSON.stringify({"userId": (res.data.user.id), "jwt": (res.data.token)}))
    if(res.status===200 || res.statusText){
      navigate('/')
    }
  }
  return (
    <div className="container my-3">
        <div className="row">
          <div className="col-md-6 bg-light bg-gradient p-5 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/authentication/environment.svg"
                alt="..."
                className="img-fluid"
              />
            </Link>

          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
  )
}

export default SignIn
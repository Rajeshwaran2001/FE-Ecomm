import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import axios from "axios"

const Header = () => {
  if(localStorage.getItem("user")){
    var userId = 0
  }
  const navigate = useNavigate() 
  const LogoutFunction = async()=>{
    const {userId} = JSON.parse(localStorage.getItem("user"))
    if(userId){
    const res = await axios.get(`http://20.219.190.188/api/user/logout/${userId}/`)
    if(res.status === 200 || res.statusText === "OK"){
      console.log("Logout Successfull")
      navigate("/account/signin")
      localStorage.clear()
    }
  }
  }
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  src="../../images/logo.png"
                  height="50"
                />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-4">
              <div className="position-relative d-inline me-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>
              {
                userId && <button className="btn btn-primary mx-3" onClick={()=>LogoutFunction()}>Logout</button>
              }
              
              {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;

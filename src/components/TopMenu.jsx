import { Link } from "react-router-dom";
import axios from "axios"
import {useState} from "react"

const TopMenu = () => {
  const[categories,setCategories] = useState([])
  const fetchData = async()=>{
    const res =await axios.get("https://api.rajeshwaran.me/api/category/")
    setCategories(res.data)
    console.log(res.data)
  }
  fetchData()
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary px-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <b>E-Commerce</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mr-0" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {categories.map((category)=>(
                <li className="nav-item lead" key={category.id}>
                <Link className="nav-link text-light" to="/category">
                  <b>{category.name}</b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;

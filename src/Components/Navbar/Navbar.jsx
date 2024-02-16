import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg  bg-black   ">
  <div className="container-fluid">
    <Link className="navbar-brand nav-link   fw-bolder px-2 text-bg-danger" to={'/'}>HONDA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto pe-5 ">


        <li className="nav-item  ">
          <Link className="nav-link mx-5 text-white" to={'about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-5 text-white" to={'portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-5 text-white" to={'contact'}>Contact</Link>
        </li>




      </ul>

    </div>
  </div>
</nav>
  


  </>
}

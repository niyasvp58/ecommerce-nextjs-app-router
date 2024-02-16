'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Header() {
  const pathname = usePathname();

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/component/productlist' ? 'active' : ''}`} href='/component/productlist'>Product list</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${pathname === '/component/aboutus' ? 'active' : ''}`} href='/component/aboutus'>About us</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/component/contactus' ? 'active' : ''}`} href='/component/contactus'>Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/component/cart' ? 'active' : ''}`} href='/component/cart'>Cart</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

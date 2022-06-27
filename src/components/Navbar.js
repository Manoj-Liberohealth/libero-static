import React from 'react'

export default function Navbar() {
  return (
    <div >
      <header id="header" class="header fixed-top shadow-xs" style={{  background: '#fff' }} >
        <div
          class="container-fluid container-xl d-flex align-items-center justify-content-between"
        >
          <a href="index.html" class="logo d-flex align-items-center" style={{ textDecoration: 'none' }}>
            <img src="../img/icon.png" alt="" />
            <span className='logo-heading libero-font'>LIBERO HEALTH</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto text-libero pointer active" onClick={() => {
                if (window.location.pathname === '/') {
                  console.log(window.location.pathname);
                  document.getElementById('hero').scrollIntoView()
                } else {
                  window.location.href = '/';
                }
              }} >Home</a></li>
              <li> <a class="nav-link scrollto text-libero pointer" onClick={() => {
                 if (window.location.pathname === '/') {
                  console.log(window.location.pathname);
                  document.getElementById('about').scrollIntoView()
                } else {
                  window.location.href = '/';
                }
              }}>About</a></li>
              <li ><a class="nav-link scrollto text-libero pointer" onClick={() => {
                if (window.location.pathname === '/') {
                  console.log(window.location.pathname);
                  document.getElementById('features').scrollIntoView()
                } else {
                  window.location.href = '/';
                }
              }}>Features</a></li>
              <li><a class="nav-link scrollto text-libero pointer" onClick={() => {
                if (window.location.pathname === '/') {
                  console.log(window.location.pathname);
                  document.getElementById('contact').scrollIntoView()
                } else {
                  window.location.href = '/';
                }
              }} >Contact</a></li>


            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}

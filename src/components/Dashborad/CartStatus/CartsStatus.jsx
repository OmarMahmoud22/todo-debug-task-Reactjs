// import React from 'react'
import StylingCats from '../StylingCats'

export default function CartsStatus() {
  return (
    <>
      <div className="mb-4 bg-light p-4">
        <h1>DASHBOARD</h1>
      </div>

      <div className="row g-4 ">
        <div className="col-12 col-md-6 col-lg-3">
          <StylingCats title="Users" number="150" icon={<i class="fa-solid fa-user " style={{ fontSize: "40px" }}></i>}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <StylingCats title="manger" number="320" icon={<i class="fa-solid fa-user-tie" style={{ fontSize: "40px" }}></i>}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <StylingCats title="developer" number="120" icon={<i class="fa-solid fa-code" style={{ fontSize: "40px" }}></i>}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <StylingCats title="hackers" number="180" icon={<i class="fa-brands fa-windows" style={{ fontSize: "40px" }}></i>}/>
        </div>
      </div>
    </>
  );
}

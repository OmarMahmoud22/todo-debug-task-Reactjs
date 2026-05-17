// import React from 'react'

export default function StylingCats({number , title , icon}) {
  return (
    <div
      className="p-5 rounded shadow-sm d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#6EC1E4" }}
    >
      {icon}
      <div className="d-flex flex-column align-items-end">
        <p className="fs-4 fw-bold mb-0">{number}</p>
        <p className="fs-4 fw-bold">{title}</p>
      </div>
    </div>
  );
}

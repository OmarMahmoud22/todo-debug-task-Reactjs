// import React from 'react'
import styling from '../Sidebar/Sidebar.module.css'
export default function Sidebar() {
  const links = [
    { icon: "fa-users", title: "User Magement" },
    {icon:"fa-building" , title:"Project Manegment"},
    {icon:"fa-building" , title:"Developers Mangment"},
    {icon:"fa-globe" , title:"Website cms"},
    {icon:"fa-building" ,title:"Live Chat"}
    

  ];
  return (
    <>
      <nav className={styling.Side}>
          <div className={styling.title}>DASHBOURD</div>
        {links.map((item) => {
          return (
            <div className="py-2 mx-2">
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="title mx-1">{item.title}</span>
            </div>
          );
        })}
      </nav>
    </>
  );
}

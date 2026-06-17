// import React from 'react'
import styling from '../Sidebar/Sidebar.module.css'
import {NavLink} from 'react-router-dom'
export default function Sidebar() {
  const links = [
    { icon: "fa-users", title: "User Magement",path:"/usermahgment" },
    {icon:"fa-building" , title:"Project Manegment" , path:"/Products"},
    {icon:"fa-building" , title:"Developers Mangment",path:"/Developers"},
    {icon:"fa-globe" , title:"Website cms" , path:"/WebsiteCms"},
    {icon:"fa-building" ,title:"Live Chat" , path:"/LiveChat"}
    

  ];
  return (
    <>
      <aside className={styling.Side}>
          <div className={styling.title}>DASHBOURD</div>
        {links.map((item , index) => {
          return (
            <NavLink to={item.path} key={index} className={`${styling.linkitem}`}>
            <div className={`${styling.cont} py-4`} >
              <i className={`fa-solid ${item.icon}`}></i>
              <span className={`${styling.title} px-2`}>{item.title}</span>
            </div>
            </NavLink>
          );
        })}
      </aside>
    </>
  );
}

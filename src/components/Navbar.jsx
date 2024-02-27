import React, { useEffect, useState } from "react";
import "./Navbar.css";

 function Nav(){
     const [show,handleshow] =useState(false);


    useEffect (() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100){
                handleshow(true);

            }else handleshow(false);
        }) ;
    return()=>{
        window.removeEventListener("scroll");
    };
 }, []);
    return(
         <div className={`nav ${show && "nav_black"}`}>
         <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netfkix Logo" />
         <img className="nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkAsfodAsf1JgA-LF-IguG28fHt3cB-ZdQfT4pLTeIwMoxvc&s" alt="Netfkix Logo" />

          
             
         </div>
    )
 }
 export default Nav;
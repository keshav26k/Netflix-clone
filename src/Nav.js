import React,{useEffect, useState} from "react";
import "./Nav.css"

 function Nav(){
     const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

     return(
         <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="/img/Netflix_2015_logo.svg" alt="Netflix Logo"/>
            <img className="nav_avatar" src="/img/samuele-giglio-CeJNDEIJQyU-unsplash.jpg" alt="Netflix Logo"/>
         </div>
     )
 }

 export default Nav;
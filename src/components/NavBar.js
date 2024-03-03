import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarItems = links.map((item)=>{
    return <a key = {item} href={`#${item}`} >{item}</a>
  })

  return (
    <nav>{navBarItems}</nav>
  )
}

export default NavBar;

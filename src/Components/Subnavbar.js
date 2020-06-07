import React from 'react'
import Subshare from "./Subshare";
import "./Subnavbar.css"
function Subnavbar() {
  return (<footer
    className={`
      height--nav     
      width-vw
      cursor-pointer
      transition--default
      box-shadow--black
    `}> <hr></hr>
    <Subshare />
  </footer>)
}
export default Subnavbar;


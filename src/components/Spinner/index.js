import React from "react";
import './spinner.scss';

export default (props)=>{
  return (
    <div className={`spinner spinner_size_${props.size}`}/>
  )
}

import React from "react";


function CommonButton(props) {
 
 
    return( 

    <a className={"btn btn-"+props.color} target="_blank" rel="noreferrer" href={props.href}>{props.text}</a>
 )
}


export default CommonButton;
import React from "react";
import './styles.css';

function ItenList({title, description}){
    return (
        <div className="iten-list">
           <strong>{title}</strong>
           <p>{description}</p>
           <hr />
        </div>
    )
}

export default ItenList;
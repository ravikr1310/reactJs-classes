import React from 'react';


function Child(props){
    var title = "Mahesh kumar"
    return (
        <div>
            <h1>{props.childName}</h1>
            <h2>{props.fullName(title)}</h2>            
        </div>
    )
}

export default Child;
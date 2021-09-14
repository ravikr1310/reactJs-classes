import React from 'react'
import PropsType from 'prop-types';

function MyButton(props){
    return(
        <button onClick={props.click}
            style={{
                padding: props.padding,
                backgroundColor: props.backgroundColor,
                margin: props.margin,
                color: props.color
            }}
        >{props.name}</button>
    )
}
MyButton.propsType = {
    name: PropsType.String,
    color: 'red'
}
export default MyButton;

import React ,{useState} from 'react'

function Dismiss(props){
    const [isVisible, setIsVisible] = useState(false);

    const setIsVisibleFun = value =>{
        setIsVisible(value)
    }
    return props.myFunction(isVisible, setIsVisibleFun)
}

export default Dismiss;
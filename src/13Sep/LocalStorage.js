import React from 'react'

class LocalStorage extends React.Component{
    constructor(){
        super();
        this.state ={
            isLocalStorageAvailable : false
        }
    }
    saveStorage = (key, data) =>{
        return localStorage.setItem(key,data)
    }

    loadStorage = (key) =>{
        return localStorage.getItem(key)
    }
    removeItem = key =>{
        localStorage.removeItem(key)
    }
    render(){
        return (
            <div>
                {this.props.render(this.saveStorage, this.loadStorage, this.removeItem)}
            </div>
        )
    }
}

export default LocalStorage;
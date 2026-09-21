import "./App.css";
import { Fragment } from "react";

//component to return
function UsernameComponent({setFunction}) {
    const updateForm = setFunction
    return (
        <Fragment>
            <label for="username1"> Enter a Nickname: </label>
            <input type='text' id='username1' value=''placeholder='Please enter a new username'/>
            <label for="username2"> Confirm your Nickname: </label>
            <input type='text' id='username2' value='' placeholder='Please retype your username'/>
            <button className="pure-button pure-button-secondary" type="button" onClick={() => updateForm(true)} >back</button>
            <button className="pure-button pure-button-primary" type="button" onClick={updateUsername} >submit</button>
        </Fragment>
    )
}

export default UsernameComponent;

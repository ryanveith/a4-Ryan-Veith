import "./App.css";
import { Fragment } from "react";


//component to return
function PasswordComponent({setFunction}) {

    const updateForm = setFunction

    return (
        <Fragment>
            <label for="password1"> Enter a New Password: </label>
            <input type='password' id='password1' value=''placeholder='Please enter a new password'/>
            <label for="password2"> Confirm your Password: </label>
            <input type='password' id='password2' value='' placeholder='Please retype your password'/>
            <button className="pure-button pure-button-secondary" type="button" onClick={() => updateForm(true)} >back</button>
            <button className="pure-button pure-button-primary" type="button" onClick={updatePassword} >submit</button>
        </Fragment>
    )
}

export default PasswordComponent;

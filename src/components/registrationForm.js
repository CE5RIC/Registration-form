import './style.css'
import {useState} from 'React';

function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);


    // In this function you get the id and value entered inside the input box, the state of that field will get updated

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
 
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input value={firstName} onChange = {(e) => handleInputChange(e)} className="form__input" type="text" id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input value={lastName} onChange = {(e) => handleInputChange(e)} type="text" name="" id="lastName" className="form__input" placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input value={password} onChange = {(e) => handleInputChange(e)} className="form__input" type="password" id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input value={confirmPassword} onChange = {(e) => handleInputChange(e)} className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">Register</button>
            </div>
        </div>
    )
}

export default RegistrationForm;
import React, { useState } from 'react'
import '../../../styles/pages/supplierStack.css'
import NavbarrPm from '../../layouts/navbarrPm'
import { signup } from '../../Helpers/auth/index'
import { Link } from 'react-router-dom'
import Button from 'reactstrap-button-loader';
import { set } from 'date-fns'
import './pmregister.css'


const RegisterPm = () => {
    const [values, setValues] = useState({
        companyName: "",
        email: "",
        password: "",
        error: "",
        success: false,
        is_procurementManager: true,
        RegistrationNo: "",
        phone: "",
    });

    const { companyName, email, password, error, success, RegistrationNo, phone, is_procurementManager = true } = values;

    const [nameError, setNameError] = useState({})
    const [passwordError, setPasswordError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [loading, setLoading] = useState(false)
    const [reTypeEmail, setRetypeEmail] = useState('')
    const [reTypePassword, setReTypePassword] = useState('')
    const [pass, setPass] = useState('')
    const [passLength, setPassLength] = useState('')
    const [emails, setEmails] = useState('')

    const onPassword = ()=>{
        if(password.trim() !== reTypePassword.trim()){
            setPass('Passwords do not match')
        }
        else{
            setPass('Password match')
            let mycheck = true
        }
    }

    const onEmail = ()=>{

        if(email.trim() !== reTypeEmail.trim()){
            setEmails('Emails do not match')
        }
        else{
            setEmails('')
        }
    }

    const passwordLength = () =>{
        if(password.length <= 6){
            setPassLength('Length must more than 6 characters')
        }
        else{
            setPassLength('')
        }
    }

    const handleChange = name => event => {
        setValues({
            ...values, 
            error: false, 
            is_procurementManager: true, 
            [name]: event.target.value
        })
    };


    const onSubmit = (event) => {
        event.preventDefault();

        setValues({
            ...values, 
            is_procurementManager: true,
            error: false 
        })

        signup({
            companyName, 
            email, 
            password, 
            RegistrationNo, 
            phone, 
            is_procurementManager 
        })
            .then((data) => {
                console.log("DATA", data)
                localStorage.setItem('email', data.email)
                if (data.email === email) {
                    setValues({
                        ...values,
                        companyName: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                } 
                else {
                    setValues({
                        ...values,
                        error: true,
                        success: false
                    })
                }
            })
            .catch(e => console.log(e))

    }

    const successMessage = () => {
        return (
            <div className="alert alert-success"
                style={{ display: success ? "" : "none" }} id="sucess-msg">
                <center>Account created. Clink the link below</center>
                <center id="verifylink"><button id="verifybutton"><Link to="/pm/emailverify"> Verify Now</Link></button></center>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="alert alert-danger"
                style={{ display: error ? "" : "none" }}>
                Check all fields again
            </div>
        )
    }

    // const condition1Color = {
    //     color: 'blue'
    // }
    // const condition2Color = {
    //     color: 'red'
    // }

    return (
        <>
            <NavbarrPm />
            <div id="container">

                <aside id="sideBar">
                    <h4 id="homeTitle"><center>SupplierStack</center></h4>
                </aside>
                
                {/* <div id = "bigline"></div> */}
                <section id="RegisterBar">
                    {successMessage()}
                    {errorMessage()}
                    <h4 id="headText">Company Registration</h4>
                    <br />
                    <label id="formLabel">Company Name</label><br />
                    <input 
                        id="formStyle" 
                        onChange={handleChange("companyName")} 
                        type="text" 
                        placeholder="Company Name"
                    /><br /><br />

                    <label id="formLabel">Company Registration No</label><br />
                    <input 
                        id="formStyle" 
                        type="number" 
                        onChange={handleChange("RegistrationNo")} 
                        placeholder="Company Registration No" 
                    /><br /><br />

                    <label id="formLabel">Company Teelephone</label><br />
                    <input 
                        id="formStylee" 
                        type="tel" 
                        onChange={handleChange("phone")} 
                        placeholder="Company Teelephone" 
                    /><br /><br />

                    <label id="formLabel">Company Email</label><br />
                    <input 
                        id="formStylee" 
                        type="email" 
                        onChange={handleChange("email")} 
                        placeholder="Company Email" 
                    />
                    <span style={{color: 'red', marginBottom: 15 }}>{emails} </span>
                    <br /><br />

                    <label id="formLabel">Re-type Company Email</label><br />
                    <input 
                        id="formStylee"
                        type="email" 
                        onChange={handleChange("retypeEmail")} 
                        placeholder="Retype Company Email" 
                        onChange ={(e)=>{setRetypeEmail(e.target.value)}} 
                        placeholder ="Company Email" 
                        onBlur={onEmail}
                    />
                    <span style={{color: 'red', marginBottom: 15 }}>{emails} </span>
                    <br /><br />

                    <label id="formLabel">Company Password</label><br />
                    <input
                        id="formStylee" 
                        type="password" 
                        onChange={handleChange("password")} 
                        placeholder="Company Password"
                        onBlur={passwordLength}
                    />
                    <span style={{color: 'red', marginBottom: 15 }}>{passLength} </span>
                    <br /><br />
                    
                    <label id="formLabel"> Confirm Company Password</label><br />
                    <input
                        id="formStylee" 
                        type="password" 
                        onChange = {(e)=>{setReTypePassword(e.target.value)}} 
                        placeholder="Retype Company Password" 
                        onBlur={onPassword}
                    />
                    {/* <span> {pass === "Passwords do not match" ? condition1Color : condition2Color} </span> */}
                    <span style={{color: 'red', marginBottom: 15 }}>{pass} </span>
                    {/* console.log(pass) */}
                    <br/><br/>

                    <Button id="buttonStyleRegister" onClick={onSubmit}>Submit</Button>


                </section>

            </div>
            <div id="container">
                <footer id="mainFooter">
                    <h4 id="footerTag">&copy;Sterlingtech 2021</h4>
                </footer>
            </div>
        </>
    )
}

export default RegisterPm
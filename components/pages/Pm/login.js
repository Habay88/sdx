import React, { useState } from 'react'
import NavbarrPm from '../../layouts/navbarrPm'
import { authenticate, isAuthenticated, signin } from '../../Helpers/auth/index'
import '../../../styles/pages/supplierStack.css'
import { Link, Redirect } from 'react-router-dom'
import Button from 'reactstrap-button-loader';


let admin;
let stepSup;
let stepPm
let PaymentStatus;
let SdxNumber;
let statuss;

const LoginPm = () => {

    const [errors, setError] = useState('');
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        success: false,
        didRedirect: false,
        is_superuser: false
    })

    const { name, email, password, success, didRedirect } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.removeItem('step')
        setValues({ ...values, error: false, loading: true })

        signin({ email, password })
            .then(data => {
                console.log("DATA", data)
                // console.log(data.user.paymentStatus)
                // console.log(data.user.SdxNumber)
                if (data.error === 'Enter a valid email') {
                    setErr('Enter a valid email')
                    return
                } else if (data.error === 'Invalid password') {
                    setErr('Email and password do not match')
                    return
                }
                else if (data.user.is_supplier) {
                    stepSup = data.user.supstep
                    admin = data.user.is_staff
                    PaymentStatus = data.user.paymentStatus
                    SdxNumber = data.user.sdxNumber
                    console.log(PaymentStatus)
                    console.log(SdxNumber)
                    console.log(data.user.paymentStatus)
                    console.log(data.user.SdxNumber)
                    localStorage.setItem('name', data.user.companyName)
                    localStorage.setItem('id', data.user.id)
                    localStorage.setItem('email', email)
                    localStorage.setItem('password', password)
                }
                else if (data.user.is_procurementManager) {
                    console.log('hello world')
                    admin = data.user.is_staff
                    stepPm = data.user.prostep
                    console.log(stepPm)
                    localStorage.setItem('name', data.user.companyName)
                    localStorage.setItem('id', data.user.id)
                    localStorage.setItem('email', email)
                    localStorage.setItem('password', password)
                    // console.log(admin)
                    // console.log(step)
                }
                else if (data.user.is_staff) {
                    admin = data.user.is_staff
                    localStorage.setItem('name', data.user.companyName)
                    localStorage.setItem('id', data.user.id)
                    localStorage.setItem('email', email)
                    localStorage.setItem('password', password)


                }



                if (data.token) {
                    //let sessionToken = data.token
                    authenticate(data, () => {
                        console.log("TOKEN ADDED")
                        setValues({
                            ...values,
                            didRedirect: true
                        })

                    })


                } else {
                    setValues({
                        ...values,
                        loading: false
                    })
                }
            })

            .catch(e => console.log(e))
    }

    const performRedirect = () => {

        if (isAuthenticated() && admin) {
            return <Redirect to="/admin/dashboard" />
        }

        // else if (isAuthenticated() && stepSup < 1) {
        //     return <Redirect to="/supplier/companydetails" />
        // } else if (isAuthenticated() && stepSup == 1) {
        //     return <Redirect to="/supplier/addproducts" />
        // } else if (isAuthenticated() && stepSup == 2) {
        //     return <Redirect to="/supplier/payment" />

        // }
        // else if (isAuthenticated() && stepSup == 3 && PaymentStatus) {
        //     return <Redirect to="/supplier/documents" />
        // }
        // else if (isAuthenticated() && stepSup == 4 && PaymentStatus) {
        //     return <Redirect to="/supplier/approval" />

        // }
        // else if (isAuthenticated() && stepSup == 4 && PaymentStatus && SdxNumber != null) {
        //     return <Redirect to="/admin/dashboard" />

        // }

        else if (isAuthenticated() && stepPm < 1) {
            return <Redirect to="/pm/companydetails" />
        } else if (isAuthenticated() && stepPm == 1) {
            return <Redirect to="/pm/addproducts" />
        }

         else if (isAuthenticated()) {
            return <Redirect to="/pm/dashboard" />
        }


    }


    return (
        <>
            <NavbarrPm />
            <div id="container">
                <aside id="sideBar">


                    <h4 id="homeTitle"><center>SupplierStack</center></h4>

                </aside>
                {/* <div id = "Loginlink"></div> */}
                <section id="RegisterBar">
                    <h3 id="loginPart">
                        Login

           <br /><br />

                  Welcome back! Please login to your account<br /><br />
                        <label id="formLabel">Email</label><br />
                        <input id="formStylee" onChange={handleChange("email")} type="email" placeholder="email" /><br /><br />
                        <label id="formLabel">Password</label><br />
                        <input id="formStylee" type="password" onChange={handleChange("password")} placeholder="password" /><br /><br />
                        <input type="checkbox" id="check" />
                        <label id="checkRemember"><b>Remember me</b></label>
                        <Link to='#' id="reset-password">Reset Password?</Link>
                        <br /><br />
                        <Button id="buttonStyleRegister" loading={loading} onClick={onSubmit} >Login</Button><br /><br />
                        <label id="formLabel">New User?</label>
                        <Link to='#' id="signUp">Signup</Link>
                        <br />
                        <Link to='#' id="homePage">Return to Website</Link>
                        {performRedirect()}












                    </h3>




                </section>
                <div id="container">
                    <footer id="mainFooter">
                        <h4 id="footerTag">&copy;Sterlingtech 2021</h4>
                    </footer>
                </div>


            </div>

        </>
    )
}

export default LoginPm
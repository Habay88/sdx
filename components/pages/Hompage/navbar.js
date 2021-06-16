import React , {useState} from 'react'
import logo from '../../images/sdx logo.png'
import './home.css'
import { Link, Redirect } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../../Helpers/auth/index'
import Button from 'reactstrap-button-loader';


let admin;
let stepSup
let stepPm
let PaymentStatus;
let  SdxNumber;
let customerService;
let proStep;
let supStep;

let statuss;

const Navbar = () => {

    const [errors, setError] = useState('');
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        name : "",
        email : "",
        password : "",
        error: "",
        success :false,
        didRedirect: false,
        is_superuser : false
    })

    const {name, email, password, error, success, didRedirect} = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    };

    const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    setValues({...values, error:false, loading:true})
    
    signin({email, password})
    .then(data => {
        console.log("DATA", data)
           setLoading(false)
        if(data.error === 'Enter a valid email'){
            setErr('Enter a valid email')
            return
        }else if(data.error === 'Invalid password'){
            setErr('Email and password do not match')
            return
        }
        else if(data.user.is_supplier){
            supStep = data.user.supstep
            stepSup = data.user.is_supplier
             admin = false
             stepPm = false
             customerService = false
            PaymentStatus = data.user.paymentStatus
            SdxNumber  = data.user.sdxNumber
            localStorage.setItem('name', data.user.companyName)
            localStorage.setItem('id', data.user.id)
            localStorage.setItem('email', email)
            
        }
        else if(data.user.is_procurementManager){
           
              stepPm = data.user.is_procurementManager
              proStep = parseInt(data.user.prostep)
              supStep = null
            stepSup = false
            admin = false
            customerService = false
            localStorage.setItem('name', data.user.companyName)
            localStorage.setItem('id', data.user.id)
            localStorage.setItem('email', email)
        }
        else if(data.user.is_staff){
            
            admin = data.user.is_staff
            stepPm = false
            stepSup = false
            customerService = false
            localStorage.setItem('name', data.user.companyName)
            localStorage.setItem('id', data.user.id)
            localStorage.setItem('email', email)
        }
        else if (data.user.is_customerService){
           
            stepPm = false
            stepSup = false
            admin = false
            customerService = data.user.is_customerService
            localStorage.setItem('name', data.user.companyName)
            localStorage.setItem('id', data.user.id)
            console.log(data.user)
            // localStorage.setItem('email', email)
            // localStorage.setItem('password', password)

        }
        
        
         
        if (data.token) {
            //let sessionToken = data.token
            authenticate(data, () =>{
                console.log("TOKEN ADDED")
                setValues({
                    ...values,
                    didRedirect: true
                })
            
            })

            
        }else {
            setValues({
                ...values,
                loading: false
            })
        }
    })

    .catch(e => console.log(e))
    }

    const performRedirect = () => {
        
        if(isAuthenticated() && admin){
            return <Redirect to="/admin/dashboard"/>
        }
        else if(isAuthenticated() && customerService){
            return <Redirect to="/customerservice/dashboard"/>
        }
        else if (isAuthenticated() && supStep < 1 && stepSup) {
            return <Redirect to="/supplier/companydetails"/>
        }else if(isAuthenticated() && supStep == 1 && stepSup){
            return <Redirect to="/supplier/addproducts"/>   
        }else if(isAuthenticated() && supStep == 2 && stepSup){
            return <Redirect to="/supplier/payment"/>  

        }
       else if(isAuthenticated() && supStep == 3 && stepSup ){
            return <Redirect to ="/supplier/documents"/>
        }
        else if(isAuthenticated() && supStep == 4 && SdxNumber == null && stepSup ){
            return <Redirect to ="/supplier/approval"/>

        }
        // else if(isAuthenticated() && supStep == 4  && stepSup){
        //     return <Redirect to ="/supplier/completeregistration"/>

        // }
        else if (isAuthenticated() && supStep == 4 && SdxNumber != null && stepSup ){
            return <Redirect to = "/supplier/dashboard"/>
        }

        else if (isAuthenticated() && proStep < 1 && stepPm) {
            console.log('hello world')
            return <Redirect to="/pm/companydetails"/>
        }else if(isAuthenticated() && proStep == 1 && stepPm){
            return <Redirect to="/pm/addproducts"/>   
         }
         else if(isAuthenticated() && proStep == 2 && stepPm){
             return <Redirect to = "/pm/dashboard"/>
         }

        
    }


    return(
        <div className='navv'>
            <img src={logo} className='img' alt='logo' />
            <div className='login'>
                <nav>
                    <input className='username' type='text' placeholder='Enter email'  onChange = {handleChange("email")} />
                    <input className='username' type='password' placeholder='Enter password'  onChange = {handleChange("password")} />
                    <Button loading={loading} id='loginn' onClick={onSubmit} >Login</Button><br/>
                    <span className='error'>{err} </span> 
                    <p className='create'>Don't have an account? 
                    <div className="dropdown">
                        <a href='#' className='register'> Register here</a> 
                        <div className="dropdown-content">
                            <a href='/supplier' >Supplier Registration</a>
                            <a href='/pm'>PM Registration</a>
                        </div>
                    </div>
                    
                    <Link className='forgot'>Forgot password?</Link> </p>
                </nav> 
            </div>
            {performRedirect()} 
        </div>
    )
}

export default Navbar;
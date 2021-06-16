import React, {useState} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr' 
import { signup } from '../../Helpers/auth/index'
import { Link } from 'react-router-dom'
import Button from 'reactstrap-button-loader';
import swal from 'sweetalert';



const Register = () => {


     const [values, setValues] = useState({
          companyName: "",
          email: "",
          password: "",
          error: "",
          success: false,
          is_supplier: true,
          RegistrationNo : "",
          phone : "",
  
      });
    
  
      const {name, email, password, RegistrationNo , phone , error,is_supplier=true, success, companyName  } = values;
  
      const [emails, setEmails] = useState('')
      const [pass, setPass] = useState('')
      const [loading, setLoading] = useState(false)
      const [reTypeEmail, setRetypeEmail] = useState('')
      const [reTypePassword, setReTypePassword] = useState('')
       
      const [terms, setTerms] = useState(false)
      const [term, setTerm] = useState('')
  
      const handleChange = name => event => {
          setValues({...values, error: false, is_supplier: true, [name]: event.target.value})
      };
  
  
  
      const onSubmit = (e) => {
       
        e.preventDefault()
        setLoading(true)
        if(email.trim() !== reTypeEmail.trim() || password.trim() !== reTypePassword.trim()){
            setLoading(false)
            return
        }
        else if(!terms){
            setLoading(false)
            setTerm('You must accept terms and conditions')
            return
        }
        setTerm('')
        setValues({...values, error: false, is_supplier: true})

        signup({companyName, email, password, is_supplier,RegistrationNo,phone })
        .then((data) =>{
            console.log("DATA", data)
            setLoading(false)
            localStorage.setItem('email', data.email)
            if(data.email === email){
                setValues({
                    ...values,
                    companyName: "",
                    email: "",
                    password:"",
                    error: "",
                    success: true
                })
            } else {
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
          return(
              <div className="alert alert-success"
              style={{display: success ? "":"none"}} id = "sucess-msg">
                 <center>Account created. Clink the link below</center> 
                  <center id ="verifylink"><button id = "verifybutton"><Link to="/supplier/emailverify"> Verify Now</Link></button></center>
              </div>
          )
      }
  
  
      const errorMessage = () => {
          return(
              <div className="alert alert-danger"
              style={{display: error ? "":"none"}}>
                  Check all fields again
              </div>
          )
      }

      const onEmail = ()=>{

        if(email.trim() !== reTypeEmail.trim()){
            setEmails('Emails do not match')
        }
        else{
            setEmails('')
        }
        }
    
       const onPassword = ()=>{
        if(password.trim() !== reTypePassword.trim()){
            setPass('Passwords do not match')
        }
        else{
            setPass('')
        }
        }

        const handleChangee = (e)=> {
            //var checked = e.target.checked;
            setTerms(e.target.checked)
           // console.log(checked)
          }
      

    return(
         <>
          <Navbarr/>
          <div id = "container">
         
          <aside id = "sideBar">
            
            
               <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
            
          </aside>
         {/* <div id = "bigline"></div> */}
        <section id = "RegisterBar">
              
                  <h4 id = "headText">Supplier Registration</h4>
                  {successMessage()}
                  {errorMessage()}
                  <br/>
                  <label id ="formLabel">Company Name</label><br/>
                  <input id ="formStyle" type = "text" required={true}  onChange = {handleChange("companyName")} placeholder = "Company Name"/><br/><br/>
                  <label id = "formLabel">Company Registration No</label><br/>
                  <input id = "formStylee" type = "number" required={true} onChange = {handleChange("RegistrationNo")} placeholder = "Company Registration No"/><br/><br/>
                  <label id = "formLabel">Company Telephone</label><br/>
                  <input id = "formStylee" type = "tel" required={true} onChange = {handleChange("phone")}  placeholder = "Company Telephone"/><br/><br/>
                  <label id = "formLabel">Company Email</label><br/>
                  <input id ="formStylee" type = "email" required={true} onChange = {handleChange("email")}  placeholder = "Company Email"/><br/><br/>
                  <label id = "formLabel">Re-type Company Email</label><br/>
                  <input id = "formStylee" type = "email" required={true} onChange ={(e)=>{
                      setRetypeEmail(e.target.value)
                  }} placeholder ="Company Email" onBlur={onEmail}/>
                  <br/> 
                    <span style={{color: 'red', marginBottom: 15 }}>{emails} </span>
                  <br/>
                  <label id = "formLabel">  Password</label><br/>
                  <input id = "formStylee" required={true} onChange = {handleChange("password")}  type="password" placeholder = " Password"/><br/><br/>
                  <label id = "formLabel">  Re-type Password</label><br/>
                  <input id = "formStylee" required={true} onChange = {(e)=>{
                      setReTypePassword(e.target.value)
                  }} onBlur={onPassword} type="password" placeholder ="Re-type Password"/>
                  <br/>    
                    <span style={{color: 'red', marginBottom: 15 }}>{pass} </span>
                  <br/><br/>
                  <input type ="checkbox" defaultChecked={terms} id="check" onChange={handleChangee}/>
                  <label id ="checkRemember"><b>Please accept the Terms & Conditions</b></label>
                  <br/><span style={{color: 'red', fontSize: 15}}>{term} </span>
                  <br/><br/>

                 
                  <Button onClick={onSubmit} id="buttonStyleRegister" loading={loading}>Continue 
                  </Button>

              
          </section>

          </div>
          <div id ="container">
          <footer id="mainFooter">
            <h4 id = "footerTag">&copy;Sterlingtech 2021</h4>
          </footer>
          </div>
         </>


    )



}

export default Register
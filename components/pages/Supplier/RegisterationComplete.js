import axios from 'axios'
import React , {useEffect , useState} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr'
import {API} from '../../Helpers/environment/backend';
import { authenticate, isAuthenticated, signin } from '../../Helpers/auth/index'
import { signout} from '../../Helpers/auth/index'
import {AiOutlineCheck} from 'react-icons/ai'
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom'




const RegistrationComplete = () => {

   const [userr , setUserr] = useState('')
   const [password , setPassword]  = useState('')
   const name = window.localStorage.getItem('name')

   useEffect(() => {
     Userr()
   } , [])

  const history = useHistory()



   const onSignout = () => {
      signout()
      history.push({
        pathname : "/"
      })
     }



   const Userr = () => {

      axios.get(`${API}user/user/${localStorage.getItem('id')}/`)
      .then(res => {
         console.log(res)
         setUserr(res.data)
      })
      .catch(err => {
         console.log(err)
      })
   }
   
  

   const onSubmit = (e) => {

     e.preventDefault()

     history.push("/supplier/dashboard")




     
     




   }
   
   


 return (

 

        <>
       <Navbarr one = {<AiOutlineCheck size = '1.2em' color='black' />} two = {<AiOutlineCheck size = '1.2em' color='black'/>} three = {<AiOutlineCheck size = '1.2em' color='black'/>} four = {<AiOutlineCheck size = '1.2em' color='black'/>} five = {<AiOutlineCheck size = '1.2em' color='black'/>} six = {<AiOutlineCheck size = '1.2em' color='black'/>} seven = {<AiOutlineCheck size = '1.2em' color='black'/>} eight = {<AiOutlineCheck size = '1.2em' color='black'/>}/>
       <div id ="container">
        <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
        </aside> 
        <section id = "RegisterBar">
        <h4>Registration Complete</h4>
      <span style={{marginLeft: '30%', position: 'absolute', fontSize: 17}}>Hi, {name }
      <button  className='backed' onClick={onSignout} > Logout</button></span>
        <br/><br/><br/><br/>
      
       

        <h6>Thank you for registering and activating your account with SupplierStack</h6>
        <br/><br/><br/>
        
        <div id = "CompleteRegContainer">

        <div id = "CompleteRegSS">
           Company : <input id = "CompleteRegCompanyFormStyle" readOnly={true} value={userr.companyName} type = "text" placeholder = "Company"/><br/><br/>
        </div>
        <br/>
        <div id = "CompleteRegSS">
           SS ID : <input id = "CompleteRegSSFormStyle" readOnly={true} value={userr.sdxNumber} type = "text" placeholder = "SSID"/><br/><br/>
        </div>
        <br/>
        <div id = "CompleteRegPassword">
           Password : <input id = "CompleteRegPasswordFormStyle" onChange = {(e) => {
              setPassword(e.target.value)
           }} type = "password" placeholder = "Password"/><br/><br/>
        </div>


        </div>

        <br/><br/><br/><br/>
        <button  id = "buttonStyleRegister" onClick = {onSubmit}>Login To Dashboard</button>



        
        


        </section>

        </div>

        </>


 )

}

export default RegistrationComplete

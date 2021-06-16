import React , {useEffect , useState} from 'react'
import Navbarr from '../../layouts/navbarr'
import { AiOutlineCheck } from 'react-icons/ai'
import '../../../styles/pages/supplierStack.css'
import {Link} from 'react-router-dom'


const EmailVerify = () => {


  const [email , setEmail] = useState('')

    useEffect(() => {
      const myemail = localStorage.getItem('email')
      setEmail(myemail)

  } , [])
    return (
        <>
        <Navbarr one={<AiOutlineCheck size='1.2em' color = 'black'/> }/>
          <div id = "container">
          
          <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
          </aside>

          

         <section id = "RegisterBar">
          <h3 id ="emailword">
          <h2 id = "emailHeader"> Please verify your email</h2><br/><br/><br/>

          We sent an email to<br/><br/>
          {email}<br/><br/><br/>
          Just click on the email to continue the registration process
          if you do not see it, you may need to check your spam folder.<br/><br/><br/>


          Still cant find the email<br/><br/><br/>

          <button id = "buttonStyleEmailVerify">Resend Email</button><br/><br/><br/>
          Need help?<Link to ='#' id ="signUp"><span style={{color: '#73acbd', fontWeight: 'bold', fontSize: 15, marginLeft: 10}}>Contact Us</span></Link>
          
          
          
          </h3>
        
         </section>

        < div id = "container"><br/><br/>
          <footer id ="mainFooter">
            <h4 id = "footerTag">&copy;Sterlingtech 2021</h4>
          </footer>
          </div>

        </div>


        </>

    )


}

export default EmailVerify
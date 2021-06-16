import React ,{useState , useEffect} from 'react'
import NavbarrPm from '../../layouts/navbarrPm'
import '../../../styles/pages/supplierStack.css'



const EmailVerifyPm = () => {
  const [email , setEmail] = useState('')

  useEffect(() => {
    const myemail = localStorage.getItem('email')
    setEmail(myemail)

} , [])

    return (
        <>
        <NavbarrPm/>
          <div id = "container">
          
          <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
          </aside>

          

         <section id = "RegisterBar">
          <h3 id ="emailword">
          <h2 id = "emailHeader"> Please verify your Email</h2><br/><br/><br/>

          we sent an email to<br/><br/>
          {email} <br/><br/><br/>
          just click on the email to continue the registration process
          if you do not see it, you may need to check your spam folder.<br/><br/><br/>


          still cant find the email<br/><br/><br/>

          <button id = "buttonStyleEmailVerify">Resend Email</button><br/><br/><br/>
          Need help?Contact Us
          
          
          
          </h3><br/><br/>
        
         </section>

        < div id = "container">
          <footer id ="mainFooter">
            <h4 id = "footerTag">&copy;Sterlingtech 2021</h4>
          </footer>
          </div>

        </div>


        </>

    )


}

export default EmailVerifyPm
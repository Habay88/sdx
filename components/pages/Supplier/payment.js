import React,{useState, useEffect} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr'
import {AiOutlineCheck} from 'react-icons/ai'
import { FlutterWaveButton } from 'react-flutterwave';
import { API  , updateStep} from '../../Helpers/environment/backend';
import {useHistory , Link} from 'react-router-dom'
import {signout} from '../../Helpers/auth/index'
import axios from 'axios'
import Loader from "react-loader-spinner";




const Payment = () => {

    const name = window.localStorage.getItem("name")
    const [filee, setFilee] = useState('')
    const[id , setId] = useState(0)
    const[payment , setPayment] = useState({sup : 0 , amount : 0 })
    const [email , setEmail] = useState('')
    const [namee, setName] = useState('')
    const [size, setSize] = useState('')
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(true)
    const [company, setCompany] = useState([])
    const [product, setProduct] = useState([])
    const [able, setAble] = useState(false)
   

    const history = useHistory()

    useEffect(()=>{
     
      const idd = localStorage.getItem('id')
      setId(parseInt(idd))
      const email = localStorage.getItem('email')
      setEmail(email)
      getUserr()
      getPm()

       },[])

       const getUserr = ()=>{
         axios.get(`${API}product/product/getProductPerSupplier/?id=${localStorage.getItem('id')}`)
         .then(res => {
           console.log(res.data)
           setProduct(res.data)
         })
         .catch(err => console.log(err))
       }
       
       const back = () => {
        history.push("/supplier/addproducts")
      }


       const getPm = () => {
         axios.get(`${API}user/procurementmanager/getProcurementManagerPerSupplier/?id=${localStorage.getItem('id')}`)
         .then(res => {
           console.log(res.data)
          setCompany(res.data)
        })
        .catch(err => console.log(err))
       }

       const postReceipt = (file) => {
       

       var fd = new FormData()
       fd.append('sup' , localStorage.getItem('id'))
       fd.append('name' , name)
       fd.append('receipt' , file)
       for (var pair of fd.entries()) {
       console.log(pair[0]+ ', ' + pair[1]); 
       }

       axios({
        url : `${API}payment/payment/`,
        method : 'POST',
        headers: {
        'content-type': 'multipart/form-data',
        },
        data : fd
       })
    
      .then((res) =>  {
      if(res.status < 400){
        setStatus('Your payment is in review, we would get back to you through your email')
        setAble(true)
      }
      else{
        setStatus('Something went wrong, try again')
      }
       
        })
      .catch(err => {
       console.log(err)
      })
       }


       const config = {
        public_key: 'FLWPUBK-105a143a1f3e1f3552ae5f887d1330e1-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'sodipogideonolawale@gmail.com',
          phonenumber: '+2348108513978',
          name: 'Sodipo Gideon',
        },
        customizations: {
            title: 'SterlingTech',
            description: 'Payment for items in cart',
            logo: '',
          }
        }

        const fwConfig = {
            ...config,
            text: 'Pay with Flutterwave!',
            callback: (response) => {
              let bodyy = {
                sup : id,
                amount : response.amount,
                name : name,
                created_at :new Date(Date.now()).toString()
                }
             console.log(bodyy)
             let options = {
                method : "POST",
                headers : {
                  Accept : "application/json",
                  "content-type" : "application/json"
                },
                body : JSON.stringify(bodyy)
                 }
                 console.log(bodyy)
                 let statuss;
                 return fetch(`${API}payment/payment/`,options)
                 .then(res => {
                  statuss = res.status
       
                 })
                 .then(() => {
                  if(statuss < 400){
                    alert("payment details has been saved")
                    updateStep(3,id)
                    history.push({
                      pathname : "/supplier/documents"
                    })
                  
                  }
                  else {
                      alert("payment details has not been saved")
                  }
                })
                 .catch(err => console.log(err))
                 },
            onClose: () => {},
          };


    const onSignout = () => {
        signout()
        history.push({
          pathname : "/"
        })
       }

   const Continue = ()=>{
    updateStep(3,id)
    history.push({
      pathname : "/supplier/documents/"
    })
   }    

       const clickMe = ()=>{
        const hello = document.getElementById('image')
        hello.click();
      }

      const onFile = (e) => {
      
        setFilee(e.target.files[0])
         setName(e.target.files[0].name)  
         setSize(e.target.files[0].size+'kb') 
         postReceipt(e.target.files[0])
      }

    return(
       <>
        <Navbarr one = {<AiOutlineCheck size = '1.2em' color = 'black'/>} two = {<AiOutlineCheck size = '1.2em' color = 'black'/>} three = {<AiOutlineCheck size = '1.2em' color = 'black'/>} four = {<AiOutlineCheck size = '1.2em' color = 'black'/>} five = {<AiOutlineCheck size = '1.2em' color = 'black'/>} />
        <div id ="container">
        <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
        </aside> 
         <section  id = "RegisterBarPayment">
         <h3 id ="PaymentHeader">Make Payment
         <span style={{marginLeft: '15%', position: 'absolute', fontSize: 17}}>Hi, {name}
               <button  className='backed' onClick={onSignout} > Logout</button>
               <span style={{marginLeft: 10}}><button className="backed" onClick = {back}>Back</button></span> 
               </span>
         </h3><br/>
         <h3 id ="PaymentHeaderChoose"> Choose a payment method </h3>

         <div id = "PaymentSubContainers2"><br/><b/><br/>
         <div id = "PaymentSubSubContainer1">
         <center id = "PaymentButton"><FlutterWaveButton {...fwConfig}/></center> 
         </div>
         <div id = "PaymentSubSubContainer2">
          <center>Pay with Bank Transfer</center>
          <hr className="payHr"/>
          <label id = "formLabel">Name : Balogun Ademola</label><br/>
          <label id = "formLabel">Account No : 0209549707</label><br/>
         <label id = "formLabel">Bank Name : Gt Bank</label>
         </div>
         <div id = "PaymentSubSubContainer2">
             <button id = "buttonStylePaymentUpload" onClick={clickMe}>Upload Payment Receipt</button>
             <input
              type='file'
              hidden='hidden'
             id='image'
             onChange={onFile}
            
             />
         </div><br/>
         <p style={{color: 'black'}}>{namee} {size}</p>
         <p style={{color: 'black'}}>{status} </p>
        
        </div>

        <div id = "PaymentSubContainers1"><br/>
        <div id = "PaymentSubSubContainerSummary" >
      <div>
      <h6>Products</h6>
         {product && product.map(i =>(
           <>
           <span style={{color: 'black'}}>{i.fields.productName} </span><br/>
           </>
         ))}
      
      </div>
      <hr/>
      <div>
      <h6>Companies</h6>
      {company && company.map(i => (
        <>
        <span style = {{color : 'black'}}>{i.fields.companyName}</span><br/>
        </>

      ))}
        
      </div>
    
        </div>
        <div id = "PaymentBillingContainer">
           Annual Billing : &nbsp;&nbsp;&nbsp; 70,000 &nbsp;<br/> Know your Features
        </div>
        
        </div>
        <div id ="PaymentSubContainerButton">
         <button id="buttonStylePaymentUpload" onClick={Continue} disabled={able} >Continue</button><br/><br/>
        

         </div>
       </section>


          </div>

       </>
    )

    
}
export default Payment


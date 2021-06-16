import React , {useState , useEffect} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr'
import classnames from 'classnames';
import swal from 'sweetalert';
import { signout} from '../../Helpers/auth/index'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { API, updateStep } from '../../Helpers/environment/backend';
import {AiOutlineCheck} from 'react-icons/ai'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from 'reactstrap-button-loader';
import moment from 'moment'





const CompanyDetails = () => {
  const [list, setList] = useState([]);
  const name = window.localStorage.getItem('name')
    const [values, setValues] = useState({
        
      
      companyName : '',
      industry: '',
      contactJobTitle : '',
      contactName : '',
      Supplier : '' , 
      firstName : '',
      LastName : '',
      contactDept : '',
      contactPhone : '',
      streetAddress : '',
      email : '',
      companyPhone : '',
      companyEmail : '',
      dateOfRegistration : '',
      RegistrationNo : ''

    })

    const [phase, setPhase] = useState(1)

    const [companyName, setCompanyName ]= useState('')
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [contactEmail , setContactEmail] = useState('')
    const [contactAddress , setContactAddress] = useState('')
    const [contactWebsite , setContactWebsite] = useState('')
    const [dateOfRegistration , setDateOfRegistration] = useState('')
    const [companyEmail , setCompanyEmail] = useState('')
    const [companyTelephone , setCompanyTelephone] = useState('')
    const [firstName , setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department , setDepartment] = useState('')
    const [contactPhone , setContactPhone] = useState('')
    const [id , setId] = useState('')
    const [contactJobTitle, setContactJobTitle] = useState('')
    const [loading, setLoading] = useState(true)
    const [userr, setUserr] = useState({})
    const [industryName , setIndustryName] = useState('')
    const [getid , setGetId] = useState(0);
    
    const history = useHistory()

    useEffect(()=>{
      const mail = localStorage.getItem('email')
      const password = localStorage.getItem('password')
      setEmail(mail)
      setPassword(password)
      const id = localStorage.getItem('id')
      setId(parseInt(id))
       getIndustries()
       getUserr()
      }, [])

    const getIndustries = () => {
      axios.get(`${API}industry/industry/`)
      .then(res =>{
        console.log(res.data)
        setList(res.data)
      })
      .catch(err => console.log(err))
    }

    const getUserr = ()=>{
      axios.get(`${API}user/user/${localStorage.getItem('id')}/`)
      .then(res =>{
       // console.log(res.data)
        setUserr(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let statuss;
        setValues({...values})
       let user = {

        companyName : userr.companyName,
        RegistrationDate : userr.dateOfRegistration,
        industry : industryName,
        supplier : `${API}user/user/${id}/`,
        contactJobTitle : contactJobTitle,
        firstName : firstName,
        LastName : lastName,
        contactDept  : department,
        contactPhone : contactPhone,
        companyEmail : userr.email,
        companyPhone : userr.phone,
        email : contactEmail,
        streetAddress : contactAddress,
        companyWeb : contactWebsite ,
        RegistrationNo : userr.RegistrationNo,
        
       }
        console.log(user)
       
        return fetch(`${API}user/supplier/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
          statuss = res.status
          return res.json()

        
        })
        .then(()=>{
          let id = localStorage.getItem('id')
         updateStep(1,id)
         if (statuss < 400){
          swal("Company details saved sucessfully","You clicked the button!", "success");
           history.push({
            pathname : "/supplier/addproducts"
    
          })
         }
         else{
          swal("Company details did not save!", "You clicked the button!", "error");
         }
        
        })
        .catch(err => console.log(err));
     }

    const onSignout = () => {
      signout()
      history.push({
        pathname : "/"
      })
     }





return(
      <>
    <Navbarr  one = {<AiOutlineCheck size = '1.2em' color = 'black'/>} two = {<AiOutlineCheck size = '1.2em' color = 'black'/>} three = {<AiOutlineCheck size = '1.2em' color = 'black'/>}/>
    <div id = "container">

    <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
    </aside>
  
    <section id="RegisterBar">
      
      <div>
      <button style = {{padding : '10px' }} onClick={()=> setPhase(1)}>Company Details</button>
      <button style = {{marginLeft : '5px' , padding : '10px'}} onClick={()=> setPhase(2)}>Company Person</button>
      
    </div><hr/>
        
        {phase === 1 ? 
         <>
         <h3 id="companyDetailsHeader">Company Details
             <span style={{marginLeft: '16%', position: 'absolute', fontSize: 17}}>Hi, {name }
                <button  className='backed' onClick={onSignout} > Logout</button>
             </span>
             </h3>
            
             <br/>
                   <label id="formLabel">Company Name</label><br/>
                   <input id="formStyle" readOnly={true} value={userr.companyName} type="text" placeholder="Company Name"/><br/><br/>
                   <label id="formLabel">Company Registration No</label><br/>
                   <input id="formStyle" readOnly={true} value={userr.RegistrationNo} type = "text"  placeholder = "Company Registration No"/><br/><br/>
                   <label id="formLabel">Date of Registration</label><br/>
                   <input id="formStyle" readOnly={true} value={moment(userr.created_at).format('DD/MM/YYYY')}  placeholder = "Date of Registration"/><br/><br/>
                  <label id = "formLabel">Industry</label><br/>
                  <select id = "formStyleSegmentIndustry" value={industryName} onChange={(e)=>{
                           setIndustryName(e.target.value)
                         }}
                         >
                         <option value="">-- choose your industry --</option>
                         {list && list.map((e,i)=>(
                           <option key={i} value={e.url}>{e.industry_name} </option>
                         ))}
 
                   </select><br/><br/>
                   <label  id = "formLabel">Company Address</label><br/>
                   <input onChange={(e)=>{
                           setContactAddress(e.target.value)
                         }} id = "formStyle" type = "text" placeholder = "Company Address"/><br/><br/>
                   <label id = "formLabel">Company Telephone</label><br/>
                   <input  id="formStylee" type="tel"  value={userr.phone} readOnly={true} placeholder="Company Telephone"/><br/><br/>
                   <label id = "formLabel">Company Email</label><br/>
                   <input id="formStylee" readOnly={true} value={userr.email} type="email" placeholder="Company Email"/><br/><br/>
                   <label id = "formLabel">Company Website</label><br/>
                   <input onChange={(e)=>{
                           setContactWebsite(e.target.value)
                         }} id = "formStylee" type = "url" placeholder = "Company Website"/><br/>
                   <button id = "buttonStyleRegister" onClick={()=> setPhase(2)} >Continue</button>
                   </> :
                    <>
                    <h3 id = "companyDetailsHeader">Company Person
                    <span style={{marginLeft: '16%', position: 'absolute', fontSize: 17}}>Hi, {name }
                           <button  className='backed' onClick={onSignout} > Logout</button></span>
                    </h3><br/>
                   
                              <label id = "formLabel">First Name</label><br/>
                              <input value={firstName} onChange={(e)=>{
                                      setFirstName(e.target.value)
                                    }} id = "formStyle" type = "text" placeholder = "First Name"/><br/><br/>
                              <label id = "formLabel">Last Name</label><br/>
                              <input value={lastName} onChange={(e)=>{
                                      setLastName(e.target.value)
                                    }} id = "formStyle" type = "text"  placeholder = "Last Name"/><br/><br/>
                              <label id = "formLabel">Job Title</label><br/>
                              <input value={contactJobTitle} onChange={(e)=>{
                                      setContactJobTitle(e.target.value)
                                    }} id = "formStyle" type = "text" placeholder = "Job title"/><br/><br/>
                              <label id = "formLabel">Department</label><br/>
                              <input value={department} onChange={(e)=>{
                                      setDepartment(e.target.value)
                                    }}  id = "formStyle" type = "text" placeholder = "Department"/><br/><br/>
                              <label id = "formLabel">Telephone</label><br/>
                              <input value={contactPhone} onChange={(e)=>{
                                      setContactPhone(e.target.value)
                                    }}  id = "formStylee" type = "tel" placeholder = "Telephone"/><br/><br/>
                              <label id = "formLabel">Email</label><br/>
                              <input value={contactEmail} onChange={(e)=>{
                                      setContactEmail(e.target.value)
                                    }}  id = "formStylee" type = "email" placeholder = "Email"/><br/><br/>
            
                              <button onClick={onSubmit} id = "buttonStyleRegister">Continue</button><br/>
            
            
                              </>
                           }
            
          </section>
         {/* <div id = "container">
          <footer id ="mainFooter">
            <h4 id = "footerTag">&copy;Sterlingtech 2021</h4>
          </footer>
          </div> */}
    </div>



    </>
)


}

export default CompanyDetails


import React,{useEffect , useState} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr'
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";
import '../../../app.css'
import Loader from "react-loader-spinner";
import axios from 'axios'
import { API } from '../../Helpers/environment/backend';
import {useHistory} from 'react-router-dom'
import { authenticate, isAuthenticated, signout} from '../../Helpers/auth/index'
import {Link} from 'react-router-dom'

let list = []
let myList = [];






const Approval = () => {

  const [loading, setLoading] = useState(true)
  const [pending, setPending] = useState([]);
  const [document, setDocument] = useState([])
  const [id, setId] = useState()
  
  const [msg, setMsg] = useState('')

  const name = window.localStorage.getItem('name')

  const history = useHistory()
  
  useEffect(()=>{
     getUserId(localStorage.getItem('id'))
     //getSupplier(localStorage.getItem('id'))
  },[])

  const onSignout = () => {
    signout()
    history.push({
      pathname : "/"
    })
   }

   const getUserId = (idd)=>{
    let id;
    axios.get(`${API}user/supplier/getId/?id=${idd}`)
    .then(res => {
         id = res.data
    })
    .then(()=>{
         getSupplier(id)
    })
    .catch(err => console.log(err))
}

  const getSupplier = (id)=>{
    
       axios.get(`${API}user/supplier/${id}/`)
       .then(response =>{
         console.log(response.data.document)
            list = response.data.document
            setDocument(response.data.document)
       })
       .then(()=>{
           list.forEach(e => {
               axios.get(e)
               .then(data =>{
                   myList.push(data.data)
                   setPending([...myList])   
                  console.log(pending)
               })
               .catch(err => console.log(err))
           }) 
            setLoading(false)
       })
       .catch(e => console.log(e))
       
   }

const onUpload = (e,idd)=>{
  var fd = new FormData()

  fd.append('doc', e.target.files[0])
  fd.append('status', '2')
   axios({
      url : `${API}documents/documents/${idd}/`,
      method : 'PUT',
      headers: {
      'content-type': 'multipart/form-data',
      },
      data : fd
  })
  .then((res) =>  {
     
       console.log(res)
       if(res.status < 400){
            setMsg('Your file has been uploaded successfully')  
            setTimeout(() => {
               setMsg('')  
            }, 3000);
       }
     
    })
    .catch(err => console.log(err))
}

 
    return (

      <>
        <Navbarr one = {<AiOutlineCheck size = '1.2em' color='gray' />} two = {<AiOutlineCheck size = '1.2em' color='gray'/>} three = {<AiOutlineCheck size = '1.2em' color='gray'/>} four = {<AiOutlineCheck size = '1.2em' color='gray'/>} five = {<AiOutlineCheck size = '1.2em' color='gray'/>} six = {<AiOutlineCheck size = '1.2em' color='gray'/>} seven = {<AiOutlineCheck size = '1.2em' color='gray'/>}/>
        <div id ="container">
        <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
        </aside> 

        <section id = "RegisterBar">
            <h3>Waiting for Approval
            <span style={{marginLeft: '16%', position: 'absolute', fontSize: 17}}>Hi, {name}
               <button  className='backed' onClick={onSignout} > Logout</button>
            </span>
            </h3>
            {/* <div id = "registerName"><b><h4>Hi {name}</h4></b></div><br/><br/>
            <button id = "ApprovalButtonBack"> <Link to = '/supplier/documents/' id = "addProductLinkStyle" >Back</Link></button><br/><br/>
            <button id = "ApprovalButtonLogout" oonClick = {onSignout}>Logout</button> */}
            <div>
            {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                
                /></div> :
                <table className='tarif'>
                   <thead className='thead'>
                        <td >Document Name</td>
                        <td >Status</td>
                        <td>Reason</td>
                        <td >File</td>
                  </thead>  
                <tbody>  
                {pending && pending.map(item=>{
                  let status = item.status === '0' ? <AiOutlineCheck size={23} /> : item.status === '1' ? <AiOutlineClose size={23} /> : <span>Pending</span>
                  let edit = item.status === '1' ? (<><input type='file' className="hidden" onChange={(e)=> onUpload(e,item.id)} /> </>) : null
                    return(
                      <tr key={item.id} className='array'>  
                      
                      <td >{item.documentName} </td>  
                      <td >{status}</td>  
                      <td >{item.reason}  </td>  
                      <td >{edit}</td>
                      </tr>
                    )
                    
                  })}
                </tbody>  
                  </table>
            }
            
           
             </div>


       
            <h6>You will be notified when your documents has been approved</h6><br/>

            Been here for a while?<br/><br/>
            <button id ="buttonStyleRegister">Contact Us</button>

        </section>
       </div>

      </>

    )



}

export default Approval

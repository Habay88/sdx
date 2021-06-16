import React , {Component} from 'react'
import '../../../styles/pages/supplierStack.css'
import Navbarr from '../../layouts/navbarr'
import {AiOutlineCheck} from 'react-icons/ai'
import  axios from 'axios'
import { API, updateStep } from '../../Helpers/environment/backend';
import {signout} from '../../Helpers/auth/index'
import Button from 'reactstrap-button-loader';

let statuss;
class Document extends Component  {
  
  
  
  constructor(props) {
    super(props)

    this.state = {
         id  : '',
         CAC : '',
         doc2 : '',
         doc1 : '',
         doc3 : '',
         doc4 : '',
         doc5 : '' , 
         doc6 : '',
         doc7 : '',
         doc8 : '',
         doc9 : '',
         doc10 : '' ,
         doc11 : '' , 
         doc12 : '',
         statusdoc : 'required',
         statuscac1 : 'required',
         statuscac2 : 'required',
         statuscac3 : 'required',
         statuscac4 : 'required',
         statuscac5 : 'required',
         statuscac6 : 'required',
         statuscac7 : 'required',
         statuscac8 : 'required',
         statuscac9 : 'required',
         statuscac10 : 'required',
         statuscac11 : 'required',
         statuscac12 : 'required',

         name : '',
         loading: false
        }
  
}


componentDidMount(){
  let id = localStorage.getItem('id')
  let name = window.localStorage.getItem("name")
  this.setState({
    name : name
  })
  this.setState({
    id : parseInt(id)
  })
   
}

     back = () => {
         this.props.history.push("/supplier/payment")
     }
  
    onSignout = () => {
     signout()
    this.props.history.push("/");
     }



 onChangee = (e) => {
     
     this.setState({
       CAC: e.target.files[0],
       statusdoc: e.target.files[0].name
     })
     // this.setState({ files: [...this.state.files, ...e.target.files] })
 }
     
 onChangee2 = (e) => {
     
     this.setState({
       doc1 : e.target.files[0],
       statuscac1: e.target.files[0].name
       })
     // this.setState({ files: [...this.state.files, ...e.target.files] })
    }
     
 onChangee3 = (e) => {
     this.setState({
      doc2 : e.target.files[0],
      statuscac2: e.target.files[0].name
      })
   // this.setState({ files: [...this.state.files, ...e.target.files] })
 }

 onChangee4 = (e) => {
  this.setState({
   doc3 : e.target.files[0],
   statuscac3: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee5 = (e) => {
  this.setState({
   doc4 : e.target.files[0],
   statuscac4: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}

onChangee6 = (e) => {
  this.setState({
   doc5 : e.target.files[0],
   statuscac5: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee7 = (e) => {
  this.setState({
   doc6 : e.target.files[0],
   statuscac6: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee8 = (e) => {
  this.setState({
   doc7 : e.target.files[0],
   statuscac7: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee9 = (e) => {
  this.setState({
   doc8 : e.target.files[0],
   statuscac8: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee10 = (e) => {
  this.setState({
   doc9 : e.target.files[0],
   statuscac9: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee11 = (e) => {
  this.setState({
   doc10 : e.target.files[0],
   statuscac10: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee12 = (e) => {
  this.setState({
   doc11 : e.target.files[0],
   statuscac11: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}
onChangee13 = (e) => {
  this.setState({
   doc12 : e.target.files[0],
   statuscac12: e.target.files[0].name
   })
// this.setState({ files: [...this.state.files, ...e.target.files] })
}

  total = () =>{
    this.setState({loading: true})
   this.onSubmit()
   this.onSubmitDoc1()
   this.onSubmitDoc2()
   this.onSubmitDoc3()
   this.onSubmitDoc4()
   this.onSubmitDoc5()
   this.onSubmitDoc6()
   this.onSubmitDoc7()
   this.onSubmitDoc8()
   this.onSubmitDoc9()
   this.onSubmitDoc10()
   this.onSubmitDoc11()
   this.onSubmitDoc12()
   updateStep(4, this.state.id)
 }

 onSubmit = () => {
       
  var fd = new FormData()
  fd.append('id', this.state.id)
  fd.append('doc', this.state.CAC)
  fd.append('documentName', 'CAC Certificate')
  fd.append('status' , 2 )
 
axios({
      url : `${API}documents/documents/postDocument/`,
      method : 'POST',
      headers: {
      'content-type': 'multipart/form-data',
      },
      data : fd
  })
  .then((res) =>  {
     
     console.log(res)
    })
    .catch(err => console.log(err))

}


onSubmitDoc1 = () => {

   var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc1)
   fd.append('documentName', 'VAT Registration Certificate')
   fd.append('status' , 2 )   

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   .then((res) =>  {
      
      console.log(res)
     })
     .catch(err => console.log(err))

}


onSubmitDoc2 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc2)
   fd.append('documentName', 'Bank Reference Letter')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}
onSubmitDoc3 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc3)
   fd.append('documentName', 'Form C02 (Allotment of shares)')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc4 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc4)
   fd.append('documentName', 'Form C07 (Directors Details)')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}
onSubmitDoc5 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc5)
   fd.append('documentName', 'Recent Tax Clearance certificate')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc6 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc6)
   fd.append('documentName', 'Proof of address/ Utility Bill')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc7 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc7)
   fd.append('documentName', 'Evidence of previous jobs done')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc8 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc8)
   fd.append('documentName', 'DPR Certificate')
   fd.append('status' , 2 )

axios({
       url : `${API}document/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc9 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc9)
   fd.append('documentName', 'Evidence of Compliance with NSITF')
   fd.append('status' , 2 )

axios({
       url : `${API}documents/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc10 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc10)
   fd.append('documentName', 'Evidence of compliance with ITF')
   fd.append('status' , 2 )

axios({
       url : `${API}documents/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}
onSubmitDoc11 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc11)
   fd.append('documentName', 'Company Profile')
   fd.append('status' , 2 )

axios({
       url : `${API}documents/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
      //  this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}

onSubmitDoc12 = () => {

  var fd = new FormData()
   fd.append('id', this.state.id)
   fd.append('doc', this.state.doc12)
   fd.append('documentName', ' Audited Financials Statement')
   fd.append('status' , 2 )

axios({
       url : `${API}documents/documents/postDocument/`,
       method : 'POST',
       headers: {
       'content-type': 'multipart/form-data',
       },
       data : fd
   })
   
   .then((res) =>  {
      statuss = res.status
      console.log("This is the data sent"+fd)
      
     })
     .catch(err => {
      console.log(err)
      console.log(fd)
     })

   .then(() => {
     if (statuss < 400){
      this.setState({loading: false})
       this.props.history.push("/supplier/approval")
     }
     else {
       alert("documents has not saved")
     }
   })

}
   
         
         changeMe = ()=>{
           this.setState({
             loading: true
           })
         }

         clickCac = ()=>{
          const hello = document.getElementById('cac')
          hello.click();
        }

        clickDoc1 = ()=>{
          const hello = document.getElementById('doc1')
          hello.click();
        }

        clickDoc2 = ()=>{
          const hello = document.getElementById('doc2')
          hello.click();
        }
        clickDoc3 = ()=>{
          const hello = document.getElementById('doc3')
          hello.click();
        }

        clickDoc4 = ()=>{
          const hello = document.getElementById('doc4')
          hello.click();
        }
        clickDoc5 = ()=>{
          const hello = document.getElementById('doc5')
          hello.click();
        }
        clickDoc6 = ()=>{
          const hello = document.getElementById('doc6')
          hello.click();
        }
        clickDoc7 = ()=>{
          const hello = document.getElementById('doc7')
          hello.click();
        }
        clickDoc8 = ()=>{
          const hello = document.getElementById('doc8')
          hello.click();
        }
        clickDoc9 = ()=>{
          const hello = document.getElementById('doc9')
          hello.click();
        }
        clickDoc10 = ()=>{
          const hello = document.getElementById('doc10')
          hello.click();
        }
        clickDoc11 = ()=>{
          const hello = document.getElementById('doc11')
          hello.click();
        }
        clickDoc12 = ()=>{
          const hello = document.getElementById('doc12')
          hello.click();
        }
      

    render(){
    return (

        <>
       <Navbarr one = {<AiOutlineCheck size = '1.2em' color = 'black'/>} two = {<AiOutlineCheck size = '1.2em' color = 'black'/>} three = {<AiOutlineCheck size = '1.2em' color = 'black'/>} four = {<AiOutlineCheck size = '1.2em' color = 'black'/>} five = {<AiOutlineCheck size = '1.2em' color = 'black'/>} six = {<AiOutlineCheck size = '1.2em' color = 'black'/>}/>
       <div id ="container">
       <aside id = "sideBar">
            
            
            <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
        </aside> 
         <section  id = "RegisterBarPayment">
           <h3 id = "DocumentHeader">Supplier Documentation
           <span style={{marginLeft: '10%', position: 'absolute', fontSize: 17}}>Hi, {this.state.name }
               <button  className='backed' onClick={this.onSignout} > Logout</button></span>
           </h3>

           <div id = "Table">
               <table id = "DocumentTable">
                  <tr>
                    <th id = "DocumentHead">Documents</th>
                    <th id = "DocumentHead">Status</th>
                    <th id = "DocumentHead">Comments</th>
                    <th id = "DocumentHead">Files</th>
                  </tr>
                  <tr >
                   <td id = "DocumentHead">CAC Certificate</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statusdoc}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input id = "formStyle" type = "file" id="cac" hidden='hidden' placeholder ="upload your file" onChange={this.onChangee} >
                     </input>
                     <button id ="uploadButton" onClick={this.clickCac}>Upload</button>
                   </td>
                   </tr>
                   <tr>
                   <td id = "DocumentHead"> VAT Registration Certificate</td>
                   <td id = "DocumentHead"><button id ="DocumentStatus">{this.state.statuscac1}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input id = "formStyle" type = "file" hidden='hidden' id='doc1' placeholder ="upload your file" onChange={this.onChangee2} ></input>
                     <button id="uploadButton" onClick={this.clickDoc1}>Upload</button>
                   </td>
                   </tr>
                   <tr>
                   <td id = "DocumentHead">Bank Reference Letter</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac2}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc2' placeholder ="upload your file" onChange={this.onChangee3} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc2}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Form C02 (Allotment of shares)</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac3}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc3' placeholder ="upload your file" onChange={this.onChangee4} ></input>
                     <button id="uploadButton" onClick={this.clickDoc3}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Form C07 (Directors Details)</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac4}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc4' placeholder ="upload your file" onChange={this.onChangee5} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc4}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Recent Tax Clearance certificate</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac5}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc5' placeholder ="upload your file" onChange={this.onChangee6} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc5}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead"> Proof of address/ Utility Bill</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac6}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc6' placeholder ="upload your file" onChange={this.onChangee7} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc6}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Evidence of previous jobs done</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac7}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc7' placeholder ="upload your file" onChange={this.onChangee8} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc7}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">DPR Certificate</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac8}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc8' placeholder ="upload your file" onChange={this.onChangee9} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc8}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead"> Evidence of Compliance with NSITF</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac9}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc9' placeholder ="upload your file" onChange={this.onChangee10} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc9}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Evidence of compliance with ITF</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac10}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc10' placeholder ="upload your file" onChange={this.onChangee11} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc10}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Company Profile</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac11}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc11' placeholder ="upload your file" onChange={this.onChangee12} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc11}>upload</button>
                   </td>
                   </tr>

                   <tr>
                   <td id = "DocumentHead">Audited Financials Statement</td>
                   <td id = "DocumentHead"><button id = "DocumentStatus">{this.state.statuscac12}</button></td>
                   <td id = "DocumentHead"><textarea id = "formStyle" type = "text" placeholder="admin only" disabled/></td>
                   <td id = "DocumentHead">
                     <input  id = "formStyle" type = "file" hidden='hidden' id='doc12' placeholder ="upload your file" onChange={this.onChangee13} ></input>
                     <button id ="uploadButton" onClick={this.clickDoc12}>upload</button>
                   </td>
                   </tr>
                   
                   <br/>

                   <Button id = "DocumentContinue" loading={this.state.loading} onClick={this.total}>Continue</Button><br/>
                   <Button id = "DocumentContinue" onClick = {this.back} >Back</Button>
                  
                </table>



           </div>






        </section>


       </div>


        </>
        
    )
    
    }

  }

export default Document

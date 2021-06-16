import React , {useState, useEffect} from 'react'
import { API } from '../../../Helpers/environment/backend'
import axios from 'axios'
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import fileDownload from 'js-file-download'
import './dashboard.css'

let list = []
let myList = [];
let reason = ''

function ApproveDocument({id, name, onBack}) {

    const [pending, setPending] = useState([])
    const [document, setDocument] = useState([])
    const [loading, setLoading] = useState(true)
    const [action, setAction] = useState('')
  
    
    useEffect(()=>{
        myList= []
        setPending([])
        getSupplier()
        console.log(id)
    },[])

    const getSupplier = ()=>{
       
        axios.get(`${API}user/supplier/${id}/`)
        .then(response =>{
            console.log(response)
            list = response.data.document
            setDocument(response.data.document)
        })
        .then(()=>{
            list.forEach(e => {
                axios.get(e)
                .then(data =>{
                    myList.push(data.data)
                    setPending([...myList])
                })
                
            }) 
           // console.log(pending)
             setLoading(false)
        })
        .catch(e => console.log(e))
        
    }

    const onApprove = ()=>{
       
      let data = {
        pendingStatus: 1
      }
      axios({
        url : `${API}user/supplier/${id}/`,
        method : 'PATCH',
        headers: {
        'content-type': 'application/json',
        },
        data : JSON.stringify(data)
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }

    const updateSupplier = ()=>{

        let data = {
            pendingStatus: 2
        }

        axios({
            url : `${API}user/supplier/${id}/`,
            method : 'patch',
            headers: {
            'content-type': 'application/json',
            },
            data : JSON.stringify(data)
           })
           .then(res => console.log(res.status))
           .catch(err => console.log(err))
    }

    const onAccept = (docId)=>{

        let data = {
            status: 0,
            checked: true
        }
        let newData = {}
        axios({
            url : `${API}document/documents/${docId}/`,
            method : 'PUT',
            headers: {
            'content-type': 'application/json',
            },
            data : JSON.stringify(data)
           })
           .then(res => newData = res.data)
           .then(()=>{
            setPending(pending.map(function(item) { return item.id === docId ? newData : item }));
            updateSupplier()
                
           })
           .catch(err => console.log(err))
    }

    const onReject = (docId)=>{

        let data = {
            status: 1,
            checked: true,
            reason: reason
        }

        let newData = {}

        axios({
            url : `${API}document/documents/${docId}/`,
            method : 'PUT',
            headers: {
            'content-type': 'application/json',
            },
            data : JSON.stringify(data)
           })
           .then(res => newData = res.data)
           .then(()=>{
           setPending(pending.map(function(item) { return item.id === docId  ? newData : item }));
            updateSupplier()
           })
           .catch(err => console.log(err))
    }

    const handleDownload = (url, filename) => {
       
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
        .catch(err => console.log(err))
      } 

    const onAction = (e, urll)=>{

        setAction(e.target.value)
        
        if(e.target.value === 'view'){
            let url = urll
            window.open(url, '_blank');
        }
        else if(e.target.value === 'download'){
           var res = urll.split("/");
           handleDownload(urll, res[5])
        }
        else{
            console.log('hello world')
        }
        
    }


    const onDocumentReject = (id)=>{

        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='customUi'>
                  <h2 style={{color: 'white'}}>Are you sure?</h2>
                  <p style={{color: 'white', fontSize: 18}}>You want to reject this file?</p>
                  <button onClick={onClose} className='cancelButton'>No</button>
                  <button className='confirmButton'
                    onClick={() => {
                       onReject(id) 
                      onClose();
                    }}
                  >
                    Yes
                  </button>
                </div>
              );
            }
          });
    }  


    const onDocumentAccept = (id)=>{

        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='customUi'>
                  <h2 style={{color: 'white'}}>Are you sure?</h2>
                  <p style={{color: 'white', fontSize: 18}}>You want to accept this file?</p>
                  <button onClick={onClose} className='cancelButton'>No</button>
                  <button className='confirmButton'
                    onClick={() => {
                      onAccept(id)
                      onClose();
                    }}
                  >
                    Yes
                  </button>
                </div>
              );
            }
          });
    }

    const onReason = (e)=>{

        reason = e.target.value;
        console.log(reason)
    }

    const onRejectDocs = ()=>{
      let data = {
        pendingStatus: 0
      }
      axios({
        url : `${API}user/supplier/${id}/`,
        method : 'PATCH',
        headers: {
        'content-type': 'application/json',
        },
        data : JSON.stringify(data)
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }


    return (
        <>
        
            <h4 className='title'>{name} <span style={{float: 'right', marginRight: 70, fontSize: 20}}>
               <button className='dashhbuton' onClick={ onBack }>Back</button></span> </h4>
            <div className='dashbutton'>
                <div className='history'>
                <div>
                    <button className='dashhbuttonn'>History</button>
                </div>
                <div className='side'>
                <button className='dashhbutton' onClick={onApprove}>Accept</button>
                <button className='dashhbutton' onClick={onRejectDocs}>Reject</button>
                <button className='dashhbutton'>Download</button>
                </div>
                </div><br/>
                {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div>:
                <table>
                <tbody>  
                {pending && pending.map(item=>{
                  let status = item.status === '0' ? <AiOutlineCheck size={23} /> : item.status === '1' ? <AiOutlineClose size={23} /> : null
                    return(
                      <tr className='tr' key={item.id}>  
                      <td className='zero'>o</td>
                      <td >{item.documentName} </td>  
                      <td><div className="btn-group">
                           <button type="button" className="sendButton" onClick={()=> onDocumentAccept(item.id)} >Accept</button>
                           <button type="button" className="sendButton" onClick={()=> onDocumentReject(item.id)}>Reject</button>
                           <select className='reason' onChange={onReason}>
                               <option>Select Reason</option>
                               <option value='blur document'>Blur Document</option>
                               <option value='fake document'>Fake Document</option>
                               <option value='expired document'>Expired Document</option>
                           </select>
                          </div> 
                      </td>  
                      <td> {status} </td>  
                      <td>
                          <select className='reason' onChange={(e) => onAction(e, item.doc)}>
                               <option>Action</option>
                               <option value='view'>View</option>
                               <option value='download'>Download</option>
                               <option value='history'>History</option>
                           </select>
                           </td> 
                      </tr>
                    )
                    
                  })}
                </tbody>  
                  </table>
            }
           
            </div>
        </>
    )
}

export default ApproveDocument;


import React , {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import { API } from '../../../Helpers/environment/backend';
import './dashboard.css'
import ApproveDocument from './approveDocument';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function DocumentsList() {

    const [pending, setPending] = useState([]);
    const [phase, setPhase] = useState(1)
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        
        setPending([])
        getSupplier()    

    },[])

    const getSupplier = async ()=>{
            
        try {
            const response = await axios.get(`${API}user/supplier/`)
           //  console.log(response.data)
            setPending(response.data.filter(e => e.status == 2))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }
    
   const click = (url, name)=>{
        var res = url.split("/");
        var id = res[6]
        setUserId(id)
        console.log(id)
        setName(name)
        setPhase(2)
    }

    const onBack = ()=>{
        setPhase(1)
    }

    const onSendId = (idd)=>{
        
        let data = {
            id: parseInt(idd)
        }

        console.log(data)
        axios({
            url : `${API}user/supplier/getSdxNumber/`,
            method : 'post',
            headers: {
            'content-type': 'application/json',
            },
            data : JSON.stringify(data)
           })
           .then(res => console.log(res))
           .catch(err => console.log(err))
    }

    const onDocumentAccept = (id)=>{

        var res = id.split("/");
        var idd = res[6]
       // console.log(idd)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='customUi'>
                  <h2 style={{color: 'white'}}>Are you sure?</h2>
                  
                  <button onClick={onClose} className='cancelButton'>No</button>
                  <button className='confirmButton'
                    onClick={() => {
                      onSendId(idd)
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


    return (
        <>
        <div style={{marginLeft: 30}}>
        {phase === 1 ? <>
            <h4 className='title'>Pending Approvals</h4>
            <div className='dashbutton'>
                <button className='dashhbutton'>Open</button>
                <button className='dashhbutton'>Progress</button>
                <button className='dashhbutton'>Completed</button>
            <div className='ruler' /><br/>
            {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div>: 
                 <table>
            <thead>  
            <tr className='tr head'>  
            <th></th>  
            <th>Status</th>  
            <th>Company Name</th>  
            <th>Submission Date</th>  
            <th>Docs To Approve</th>
            <th></th>
           </tr>  
           </thead>  

          <tbody>  
          {pending && pending.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr className='tr' key={item.url}>  
                <td className='zero'>o</td>
                <td ><button className='sendButton' onClick={()=> click(item.url, item.companyName)} >{status} </button></td>  
                <td>{item.companyName} </td>  
                <td>{moment(item.updated_at).format('DD/MM/YYYY')} </td>  
                <td>{item.document.length} </td> 
                <td><button className='sendButton' onClick={()=> onDocumentAccept(item.url)}>Send ID</button></td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </> : <ApproveDocument id={userId} name={name} onBack={onBack} /> }
         </div>
        </>
    )
}

export default DocumentsList


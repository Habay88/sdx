import React , {useState, useEffect} from 'react'
import { API } from '../../Helpers/environment/backend'
import axios from 'axios'
import moment from 'moment'

function Dashboard({next}) {

    const [pending, setPending] = useState([]);
    
    useEffect(()=>{

        getSupplier()
        

    },[])

    const getSupplier = async ()=>{

        try {
            const response = await axios.get(`${API}user/supplier/`)
            console.log(response.data)
            setPending(response.data.filter(e => e.status == 2))
            
        } catch (error) {
            console.log(error)
        }
        
    }
    



    return (
        <>
            <h4 className='title'>Pending Approvals</h4>
            <div className='dashbutton'>
                <button className='dashhbutton'>Open</button>
                <button className='dashhbutton'>In Progress</button>
                <button className='dashhbutton'>Completed</button>
            <div className='ruler' /><br/>
            <table>
            <thead>  
            <tr className='head'>  
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
                <tr className='tr'>  
                <td className='zero'>o</td>
                <td ><button className='dashhbutton'>{status} </button></td>  
                <td>{item.companyName} </td>  
                <td>{moment(item.updated_at).format('DD/MM/YYYY')} </td>  
                <td>{item.docsForApproval} </td> 
                <td><button className='dashhbutton'>Send ID</button></td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
            </div>
        </>
    )
}

export default Dashboard


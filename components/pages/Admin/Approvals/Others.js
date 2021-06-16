import React,{useState , useEffect} from 'react'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import Loader from "react-loader-spinner";
import './Others.css'
import StatusList from './StatusList';



const Others = () => {
    const [step , setStep] = useState(1)
    const [loading , setLoading] = useState(true)
    const [pending , setPending] = useState([])
    const [phase, setPhase] = useState(1)
    const [id , setId] = useState('')

    useEffect(() => {

         getSupplier()
         setPending([])

    } , [])

    const getSupplier = async () => {
            
        try {
            const response = await axios.get(`${API}user/supplier/`)
           
            setPending(response.data)
            console.log(pending)

            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    const click = (url) => {
        var res = url.split("/");
        var id = res[6]
        setId(id)
        setPhase(2)
       
    }

    const onBack = ()=>{
        setPhase(1)
    }

return(

     <>
     <div style={{marginLeft: 20}}>
     {phase === 1 ? <>
    <h4 className='titleee'>Other Approvals</h4><br/>
    <br/><br/>
    {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
    <Loader type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /></div>:
                <table>
            <thead>
            <tr className='trrr headdd'>  
             
            <th>Status</th>  
            <th>Company</th> 
            <th>Tasks/No</th> 
            
            </tr> 
            </thead>
            
            <tbody>
            
            {pending && pending.map(item => {
                let status =  'Open'
               return(
                 <tr className='trrr'>
                    <td><button className ="uploadQ" onClick = {() => click(item.url, item.companyName)}>{status}</button></td>
                    <td>{item.companyName}</td>
                    <td>18</td>
                </tr>

               )
    
            })}
             
            </tbody>
             


            </table>

}
</> : <StatusList id={id} onBack={onBack} />







     }
    </div>
     
    </>


 )

}

export default Others
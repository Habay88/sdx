import React , {useState , useEffect} from 'react'
import './naicomApproval.css'
import Loader from "react-loader-spinner";
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';






const NaicomApproval = () => {

    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [pending, setPending] = useState([])
    const [id , setId] = useState('')
    

  

    useEffect(() => {
    
    getSupplier()
    
    } , [])

 
    
    
  
    const getSupplier = async () => {
            
        try {
            const response = await axios.get(`${API}user/supplier/`)
            console.log(response)
            setPending(response.data)
           
            console.log(pending)
            

            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    // const updateCompany = (id, rn)=>{

    //     let data = {
    //     NaicomIDStatus  : '1'
    //     }
    //     let status;
    //     let newData = {};

    //     axios({
    //         url: `${API}user/supplier/${id}/`,
    //         method: 'patch',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         data: JSON.stringify(data)
    //     })
    
    //     .then(res => {
    //         status = res.status;
    //         newData = res.data;
    //     })
    //     .then(()=>{
    //         if(status > 200){
    //             return
    //         }
            
    //     })
    //     .catch(err => console.log(err))
    // }
  
    const click = (url)=>{
        var res = url.split("/");
        var id = res[6]
        setId(id)
        console.log(id)

        let data = {
              NaicomIDStatus: '1'
            }
            let status;
            let newData = {};
    
            
    
            axios({
                url: `${API}user/supplier/${id}/`,
                method: 'patch',
                headers: {
                    'content-type': 'application/json',
                },
                data: JSON.stringify(data)
            })
            .then(res => {
                status = res.status;
                console.log(res)
                newData = res.data.NaicomIDStatus
                console.log(newData)
            })
            .then(()=>{
                if(status > 200){
                    return
            
                }

            
                
                

              
            })
            .catch(err => console.log(err))
        
      
    }
    
    
  



 return(

     <>
     <div style={{marginLeft: 20}}>
     {step === 1 ? <>
        <h4 className='titleee'>Naicom Approval</h4><br/>
         {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
             <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div>:
            <table>
            <thead>
            <tr className='trrr headdd'>  
             
            <th>Company Name</th>  
            <th>Naicom Number</th>  
            <th>Verify</th>
            </tr> 
            </thead>
            
            <tbody>
                {pending && pending.map(item => {
                let nc = item.NaicomIDStatus === '1' ? 'Verified' : 'Unchecked'
                return (
                <tr className = "trrr" key = {item.url} >
                <td>{item.companyName}</td>
                <td>{item.NaicomNumber}</td>
                <td> <button className ="uploadQ" onClick = {() => click(item.url, item.companyName,item.NaicomIDStatus)}>{nc}</button></td>
                </tr>
                )
               
                
                })}
            </tbody>
             


            </table>
            }
      
        
         
        <br/><br/>
      </>:null
      }
        


    </div>
     
         
    </>


 )






}

export default NaicomApproval
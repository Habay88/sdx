import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Loader from "react-loader-spinner";
import { AiOutlineSearch} from "react-icons/ai";
import axios from 'axios';
import './tender.css';
import { API } from '../../../Helpers/environment/backend';



const OkraCheck = ()=>{

    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [pending, setPending] = useState([])
    const [open, setOpen] = useState('none')
    const [elo, setElo] = useState('')

    useEffect(()=>{

        getSupplier()
    },[])


    const history = useHistory()

    const getSupplier = async ()=>{
            
        try {
            const response = await axios.get(`${API}user/supplier/`)
            setPending(response.data)
            console.log(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    const updateCompany = (id, rn)=>{

        let data = {
          okraRCStatus: '1'
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
            newData = res.data;
            console.log(newData)
        })
        .then(()=>{
            if(status > 200){
                return
            }
            setPending(pending.map(function(item) { return item.RegistrationNo === rn ? newData : item }));
        })
        .catch(err => console.log(err))
    }
    const updateCompanyTin = (id, rn)=>{

        let data = {
          okraTinStatus: '1'
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
            newData = res.data;
            console.log(newData)
        })
        .then(()=>{
            if(status > 200){
                return
            }
            setPending(pending.map(function(item) { return item.TinNumber === rn ? newData : item }));
        })
        .catch(err => console.log(err))
    }

    const verifyTin = (num,cname,id)=>{

        var res = id.split("/");
         id = res[6]
         
        let data = {
            tin_number: num,
            company_name: cname
        }
        setOpen('block')
        let status;
        axios({
            url: `https://api.okra.ng/v2/products/kyc/tin-verify/`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            status = res.data.status
        })
        .then(()=>{
            if(status === 'error'){
                setElo('We are unable to verify the registration number')
                setTimeout(() => {
                    setElo('')
                }, 3000);
                
            }
            else{
                setElo('Registration number successfully verified')
                setTimeout(() => {
                    setElo('')
                }, 3000);
                updateCompanyTin(id, num)
                
            }
            setOpen('none')
            
        })
        .catch(err => console.log(err))
    }


    const verifyRC = (num,cname,id)=>{

        var res = id.split("/");
         id = res[6]
         
        let data = {
            rc_number: num,
            company_name: cname
        }
        setOpen('block')
        let status;
        axios({
            url: `https://api.okra.ng/v2/products/kyc/rc-verify/`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            status = res.data.status
        })
        .then(()=>{
            if(status === 'error'){
                setElo('We are unable to verify the registration number')
                setTimeout(() => {
                    setElo('')
                }, 3000);
                
            }
            else{
                setElo('Registration number successfully verified')
                setTimeout(() => {
                    setElo('')
                }, 3000);
                updateCompany(id, num)
                
            }
            setOpen('none')
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div style={{marginLeft: 20}}>
          
            <h4 className='titleee'>Okra Check
            </h4><br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            <br/><br/>

            <div className='dashbutton'>
                <p style={{color: 'rgb(41, 40, 40)', textAlign: 'center'}}>{elo}</p>
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
            <th>S/N</th>  
            <th>Company NAME</th> 
            <th>COMPANY EMAIL</th>   
            <th>Verify RC/NO</th>
            <th>Verify TIN/NO</th>
            <th>Okra Checks</th>
           </tr>  
           </thead>  

          <tbody>  
          {pending && pending.map(item=>{
              let ide;
              let bal;
              let inc;
              let trans;

              let rc = item.okraRCStatus === '1' ? 'Verified' : <button id="uploadButton" style={{color: 'gray'}} onClick={()=> verifyRC(item.RegistrationNo, item.companyName, item.url)} >Check</button>
              let ac = item.okraTinStatus === '1' ? 'Verified' : <button id="uploadButton" style={{color: 'gray'}} onClick={()=> verifyTin(item.TinNumber, item.companyName, item.url)}>Check</button>
             
              const ideFun = () => {
                window.location.href = `https://dash.okra.ng/identity/${item.identityID}/`
                 
              }  
              
              const balFun = () => {
                window.location.href = `https://dash.okra.ng/balance/${item.balanceID}/`

                  
              } 
              const incFun = () => {
                window.location.href = `https://dash.okra.ng/income/${item.incomeID}/`
              } 

              const transFun = () => {
                window.location.href = `https://dash.okra.ng/transaction/${item.transactionID}/`
               } 
              return(
                <tr className='trrr' key={item.RegistrationNo}>  
                <td >{item.RegistrationNo}</td>
                <td >{item.companyName}</td>  
                <td>{item.companyEmail} </td> 
                <td>{rc}</td> 
                <td >{ac}</td> 
                <td>
                    
                    <button className = "buttonDash1" onClick = {balFun}>Balance</button>
                    <button className = "buttonDash1" onClick = {incFun}>Income</button>
                    <button className = "buttonDash1" onClick = {transFun}>Transaction</button>
                    
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
            <div id="overlay" style={{display: open}}>
             <div className='overr'>
                <Loader
                  type="Oval"
                  color="white"
                 height={70}
                 width={70}
                />
                <p style={{color: 'white', fontSize: 19}}>Please wait while checking...</p>
             </div>
            
            </div>
        </div>
    )
}

export default OkraCheck;


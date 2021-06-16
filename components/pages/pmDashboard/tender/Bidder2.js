import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineUpload} from "react-icons/ai";
import { AiOutlineSearch} from "react-icons/ai";

import AddTender from './addTender'
import './tender.css'

const tender = [
    {
        tenderRef: 'SSS19262',
        tenderName: 'SterlingTech',
        queries:(9),
        bidder: 'xxxxxxxxx',
        response:'Accepted',
        openTime: '10/10/2021 12:15',
     
        status: 'active'
    },
    {
        tenderRef:'SSS19262',
        tenderName: 'Nestle',
        queries:(9),
        bidder: 'xxxxxxxxx',
        response:'Accepted',
        openTime: '10/10/2021 12:15',
       
        status: 'active'
    },
    {
        tenderRef: 'SSS19262',
        tenderName: 'Miccom',
        bidder: 'xxxxxxxxx',
        queries:(9),
        response:'Accepted',
        openTime: '10/10/2021 12:15',
      
        status: 'active'
    },
    {
        tenderRef: 'SSS19262',
        tenderName: 'SterlingTech',
        queries:(9),
        bidder: 'xxxxxxxxx',
        response:'Accepted',
        openTime: '10/10/2021 12:15',
       
        status: 'active'
    }
]

const Bidder2 = ()=>{

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);

    const changeStep = ()=>{
        setStep(2)
    }

    const changePhase = ()=>{
        setStep(1)
    }

    return(
        <div style={{marginLeft: 20}}>
                   <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


<tr style={{ textAlign: 'center',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}><button style={{width:'150px'}}>Invite Bidders</button></td>
  
</tr>



</div>
<h4 className='titleee'>Invited Bidders
            </h4>

          {step === 1 ? <>
            
            <br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            {/* <span style={{float: 'right', marginRight: 70, marginTop: -30}}>
            <Tooltip placement="bottom" title="Add Tender" >
            <button className='attachdoc' onClick={changeStep}>
                 <BiPlusMedical size={27} style={{color: '#0c6980'}} />                  
            </button>
            </Tooltip>
            </span> */}
            <br/><br/>

            <div className='dashbutton'>

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
            <tr className='trr headd'>  

            <th>SS ID</th>  
            <th>Bidder</th>  
            <th>Response</th> 
            <th>Queries</th>  
            <th>Status</th>  
            {/* <th>Action</th>   */}
           
           

    <th ><button style={{width:'150px', border: 'solid 3px' }}>Action</button></th>
  

           </tr>  
           </thead>  

          <tbody>  
          {tender && tender.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr style = {{ paddingBottom: '20px', paddingTop: '20px',}} className='tr' key={item.tenderRef}>  
              
              <td >{item.tenderRef}</td>  
              
              <td style = {{ marginBottom:'4px',paddingBottom: '20px', paddingTop: '20px',}}>{item.bidder}</td>  
              <td ><label style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'150px'}}>{item.response}</label></td>  
              <td >({item.queries})</td>  
              <td ><label style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'150px'}}>{item.status}</label></td> 
               
               
               
                <td>
                 <select className='reason'>
                    <option value=''>Action</option>
                    <option value='view'>View</option>
                    <option value='edit'>Edit</option>
                    <option value='delete'>Delete</option>
                 </select>
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </> : <button changePhase={changePhase} />}
         <br/><br/>
           <button className='kont' style={{width:'200px'}}loading={loading}>Continue to dashboard</button> 
        </div>
    )
}

export default Bidder2;


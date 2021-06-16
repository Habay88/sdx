import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineSearch} from "react-icons/ai";
import {BiPlusMedical} from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import AddTender from './addTender'
import './tender.css'
import AddTender2 from './addTender2';

const tender = [
    {
        tenderRef: 17363,
        tenderName: 'SterlingTech',
        bidder: 40,
        openTime: '10/10/2021 12:15',
        closeTime: '10/10/2021 2:15',
        status: 'active'
    },
    {
        tenderRef: 177393,
        tenderName: 'Nestle',
        bidder: 30,
        openTime: '10/10/2021 12:15',
        closeTime: '10/10/2021 2:15',
        status: 'active'
    },
    {
        tenderRef: 19262,
        tenderName: 'Miccom',
        bidder: 29,
        openTime: '10/10/2021 12:15',
        closeTime: '10/10/2021 2:15',
        status: 'active'
    },
    {
        tenderRef: 24662,
        tenderName: 'SterlingTech',
        bidder: 50,
        openTime: '10/10/2021 12:15',
        closeTime: '10/10/2021 2:15',
        status: 'active'
    }
]

const TenderSummary = ()=>{

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
          {step === 1 ? <>
            <h4 className='titleee'>Tenders
            </h4><br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            <span style={{float: 'right', marginRight: 70, marginTop: -30}}>
            <Tooltip placement="bottom" title="Addyy Tender" >
            <button className='attachdoc' onClick={changeStep}>
                 <BiPlusMedical size={27} style={{color: '#0c6980'}} />                  
            </button>
            </Tooltip>
            </span>
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
            <th>Tender Ref</th>  
            <th>Tender Name</th>  
            <th>Invited Bidders</th>  
            <th>Date & Time</th>  
            <th>Status</th>
            <th>Action</th>
           </tr>  
           </thead>  

          <tbody>  
          {tender && tender.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr className='tr' key={item.tenderRef}>  
                <td >{item.tenderRef}</td>
                <td >{item.tenderName}</td>  
                <td>{item.bidder} </td>  
                <td>
                Open: {item.openTime}<br/>
                Close: {item.closeTime}
                 </td>  
                <td>{item.status} </td> 
                <td>
                 <select className='reason'>
                    <option value=''>Action</option>
                    <option value='view'>View</option>
                    <option value='edit'>Edit</option>
                    <option value='delete'>Delet</option>
                 </select>
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </> : <AddTender2 changePhase={changePhase} />}
        </div>
    )
}

export default TenderSummary;


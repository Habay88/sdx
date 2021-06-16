import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineSearch} from "react-icons/ai";
import './tender.css'

const tender = [
    {
        tenderRef: 17363,
        tenderName: 'SterlingTech',
        bidder: 42730,
        okracheck: 'Pending',
        closeTime: '10/10/2021 2:15',
        status: '80%'
    },
    {
        tenderRef: 177393,
        tenderName: 'Nestle',
        bidder: 303837,
        okracheck: 'Pending',
        closeTime: '10/10/2021 2:15',
        status: '40%'
    },
    {
        tenderRef: 19262,
        tenderName: 'Miccom',
        bidder: 290273,
        okracheck: 'Pending',
        closeTime: '10/10/2021 2:15',
        status: '20%'
    },
    {
        tenderRef: 24662,
        tenderName: 'SterlingTech',
        bidder: 509320,
        okracheck: 'Pending',
        closeTime: '10/10/2021 2:15',
        status: '65%'
    }
]

const OkraCheck = ()=>{

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
            <h4 className='titleee'>General Approval
            </h4><br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
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
            <tr className='trrr headdd'>  
            <th>S/N</th>  
            <th>Company Name</th>  
            <th>Registration Number</th>  
            <th>Document Check</th>  
            <th>Okra Check</th>
            <th>Verify</th>
           </tr>  
           </thead>  

          <tbody>  
          {tender && tender.map(item=>{
              
              return(
                <tr className='trrr' key={item.tenderRef}>  
                <td >{item.tenderRef}</td>
                <td >{item.tenderName}</td>  
                <td>{item.bidder} </td> 
                <td>{item.status} </td> 
                <td>{item.okracheck} </td> 
                <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>Reject</option>
                        <option>Accept</option>
                    </select> 
                </td>  
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </> : null}
        </div>
    )
}

export default OkraCheck;


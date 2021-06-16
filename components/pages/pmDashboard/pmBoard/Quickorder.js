import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineUpload} from "react-icons/ai";
import { AiOutlineSearch} from "react-icons/ai";
import './quickorder.css'

// import AddTender from './addTender'
//import './tender.css'

const tender = [
    {
        tenderRef: 'SSS19262',
        tenderName: 'SterlingTech',
        qntyAvailable:"N10,000 per Tonnes",
        supplier: 'xxxxxxxxx',
        image:'',
        openTime: '10/10/2021 12:15',
     
        status: "40 Tonnes"
    },
    {
        tenderRef:'SSS19262',
        tenderName: 'Nestle',
        qntyAvailable:"N10,000 per Tonnes",
        supplier: 'xxxxxxxxx',
        image:'',
        openTime: '10/10/2021 12:15',
       
        status: "40 Tonnes"
    },
    {
        tenderRef: 'SSS19262',
        tenderName: 'Miccom',
        supplier: 'xxxxxxxxx',
        qntyAvailable:"N10,000 per Tonnes",
        image:'',
        openTime: '10/10/2021 12:15',
        status: "40 Tonnes"
    },
    {
        tenderRef: 'SSS19262',
        tenderName: 'SterlingTech',
        qntyAvailable:"N10,000 per Tonnes",
        supplier: 'xxxxxxxxx',
        image:'',
        openTime: '10/10/2021 12:15',
       
        status: "40 Tonnes"
    }
]

const Quickorder = ()=>{

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
            <h3 className='titleee'>Quick Order</h3>
            

          {step === 1 ? <>
            <div className="Topbar">
                <nav className='barrr'>
                    <input  placeholder='Search' className="mysearchinput" />
                    <span><AiOutlineSearch className="mysearchicon" /> </span>
                </nav>

                <div className="myemptyBox">
                    <div className="myemptyBox">
                        Quick Order
                    </div>
                </div>
            </div>
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
                    <th>SSID</th>  
                    <th>Supplier</th>  
                    <th>Image</th> 
                    <th>Price</th>  
                    <th>Quantity Available</th>  
                    <th>Quantity Needed</th>  
                    <th>Action</th>   
                </tr>  
           </thead>  

          <tbody>  
          {tender && tender.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr style = {{ paddingBottom: '20px', paddingTop: '20px',}} className='tr' key={item.tenderRef}>  
                    <td >{item.tenderRef}</td>  
                    
                    <td className="col2">{item.supplier}</td>  
                    <td ><label className="col3">{item.image}</label></td>  
                    <td >{item.qntyAvailable}</td>  
                    <td ><label>{item.status}</label></td> 
                    <td>
                        <input className='reason' type="number"/>
                    </td> 

                    <td>
                        <button className="buttonStyle">Place Order</button>
                    </td>
                </tr>
              )
              
            })
        }
          </tbody>  
    </table>
            }
           
            </div>
         </> : <button changePhase={changePhase} />}
        </div>
    )
}

export default Quickorder;


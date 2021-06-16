import React, {useState, useEffect} from 'react'
import Document from './document'
import Details from './details'
import Bidder from './Bidder'

const AddTender = ({changePhase})=>{

    const [step, setStep] = useState(1)

    useEffect(()=>{
        setStep(1)
        document.getElementById("tabbb").focus();
    },[])

    const onDetails = ()=>{
        setStep(1)
    }

    const onDocument = ()=>{
        setStep(2)
    }

    const onBidder = ()=>{
        setStep(3)
    }

    return(
        <>
            <h3 className='addtender'>Add Tender
                <span style={{float: 'right', marginRight: 50}}>
                <button  className='backed' onClick={changePhase}> Back</button>
                </span>
            </h3>
            <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onDetails}>Details</button>
                <button className='tabb' onClick={onDocument}>Documents</button>
                <button className='tabb' onClick={onBidder}>Bidders</button>
            </div>
            <div style={{marginLeft: 60}}>
                {step === 1 ? <Details/> : step === 2 ? <Document/> : <Bidder/>}
            </div>
        </>
    )
}

export default AddTender;
import React, { useState, useEffect } from 'react'
import Document2 from './document2'
import Details from './details'
import Bidder from './Bidder'
import Details1 from './details1'
import TenderList2 from './tenderList2'
import Bidder2 from './Bidder2'
import Details2 from './Details2'



const TenderPages = ({ changePhases }) => {

    const [step, setStep] = useState(1)
    const tendeing = [
        {
            tenderRef: 17363,
            tenderName: 'SterlingBank',
            bidder: 40,
            openTime: '10/10/2021 12:15',
            closeTime: '10/10/2021 2:15',
            status: 'active'
        }
    ]

   
    // useEffect(() => {
    //     setStep(1)
    //     document.getElementById("tabbb").focus();
    // }, [])

    const onDetails = () => {
        setStep(1)
    }

    const onDocument = () => {
        setStep(2)
    }

    const onBidder = () => {
        setStep(3)
    }

    return (
        <>
            <h3 className='addtender'>Water Machine
                <span style={{ float: 'right', marginRight: 50 }}>
                    <button className='backed' onClick={changePhases}> Back</button>
                </span>
            </h3>
            
            
            <h5 className='addtender'> 

                <button style={{ height: '30px', width: '200px', marginTop:'25px', border: '2px solid'}} >Tender ref: 845673435</button>

            </h5>
            
            
            
            

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


                <tr style={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '20px', marginRight: '50px', border: 'solid 3px' }}>
                    <td style={{ paddingRight: '20px', paddingLeft: '10px', borderRight: ' solid 3px' }}>Status : ACTIVE</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', borderRight: ' solid 3px' }}>BIDS : 30/35</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', borderRight: ' solid 3px' }}>OPEN : 23-09-2020</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', }}>CLOSE : 23-09-2020</td>
                </tr>


            </div>

            <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onDetails}>Summary</button>
                <button className='tabb' onClick={onDocument}>Documents</button>
                <button className='tabb' onClick={onBidder}>Bidders</button>
            </div>
            <div style={{ marginLeft: 60 }}>
                {step === 1 ? <Details2 /> : step === 2 ? <TenderList2 /> : <Bidder2 />}
            </div>
        </>
    )
}

export default TenderPages;
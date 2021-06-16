/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import Quality from './qualityControl'
import Overview from './companyOverview'
import Capacity from './rCapacity'
import Capability from './tradeCapability'
import Production from './productionCapacity'
import Factory from './factoryInspection'
import './tender.css'

const Profile = ({ changePhase }) => {

    const [step, setStep] = useState(1)

    useEffect(() => {
        setStep(1)
        document.getElementById("tabbb").focus();
    }, [])

    const onOverview = () => {

        setStep(1)
    }

    const onProduction = () => {
        setStep(2)
    }

    const onQuality = () => {
        setStep(3)
    }

    const onCapacity = () => {
        setStep(4)
    }
    const onCapability = () => {
        setStep(5)
    }
    const onFactory = () => {
        setStep(6)
    }

    return (
        <>
            <h3 className='addtender'>Supplier Profile
                <span style={{ float: 'right', marginRight: 50 }}>
                    <button className='backed' onClick={changePhase}> Back</button>
                </span>
            </h3>

            {/* <button style={{ height: '45px', width: '200px', marginTop: '20px', border: '2px solid', justifyContent: 'flex-center' }} ></button> */}
            {/* <div style={{ display: 'flex' }}>
                <div style={{ float: 'left', marginLeft: '30px', marginTop: '20px' }}>
                    <button className="contactSupplier" >contact supplier</button>&nbsp;&nbsp;&nbsp;<button className="contactSupplier">love</button>
                </div>
                <div style={{ border: '2px solid black', marginTop: '11px', padding: '12px', marginLeft: '36%' }}>
                    <div style={{ display: 'flex', marginTop: '2px' }}>
                        status : &nbsp; <button>Active</button> &nbsp; | supplier Index : &nbsp; <span style={{ marginTop: '2px' }}> **** </span>&nbsp;&nbsp; | Oncheck Site : &nbsp; <button>check</button> &nbsp;&nbsp; | Last Active :  &nbsp; 4 days ago
                </div>
                </div>

            </div> */}

            <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onOverview}>Company Overview</button>
                <button className='tabb' onClick={onProduction}>Production Capacity</button>
                <button className='tabb' onClick={onQuality}>Quality Control</button>
                <button className='tabb' onClick={onCapacity}>R & D Capacity</button>
                <button className='tabb' onClick={onCapability}>Trade Capabilities</button>
                <button className='tabb' onClick={onFactory}>Site Inspection</button>
            </div>
            <div style={{ marginLeft: 60 }}>
                {step === 1 ? <Overview /> : step === 2 ? <Production /> : step === 3 ? <Quality /> : step === 4 ? <Capacity /> : step === 5 ? <Capability /> : <Factory />}
            </div>
        </>
    )

}
export default Profile;
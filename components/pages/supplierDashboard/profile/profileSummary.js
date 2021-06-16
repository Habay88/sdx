import React, { useState } from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineSearch } from "react-icons/ai";
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import Profile from './addProfile'
import supplier from '../../../images/supplier.jpg'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import './tender.css'


const Summary = () => {

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    // const [pending, setPending] = useState([]);

    const changeStep = () => {
        setStep(2)
    }

    const changePhase = () => {
        setStep(1)
    }
  
    return (
        <div style={{ marginLeft: 20 }}>
            {step === 1 ? <>
                <h4 className='titleee'>Tenders
            </h4><br />
                <nav className='barrr'>
                    <input placeholder='search' />
                    <span ><AiOutlineSearch size={20} /> </span>
                </nav>
                <span style={{ float: 'right', marginRight: 70, marginTop: -30 }}>
                    <Tooltip placement="bottom" title="Add Tender" >
                        <button className='attachdoc' onClick={changeStep}>
                            <BiPlusMedical size={27} style={{ color: '#0c6980' }} />
                        </button>
                    </Tooltip>
                </span>
                <br /><br />

                <div className='dashbutton'>
                <img src={supplier} alt='img' className='sup' />
                 <img src={supplier} alt='img' className='sup' /><br/><br/>

                    {loading ? <div style={{ textAlign: 'center', marginTop: '5%' }}>
                        <Loader
                            type="Circles"
                            color="gray"
                            height={130}
                            width={130}
                        //  timeout={3000} 
                        /> </div> :
                        
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
                                        <tr>
                                            <td>tenderRef</td>
                                            <td>tenderTitle</td>
                                            <td>bidder</td>
                                            <td>penDate</td>
                                            <td>status</td> 
                                             <td>
                                                <select className='reason'>
                                                    <option value=''>Action</option>
                                                    <option value='view'>View</option>
                                                    <option value='edit'>Edit</option>
                                                </select>
                                            </td>
                                        </tr>
                              
                            </tbody>
                        </table>
                    }

                </div>
            </> : <Profile changePhase={changePhase} />}
        </div>
    )
} 

export default Summary;

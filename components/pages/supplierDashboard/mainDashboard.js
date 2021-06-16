import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Navbar from './navbar'
import '../Admin/dashboard.css'
import { AiOutlineHome, AiOutlineMail, AiOutlineMessage, AiOutlineUser, AiOutlineSetting} from "react-icons/ai";
import {GiThorHammer} from 'react-icons/gi'
import Messages from './Message/messages'    
import Chats from './Chat/chats';
import Settings from './settings';
import Profile from './profile/addProfile'
import Dashboard from './adminDashboard/dasboard';
import Tender from './Tender/tender';




const MainBoard = ()=>{

    const [step, setStep] = useState(1)
    const [jump, setJump] = useState(1)
    const [name, setName] = useState('Dashboard')
    
    const toDashboard = ()=>{
        setName('Dashboard')
        setStep(1)
    }

    const toMessages = ()=>{
        setName('Messages')
        setStep(2)
    }

    const toChats = ()=>{
        setName('Chat')
        setStep(3)
    }

    const toProfile = ()=>{
        setName('Profile')
        setStep(4)
    }

    const toSettings = () =>{
        setName('Settings')
        setStep(5)
    }

    const toUsers = () => {
        setName('settings')
        setStep(6)
    }

    const toTender = () => {
        setName('Tender')
        setStep(7)
    }

    return(
        <>
        <Navbar name={name} />
        <div className='mother'>
            <div className='item-1 item'><br/>
            <button className='bbb' onClick={toDashboard}><span style={{marginLeft: -80}}><AiOutlineHome size={20} className='lolon'/> Dashboard </span> </button>
            <button className='bbb' onClick={toMessages}><span style={{marginLeft: -95}}><AiOutlineMail size={20} className='lolon'/> Message </span> </button>
            <button className='bbb' onClick={toChats}><span style={{marginLeft: -129}}><AiOutlineMessage size={20} className='lolon'/> Chat </span> </button>
            <button className='bbb' onClick={toTender}><span style={{marginLeft: -116}}><GiThorHammer  size={20} className='lolon'/> Tender </span> </button>
            <button className='bbb' onClick={toProfile}><span style={{marginLeft: -112}}><AiOutlineUser size={20} className='lolon'/> Profile </span> </button>
            <button className= "bbb dropdowns" >
                    <span style={{marginLeft: -95}}><AiOutlineSetting size={20} className='lolon'/> Settings </span> 
                    <div className="dropdowns-content">
                     <a onClick={toUsers} >Users</a>
     
                     
                     </div>
                
          </button>
            
        </div>
            <div className='item-2 item'>
                {step === 1 ? <Dashboard /> : step === 2 ? <Messages/> : step === 3 ? <Chats/> : step === 4 ? <Profile/> : step === 5 || step === 6 ? <Settings/> : <Tender/>}
            </div>
        </div>
        </>
    )
}

export default MainBoard;
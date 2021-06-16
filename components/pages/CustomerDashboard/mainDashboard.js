import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import '../Admin/dashboard.css'
import { AiOutlineHome, AiOutlineMail, AiOutlineMessage, AiOutlineUser, AiOutlineSetting} from "react-icons/ai";
import Messages from './Message/messages'    
import Chats from './Chat/chats'
import Settings from './settings';
import Profile from './profile'
import Dashboard from './adminDashboard/dasboard';




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

    const toSettings = ()=>{
        setName('Settings')
        setStep(5)
    }

    return(
        <>
        <Navbar name={name} />
        <div className='mother'>
            <div className='item-1 item'><br/>
            <button className='bbb' onClick={toDashboard}><span style={{marginLeft: -80}}><AiOutlineHome size={20} className='lolon'/> Dashboard </span> </button>
            <button className='bbb' onClick={toMessages}><span style={{marginLeft: -95}}><AiOutlineMail size={20} className='lolon'/> Message </span> </button>
            <button className='bbb' onClick={toChats}><span style={{marginLeft: -129}}><AiOutlineMessage size={20} className='lolon'/> Chat </span> </button>
            <button className='bbb' onClick={toProfile}><span style={{marginLeft: -112}}><AiOutlineUser size={20} className='lolon'/> Profile </span> </button>
            <button className='bbb' onClick={toSettings}><span style={{marginLeft: -95}}><AiOutlineSetting size={20} className='lolon'/> Settings </span> </button>  
         </div>
        <div className='item-2 item'>
                {step === 1 ? <Dashboard /> : step === 2 ? <Messages/> : step === 3 ? <Chats/> : step === 4 ? <Profile/> : <Settings/>}
        </div>
        </div>
        </>
    )
}

export default MainBoard;
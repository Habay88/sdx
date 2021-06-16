import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import '../Admin/dashboard.css'
import { AiOutlineHome, AiOutlineMail, AiOutlineMessage, AiOutlineUser, AiOutlineSetting} from "react-icons/ai";
import {GiThorHammer, GiToyMallet} from 'react-icons/gi'
import Messages from './Message/messages'    
import Quickorder from './pmBoard/Quickorder';
import Chats from './Chat/chats';
import Settings from './Settings';
import Profile from './profile'
import Dashboard from './pmBoard/dasboard';
import TenderList from './tender/tenderList'
import TenderSummary from './tender/TenderSummary'
import axios from 'axios';
import { API } from '../../Helpers/environment/backend';
import AddTender2 from './tender/addTender2';
import TenderPages from './tender/TenderPages';


const MainBoard = ()=>{

    let cc;
    let ccc;
    let cShow;
    let mShow;
    let dshow;

    const [step, setStep] = useState(1)
    const [name, setName] = useState('Dashboard')
    const [count, setCount] = useState(1)
    const [mcount, setMcount] = useState(0)

    useEffect(()=>{
        // getChatCount()
        // getMessageCount() 
        
    },[])

    const getChatCount = ()=>{
        
        axios.get(`${API}chat/inbox/countUnread/?id=${localStorage.getItem('id')}`)
        .then(res => {
            setCount(res.data)
            ccc = res.data.count;
        })
        .then(()=>{
          cShow = ccc < 1 ? 'none' : 'block';     
        })
        .catch(err => console.log(err))
    }

    const getMessageCount = ()=>{
       
        axios.get(`${API}chat/inbox/countUnread/?id=${localStorage.getItem('id')}`)
        .then(res =>{
            setMcount(res.data)
            cc = res.data.count
        } )
        .then(()=>{
             mShow = cc < 1 ? 'none' : 'block'; 
        })
        .catch(err => console.log(err))
    }
    
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

    const toTender = ()=>{
        setName('Tender')
        setStep(4)
    }
    const toTender1 = ()=>{
        setName('Tender')
        setStep(9)
    }
    const toTender3 = ()=>{
        setName('Tender')
        setStep(8)
    }
    const toProfile = ()=>{
        setName('Profile')
        setStep(5)
    }

    const toSettings = ()=>{
        setName('Settings')
        setStep(6)
    }
    const toOrders = ()=>{
        setName('Order')
        setStep(11)
    }


    return(
        
        <>
        <Navbar name={name} />
        <div className='mother'>
            <div className='item-1 item'><br/>
            <button className='bbb' onClick={toDashboard}><span style={{marginLeft: -80}}><AiOutlineHome size={20} className='lolon'/> Dashboard </span> </button>
            <button className='bbb' onClick={toMessages}><span style={{marginLeft: -95}}><AiOutlineMail size={20} className='lolon'/> <span className='ikon' style={{display: mcount < 1 ? 'none' : 'block'}}><span className='ikonss'>{mcount.count}</span></span> Message </span> </button>
            <button className='bbb' onClick={toChats}><span style={{marginLeft: -129}}><AiOutlineMessage size={20} className='lolon'/> <span className='ikon' style={{display: count < 1 ? 'none' : 'block'}}><span className='ikonss'>{count.count}</span></span>  Chat </span> </button>
            <button className='bbb' onClick={toOrders}><span style={{marginLeft: -110}}><GiThorHammer size={20} className='lolon'/>Quick Order</span> </button>
            <button className='bbb' onClick={toTender}><span style={{marginLeft: -110}}><GiThorHammer size={20} className='lolon'/> Tender </span> </button>
            <button className='bbb' onClick={toTender1}><span style={{marginLeft: -30}}><GiToyMallet size={20} className='lolon'/> Tender  Summary</span> </button>
            <button className='bbb' onClick={toTender3}><span style={{marginLeft: -30}}><GiToyMallet size={20} className='lolon'/> Tender  Pages</span> </button>
            <button className='bbb' onClick={toProfile}><span style={{marginLeft: -112}}><AiOutlineUser size={20} className='lolon'/> Profile </span> </button>
            <button className='bbb' onClick={toSettings}><span style={{marginLeft: -95}}><AiOutlineSetting size={20} className='lolon'/> Settings </span> </button>
            
         </div>
            <div className='item-2 item'>
                {step === 1 ? <Dashboard /> : step === 2 ? <Messages/> : step === 3 ? <Chats/> : step === 11 ? <Quickorder/> : step === 4 ? <TenderList/>: step === 9 ? <AddTender2/> : step === 8 ? <TenderPages/>  : step === 10 ? <Profile/> : <Settings/>}
            </div>
        </div>
        </>
    )
}

export default MainBoard;
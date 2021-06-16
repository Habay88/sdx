import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import '../Admin/dashboard.css'
import { AiOutlineHome, AiOutlineMail, AiOutlineMessage,AiOutlineCheckSquare, 
    AiOutlineClockCircle, AiOutlineUser, AiOutlineSetting} from "react-icons/ai";
import Messages from './Message/messages'    
import Chats from './Chat/chats';
import Settings from './Settings';
import Profile from './profile'
import Expirations from './expired'
import DocumentsList from './Approvals/documentList';
import Dashboard from './adminDashboard/dasboard';
import OkraCheck from './Approvals/okraCheck'
import GeneralApproval from './Approvals/generalAproval';
import NaicomApproval from './Approvals/naicomApproval'
import Others from './Approvals/Others';
import AddUser from './Approvals/addUser'





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

    const toApprovals = ()=>{
        setName('Approvals')
        setStep(4)
    }

    const toExpirations = ()=>{
        setName('Expirations')
        setStep(5)
    }

    const toProfile = ()=>{
        setName('Profile')
        setStep(6)
    }

    const toSettings = ()=>{
        setName('Settings')
        setStep(7)
    }

    const toOkraCheck = ()=>{
        setName('Approvals')
        setStep(8)
    }

    const toGeneral = ()=>{
        setName('Approvals')
        setStep(9)
    }
    const toNaicom = () => {
        setName('Approvals')
        setStep(10)
    }
    const toOthers = () => {
        setName('Approvals')
        setStep(11)
    }
    const toAddUsers = () => {
        setName('Settings')
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
                <button className='bbb dropdowns' >
                    <span style={{marginLeft: -84}}><AiOutlineCheckSquare size={20} className='lolon'/> Approvals </span> 
                    <div className="dropdowns-content">
                     <a onClick={toApprovals} >Document Approval</a>
                     <a onClick={toOkraCheck}>Okra Check</a>
                     <a onClick={toNaicom}>Naicom Approval</a>
                     <a onClick={toOthers}>Other Approvals</a>
                     <a onClick={toGeneral}>General Approval</a>
                     
                     </div>
                </button>
                <button className='bbb' onClick={toExpirations}><span style={{marginLeft: -72}}><AiOutlineClockCircle size={20} className='lolon'/> Expirations </span> </button>
                <button className='bbb' onClick={toProfile}><span style={{marginLeft: -112}}><AiOutlineUser size={20} className='lolon'/> Profile </span> </button>
                <button className= "bbb dropdowns" >
                    <span style={{marginLeft: -95}}><AiOutlineSetting size={20} className='lolon'/> Settings </span> 
                    <div className="dropdowns-content">
                     <a onClick={toAddUsers} >Users</a>
     
                     
                     </div>
                
                </button>
            </div>
            <div className='item-2 item'>
                {step === 1 ? <Dashboard /> : step === 2 ? <Messages/> : step === 3 ? <Chats/> : step === 4 ? <DocumentsList/> : step === 5 ? <Expirations/> : step === 6 ? <Profile/> : step === 7 ? <Settings/> : step === 8 ? <OkraCheck/> : step === 9 ? <GeneralApproval/> : step === 10 ? <NaicomApproval/> : step === 11 ? <Others/> : <AddUser/> }
            </div>
        </div>
        </>
    )
}

export default MainBoard;
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineMail, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePrinter, AiOutlineStar } from "react-icons/ai";
import { BsTrash, BsCalendar } from 'react-icons/bs'
import { CgAttachment } from 'react-icons/cg'
import '../Message/message.css'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import moment from 'moment'
// import Button from 'reactstrap-button-loader';
import Tooltip from '@material-ui/core/Tooltip';
import NewMessage from './newMessage'

var tooltip = <Tooltip/>

const Messages = () => {

    const [show, setShow] = useState('none')
    const [inbox, setInbox] = useState([]);
    const [msg, setMsg] = useState('');
    const [sentat, setSentAt] = useState('')
    const [subject, setSubject] = useState('')
    const [reply, setReply] = useState('');
    const [outcome, setOutcome] = useState('');
    const [senderId, setSenderId] = useState('')
    const [messageId, setMessageId] = useState('')
    const [info, setInfo] = useState('')
    const [box, setBox] = useState('inbox')
    const [outbox, setOutbox] = useState([])
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const [types, setTypes] = useState('')
    const [bodies, setBodies] = useState('')
    const [sub, setSub] = useState('')
    const [email, setEmail] = useState('')
    const [filee, setFilee] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [allUser, setAlluser] = useState([])


    useEffect(() => {

        getInbox()
        getAlluser()

    }, [])

    const getInbox = ()=>{

        axios.get(`${API}messages/messages/inbox/?id=${localStorage.getItem('id')}`)
        .then(res => setInbox(res.data))
        .catch(err => console.log(err))
    }

    const getAlluser = ()=>{
        
        let arr = []
        axios.get(`${API}user/user/`)
        .then(res => arr = res.data)
        .then(()=> {
            arr = arr.filter(e => e.id !== 12)
            setAlluser(arr)
        })
        .catch(err => console.log(err))
    }

  const getOutbox = ()=>{

    axios.get(`${API}messages/messages/outbox/?id=${localStorage.getItem('id')}`)
    .then(res => {
        setOutbox(res.data)
       console.log(res.data)
    })
    .catch(err => console.log(err))
  }  

    const sendMessage = () => {

        let status;

        let body = {

            id: 1,
            message_id: messageId,
            receiver: senderId,
            subject: subject,
            message: reply

        }
        console.log(messageId)

        axios({
            url: `${API}messages/messages/reply/`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(body)
        })
            .then(res => {
                setReply('')
                status = res.status
                if(status < 300) {
                    setOutcome('Message sent successfully')
                }
            })
            .then(() => {
                setTimeout(() => {
                    setOutcome('')
                }, 3000);
            })
            .catch(err => console.log(err))

    }

    const onChange = (e) => {
        setReply(e.target.value)
    }

    const onPresss = (senderId, sentAt, body, subject, messageId, sender) => {
        setFilee('')
        setName('')  
        setSize('') 
        setTypes('reply')
        setShow('block')
        setInfo(sender)
        setSubject(subject)
        setSentAt(sentAt)
        setMsg(body)
        setSenderId(senderId)
        setMessageId(messageId)
    }

  
    const oncloseMessage = ()=>{
    setShow('none')
    setTypes('')
    setFilee('')
    setName('')  
    setSize('') 
}

    const onBox = (e)=>{

       setShow('none')
        setBox(e.target.value)
        if(e.target.value === 'inbox'){
            setInbox([])
            getInbox()
        }
        else if(e.target.value === 'outbox'){
            setOutbox([])
            getOutbox()
        }
    }

    const onCompose = (e)=>{

        e.preventDefault()
        setLoading(true)
        var fd = new FormData()
        fd.append('id', localStorage.getItem('id'))
       // fd.append("receiver", JSON.stringify(arr));
         fd.append('receiver', email)
        fd.append('subject', sub)
        fd.append('message', bodies)

        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios({
            url: `${API}messages/messages/compose/`,
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: fd
        })
        .then(res =>{
            setLoading(false)
            console.log(res)
            if(res.status < 300){
                
                    setOutcome('Message sent successfully') 
                    setBodies('')
                    setSub('')
                    setEmail('')
                    setFilee('')
                    setName('')
                    setSize('')
                
            }
            else{
                    setOutcome('Something went wrong, please try again') 
            }
        })
        .then(()=>{
            setTimeout(() => {
                setOutcome('') 
            }, 3000);
        })
        .catch(err => {
            setLoading(false)
            setOutcome('Something went wrong, please try again')
            console.log(err)
        })
    }

    const Inbox = ()=>{

        return(
            <>
          <div className='conversation'>
             {inbox && inbox.map(item => {

              return (

           <nav className='chat' key={item.fields.sender} onClick={() => onPresss(item.fields.sender, item.fields.sent_at, item.fields.body, item.fields.subject, item.pk, item.fields.senderName)}>

            <p className='namme'>{item.fields.senderName} <span style={{ float: 'right', marginRight: 10, fontWeight: 'normal', fontSize: 14, color: 'gray' }}>
                {moment(item.fields.sent_at).format('DD/MM/YYYY')}</span>
                <br /><span className='bod'>{item.fields.body} </span>
            </p>

        </nav>
       )
   })}

</div>
            </>
        )
    }

    const Outboxx = ()=>{

        return(
            <>
              <div className='conversation'>
              {outbox && outbox.map(item => {

         return (

          <nav className='chat' key={item.fields.sender} onClick={() => onPresss(item.fields.recipient, item.fields.sent_at, item.fields.body, item.fields.subject, item.pk, item.fields.recipientName)}>

            <p className='namme'>{item.fields.recipientName} <span style={{ float: 'right', marginRight: 10, fontWeight: 'normal', fontSize: 14, color: 'gray' }}>
                {moment(item.fields.sent_at).format('DD/MM/YYYY')}</span>
                <br /><span className='bod'>{item.fields.body} </span>
            </p>

         </nav>
      )
})}

</div>
           </>
        )
    }

    const onPressNewMessage = ()=>{
        setTypes('compose')
        setShow('block')
    }

    const clickMe = ()=>{
        const hello = document.getElementById('image')
        hello.click();
      }



    return (
        <>
            <div className='content'>
            <div className='inbox-list'><br/>
            <div className='durk'>
               
                <select className='inn' onChange={onBox}>
                    <option value='inbox'>Inbox</option>
                    <option value='outbox'>Outbox</option>
                </select>
                <button className='msgit' onClick={onPressNewMessage}><AiOutlineMail size={20} style={{marginLeft: 20}} /> New Message</button>
            </div>
            <nav className='search'>
                <input type='text' placeholder='search' className='look' />
                <span style={{ float: 'right', marginTop: -2 }}><AiOutlineSearch size={20} /> </span>
            </nav>
            <div className='rule' />

             {box === 'inbox' ? <Inbox/> : <Outboxx/>}
        </div>
               
               <div style={{display: show, width: '93%', marginLeft: 275}}>
                  {show === 'block' && types === 'compose' ? <NewMessage allUser={allUser} oncloseMessage={oncloseMessage} /> : show === 'block' && types === 'reply' ? (
                       <div className='message'>
                <nav className='header'>
                    <h3 style={{ color: '#0c6980', marginTop: 10 }}>{info}</h3>
                    <p style={{ marginLeft: '28%', fontSize: 17, position: 'absolute', fontWeight: 'bold', color: 'rgb(121, 118, 118)', marginTop: -30 }}>{outcome} </p>
                    <div className='adjust'>
                        <nav className='circle'>
                            <p><AiOutlineArrowLeft size={23} color='white' /></p>
                        </nav>

                        <nav className='circle'>
                            <p><AiOutlineArrowRight size={23} color='white' /></p>
                        </nav>

                        <nav className='circle'>
                            <p><AiOutlineStar size={23} color='white' /></p>
                        </nav>

                        <nav className='circle'>
                            <p><AiOutlinePrinter size={23} color='white' /></p>
                        </nav>

                        <nav className='circle'>
                            <p><BsTrash size={23} color='white' /></p>
                        </nav>
                    </div>
                </nav>
                <div className='divide' />
        
                <nav className='subject'>
                <h5 style={{ color: 'rgb(121, 118, 118)' }}>
                        {subject == 1 ? <span>Pm Issue</span> : subject == 2 ? <span>Reactivation Issue</span> : subject == 3 ? <span> Registration Issue</span> : subject == 4 ? <span>Payment Issue</span> : subject == 5 ? 
                        <span>Expiration Issue</span> : subject == 6 ? <span>Technical Issue</span> : subject == 7 ? <span>Approval Issue</span> : <span>Others</span>}
                     <span style={{ float: 'right', marginRight: 100, fontSize: 16 }}>
                    <BsCalendar /> {moment(sentat).format('DD/MM/YYYY')}</span> </h5>
                </nav>

                <div className='convo'>
                    <div className='msgbox'>
                        <p className='inbox-text'>{msg}</p>
                    </div>
                </div>

                <nav className='msg-input'>
                    <textarea placeholder='start typing to reply' className='looker' value={reply} onChange={onChange} />
                    <span style={{ float: 'right', color: 'rgb(121, 118, 118)', marginTop: 15 }}>
                        <nav >
                            <button className='customButton' onClick={sendMessage}><span ><AiOutlineArrowRight size={24} /></span></button>
                        </nav>
                    </span>
                    <span style={{ float: 'right', color: 'rgb(121, 118, 118)' , marginTop: 15  }}>
                        <nav >
                            <button className='attachButton'><span ><CgAttachment size={24} /></span></button>
                        </nav>
                    </span>
                </nav>
            </div> 
                  ) : null}
            
        </div>
            </div>
        </>
    )
}


 

export default Messages;
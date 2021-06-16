import React, { useState, useEffect } from 'react'
import '../Chat/chat.css'
import { AiOutlineSearch, AiOutlineMail,AiOutlineArrowRight  } from "react-icons/ai";
import noprofile from '../../../images/noprofile.jpg'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import moment from 'moment'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { BsTrash, BsCalendar } from 'react-icons/bs'
import Tooltip from '@material-ui/core/Tooltip';


const Chats = ()=>{

    const [show, setShow] = useState('none');
    const [loading, setLoading] = useState(false);
    const [inbox, setInbox] = useState([]);
    const [convo, setConvo] = useState([]);
    const [name, setName] = useState('');
    const [body, setBody] = useState('')
    const [receiver, setReceiver] = useState('')
    const [user, setUser] = useState({});
    const [allUser, setAlluser] = useState([])

    dayjs.extend(relativeTime)

    useEffect(()=>{

      // setInterval(() => {
      //   getInbox()
      //   getConvo(receiver)
      // }, 2000);
      getInbox()
      getAlluser()
    }, [])

    const getInbox = async ()=>{
            
      try {
          const response = await axios.get(`${API}chat/inbox/inbox/?id=${localStorage.getItem('id')}`)
         //  console.log(response.data)
          setInbox(response.data)
          setLoading(false)
      } catch (error) {
          console.log(error)
      }
      
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

  const getConvo = async (other)=>{

       try {
        const response = await axios.get(`${API}chat/message/message_inbox/?owner=${localStorage.getItem('id')}&other=${other}`)
       // console.log(response.data)
        setConvo(response.data)
        setLoading(false)
        } catch (error) {
      console.log(error)
  }
  }

  const getInfo = async (id)=>{
      
    try {
      const response = await axios.get(`${API}user/user/${id}/`)
     // console.log(response.data)
      setUser(response.data)
      } catch (error) {
    console.log(error)
   }
  }

  const onContact = (e)=>{
    if(e.target.value === ''){
      return
    }
    var res = e.target.value.split(',')
    setName(res[1].trim())
    setReceiver(parseInt(res[0]))
    setShow('block')
    getInfo(parseInt(res[0]))
    getConvo(parseInt(res[0]))
  }

    const onChat = (id,name)=>{

        setShow('block')
        setName(name)
        setReceiver(id)
        getInfo(id)
        getConvo(id)
    }

    const onBody = (e)=>{
      setBody(e.target.value)
    }
    const onCompose = (e)=>{

      e.preventDefault()
      // setLoading(true)
     let id = localStorage.getItem('id')

       let data = {
        id : id,
        receiver : receiver,
        message : body
      }

      let newText = {
        fields:{
        sender: parseInt(id),
        receiver: receiver,
        message: body,
        created_at: new Date().toISOString()
        }
      }
     
      axios({
          url: `${API}chat/message/compose/`,
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          data: JSON.stringify(data)
      })
      .then(res =>{
          console.log(res.data)
          if(res.status == 200){
            
             setBody('')
             console.log(newText)
             setConvo([...convo, newText])
          }
          
      })
     .catch(err => {
         console.log(err)
      })
  }

    return(
        <>
        <div className='contentt'>
            <div className='inbox-listt'><br/>
                <div className='durk'>
                    <h3 style={{ color: 'rgb(77, 75, 75)' , marginLeft: 5 }}>Chat</h3>

                    <select className='contactt' onChange={onContact}>
                    <option value=''>Contacts</option>
                     {allUser && allUser.map(item =>{
                     item.companyName = item.is_customerService ? 'Customer Service' : item.companyName;
                     let val = `${item.id}, ${item.companyName}`
                      return(
                       <option value={val}>{item.companyName}</option>
                      )
                 })}
              
            </select>
                   
                </div>
                <nav className='searchh'>
                    <input type='text' placeholder='search' className='lookk' />
                    <span style={{ float: 'right', marginTop: -2}}><AiOutlineSearch size={20} /> </span>
                </nav>
                <p style={{color: 'rgb(77, 75, 75)', fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>All-25</p>
                <div className='filterr'>
                <a className='filtt'>All  <span> |</span></a>
                <a className='filtt'>In Progress <span> |</span></a>
                <a className='filtt'>On Hold <span> |</span></a>
                <a className='filtt'>Completed </a>
                </div>
                {inbox && inbox.map(item=>{

                    function damola(){
                    if(item.fields.sender == localStorage.getItem('id')){
    
                    return item.fields.receiverName;
                   }
                    return item.fields.senderName;
                  }

                  function findId(){
                    if(item.fields.sender == localStorage.getItem('id')){
                      return item.fields.receiver;
                    }
                    return item.fields.sender;
                  }

                  return(

                    <div className='conversationn' >
                    <nav className='chat' onClick={()=> onChat(findId(), damola())} key={item.id} >
                        <p className='nammee'>{damola()} <span style={{ float: 'right', marginRight: 10, fontWeight: 'normal', fontSize: 14 }}>{dayjs(item.fields.created_at).fromNow()}</span>
                            <br /><span style={{ fontWeight: 'normal', fontSize: 14 }}>{item.fields.message}</span>
                        </p>

                    </nav>
                </div>
                  )
                })
               
               }
            </div>

            {show === 'none' ? <h2 className='startt'>Start a conversation</h2> :
            <>
             <div className='my-chat' id="myluck">
             <div className="messages">
                 <h5 style={{color: 'gray', marginLeft: 12, marginTop: 10}}>Chat With
                 <Tooltip placement="bottom" title="Delete Conversation" >
                 <a className='bstrash'><BsTrash size={24}  /></a>
                 </Tooltip>
                 </h5>
                 <p style={{color: 'rgb(77, 75, 75)', marginLeft: 12, marginTop: -10, fontSize: 20, fontWeight: 'bold'}}>{name} 
                
                 </p>
                  
               {convo && convo.map(item =>{

                 return(
                 item.fields.sender == localStorage.getItem('id') ? (

                  <ul>
                  <li class="replies" >
                    
                    <p>
                       {item.fields.message}
                       <br/>
                       <span>{dayjs(item.fields.created_at).fromNow()}</span>
                       
                    </p>
                    
                  </li>
   
                </ul>
                 ):(
                  <ul>
                  <li className="sent" >
                  
                  <p>
                  {item.fields.message}
                     <br/>   
                     <span>{dayjs(item.fields.created_at).fromNow()}</span>
                  </p>
                 
                </li>
                  </ul>
                 )
                 )})}
              
                </div> 
                <div class="message-input">
                  <div className="wrap">
                 <textarea type="text" placeholder="Write your message..." onChange={onBody} value={body} />
                 <button className='customButtonn' onClick={onCompose}><span ><AiOutlineArrowRight size={24} /></span></button>
             </div>
      
         </div>
             </div>
 
             <div className='sidee'>
             <nav className='picturee'>
                 <img src={noprofile} className='profile-img' />
              </nav>
              <h4 style={{color: 'rgb(77, 75, 75)', marginTop: 10}}>{user.name}</h4> 
 
              <div className='rulee'/>   
              <br/>
              { user.sdxNumber == null ? (
                <>
                <p style={{color: 'rgb(77, 75, 75)', marginTop: -7}}>ID</p>
                <p style={{color: 'rgb(77, 75, 75)', marginTop: -18, fontWeight: 'bold', fontSize: 16}}>{user.sdxNumber}</p>
                </>
              ): <p style={{color: 'rgb(77, 75, 75)', marginTop: -7, fontWeight:'bold', fontSize: 22}}>Admin</p>}
              
              <p style={{color: 'rgb(77, 75, 75)', marginTop: -7}}>Email</p>
              <p style={{color: 'rgb(77, 75, 75)', marginTop: -18, fontWeight: 'bold', fontSize: 16}}>{user.email}</p>
              <p style={{color: 'rgb(77, 75, 75)', marginTop: -7}}>Phone</p>
              <p style={{color: 'rgb(77, 75, 75)', marginTop: -18, fontWeight: 'bold', fontSize: 16}}>{user.phone}</p>
             </div>
             </>
            }
           
        </div>
        
    </>
    )
}

export default Chats;
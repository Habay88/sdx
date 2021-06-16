import React,{useState} from 'react'
import axios from 'axios'
import Button from 'reactstrap-button-loader';
import Tooltip from '@material-ui/core/Tooltip';
import { CgAttachment } from 'react-icons/cg'
import { API } from '../../../Helpers/environment/backend';


const NewMessage = ({ oncloseMessage, allUser})=>{

    const [bodies, setBodies] = useState('')
    const [sub, setSub] = useState('')
    const [email, setEmail] = useState('')
    const [filee, setFilee] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [loading, setLoading] = useState(false)
    const [outcome, setOutcome] = useState('')

    const onEmail = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const onSubject = (e)=>{
      setSub(e.target.value)
    }

    const onBody = (e)=>{
      setBodies(e.target.value)
    }

    const clickMe = ()=>{
        const hello = document.getElementById('image')
        hello.click();
      }

      const onFile = (e) => {
      
        setFilee(e.target.files[0])
        setName(e.target.files[0].name)  
        setSize(e.target.files[0].size+'kb') 
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

    return(
        <>
         <div className='onmessage'>
           <p style={{marginLeft: '72%'}} onClick={oncloseMessage}>  <button className='pinedd'>Close</button> </p>
           <p style={{marginLeft: '35%', fontSize: 17, fontWeight: 'bold', color: 'rgb(121, 118, 118)' }}>{outcome} </p>
            <p className='infoss'>Subject <br/> 
            <select className='newmsgg' value={sub} onChange={onSubject}>
              <option value=''>-- Select --</option>
              <option value='1'>Pm Issue</option>
              <option value='2'>Reactivation Issue</option>
              <option value='3'>Registration Issue</option>
              <option value='4'>Payment Issue</option>
              <option value='5'>Expiration Issue</option>
              <option value='6'>Technical Issue</option>
              <option value='7'>Approval Issue</option>
              <option value='8'>Other</option>
              <option></option>
            </select>
            </p>
            
            <p className='infoss'>To <br/>
            <select className='newmsgg' value={email} onChange={onEmail}>
              <option value=''>-- Select --</option>
              {allUser && allUser.map(item =>{
                item.companyName = item.is_customerService ? 'Customer Service' : item.companyName;
                return(
                  <option value={item.email}>{item.companyName}</option>
                )
              })}
              
            </select>
            
            </p>
            
            <p className='infoss'>Body <br/>
            <textarea className='bode' placeholder='Type your message here' value={bodies} onChange={onBody} />
              
            </p>
            <p style={{color: 'gray', fontSize: 17, marginLeft: 5}}>{name} {size} </p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Button loading={loading} className='pins' onClick={onCompose} >Send
            
            </Button>

            <Tooltip placement="bottom" title="Attach a document" >
            <button className='attachdoc'>
            
                 <CgAttachment size={24} onClick={clickMe}  />                  
             
            </button>
            </Tooltip>
             </div> 
            <br/>
        
            <input
              type='file'
              hidden='hidden'
             id='image'
             onChange={onFile}
            
             />
        </div>
        </>
    )
}

export default NewMessage;
import React,{useState , useEffect} from 'react'
import logo from '../../images/sdx logo.png'
import noprofile from '../../images/noprofile.jpg'
import {signout} from '../../Helpers/auth/index'
import { useHistory } from 'react-router-dom'

const Navbar = ({name})=>{
    
    const history = useHistory()
    
    const onSignout = () => {
        signout()
        history.push({
          pathname : "/"
        })
       }

       useEffect(() => {
        const getName = localStorage.getItem('name')
        console.log(getName)
        setPmName(getName)
      } , [])
      const [pmName , setPmName] = useState('')
  

    return(
        <>
        <div className='navs' >
           <p>
               <img src={logo} className='imgs' alt='logo' />
              
              <div style={{float: 'right'}}>
              <div class="dropdown">
              <span className ="adminName">{pmName}(pm)</span>&nbsp;
               <img src={noprofile} alt='img' className="dropbtn" style={{height: 35, width: 35, borderRadius: 17, marginTop: 15}} className='' />
              <div class="dropdown-content">
                <a onClick ={onSignout}>Logout</a>
              </div>
             </div>
             </div>
           </p> 
        </div>
        <div >
            <p style={{marginLeft: 23, color: 'gray'}}>
                <a>Home / </a>
                <a>{name} </a>
               
            </p>
            <div style={{marginTop: 5, borderTop: '1px solid rgb(168, 162, 162)', width: '100%'}} />
        </div>
        </>
    )
}

export default Navbar;
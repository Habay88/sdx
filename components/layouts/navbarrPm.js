import React from 'react'
import logo from '../images/sdx logo.png'


const NavbarrPm = ({one, two, three, four,five ,six, seven})=>{

    return(
        <center>
        <div style = {{
         backgroundColor :"#fff",
         width: '100%',
         padding : '2%',
         boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
         }}>

        <div style={{display: 'flex', flexDirection: 'row'}}>
            <nav style={{display: 'flex', flexDirection: 'row'}}>
            <img src = {logo} width = {120}/>
            <div style={{width: 32, height: 32,border: '1px solid grey',marginTop: 3,
                borderRadius: 20, justifyContent: 'center' ,marginLeft:100}}>
                   <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}> {one} </p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5 }}><b>Register</b></h6>
               <div style={{height: 1, width: 70, marginLeft: 15, backgroundColor: 'grey', marginTop: 20,marginRight: 9}} />
            </nav>

            <nav style={{display: 'flex', flexDirection: 'row' }}>
            <div style={{width: 32, height: 32,border: '1px solid grey',marginTop: 3,
                borderRadius: 20, justifyContent: 'center'}}>
            <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}>{two} </p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5 }}><b>Email</b></h6>
               <div style={{height: 1, width: 70, marginLeft: 15, backgroundColor: 'grey', marginTop: 20,marginRight: 9}} />
            </nav>

            <nav style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: 32, height: 32,border: '1px solid grey',marginTop: 3,
                borderRadius: 20, justifyContent: 'center'}}>
                   <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}>{three}</p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5}}><b>Login</b></h6>
               <div style={{height: 1, width: 70, marginLeft: 15, backgroundColor: 'grey', marginTop: 20,marginRight: 9}} />
            </nav>

            <nav style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: 32, height: 32,border: '1px solid grey',marginTop: 3,
                borderRadius: 20, justifyContent: 'center'}}>
                   <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}>{four}</p>
               </div>
               <h6 style={{marginLeft: 10, marginTop: 5}}><b>Companies Details</b> </h6>
               <div style={{height: 1, width: 70, marginLeft: 15, backgroundColor: 'grey', marginTop: 20,marginRight: 9}} />
            </nav>

            <nav style={{display: 'flex', flexDirection: 'row'}}>
               <div style={{width: 32, height: 32,border: '1px solid grey',marginTop: 3,
                borderRadius: 20, justifyContent: 'center'}}>
                   <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}>{five}</p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5}}><b>Add Products</b></h6>
              
            </nav>

            {/* <nav style={{display: 'flex', flexDirection: 'row'}}>
               <div style={{width: 32, height: 32, border: '1px solid gray',marginTop: 3,
               borderRadius: 20, justifyContent: 'center'}}>
                   <p style={{ fontSize: 16, marginLeft: 6, marginTop: 2}}>{six}</p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5}}>Payment</h6>
               <div style={{height: 1, width: 50, marginLeft: 15, backgroundColor: 'grey', marginTop: 20,marginRight: 9}} />
            </nav>

            <nav style={{display: 'flex', flexDirection: 'row'}}>
               <div style={{width: 32, height: 32, border: '1px solid gray',marginTop: 3,
               borderRadius: 20, justifyContent: 'center'}}>
                   <p style={{fontSize: 16, marginLeft: 6, marginTop: 2}}>{seven}</p>
               </div> 
               <h6 style={{marginLeft: 10, marginTop: 5}}>Documents</h6>
               
            </nav> */}

    
        </div>
        </div>
        </center>
    )
}

export default NavbarrPm
import React from 'react'
import logo from '../images/sdx logo.png'


const Navbarr = ({ one, two, three, four, five, six, seven, eight, nine }) => {

   return (
      <div style={{
         backgroundColor: "#fff",
         width: '100%',
         padding: '2%',
         boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>

         <div style={{ display: 'flex', flexDirection: 'row' }}>
            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <img src = {logo} width = {120}/>
               <div style={{
                  width: 25, height: 25, border: '1px solid grey', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>

                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}> {one} </p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5  , fontSize : 15}}>Register</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid grey', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{two} </p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Email</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid grey', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{three}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Login</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid grey', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{four}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Companies Details </h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid grey', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{five}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Add Products</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid gray', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{six}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Payment</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height:25 ,border: '1px solid gray', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{seven}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }}>Documents</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9, opacity: 0.3 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid gray', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center'
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2 }}>{eight}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5 }} id="Approval-state">Approval</h6>
               <div style={{ height: 1, width: 15, marginLeft: 15, backgroundColor: 'grey', marginTop: 20, marginRight: 9, opacity: 0.3 }} />
            </nav>

            <nav style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={{
                  width: 25, height: 25, border: '1px solid gray', marginTop: 3,
                  borderRadius: 20, justifyContent: 'center', opacity: 0.3
               }}>
                  <p style={{ fontSize: 16, marginLeft: 3, marginTop: -2, opacity: 0.3 }}>{nine}</p>
               </div>
               <h6 style={{ marginLeft: 10, marginTop: 5, opacity: 0.3 }}>SupplierID</h6>

            </nav>

         </div>

      </div>
   )
}

export default Navbarr
import React , {useState , useEffect} from 'react'
import './settings.css'
import '../Admin/Approvals/tender.css'
import {BiPlusMedical} from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'
import Loader from "react-loader-spinner";
import "antd/dist/antd.css"
import { DatePicker } from "antd";
import axios from 'axios'
import { API } from '../../Helpers/environment/backend';
import moment from "moment";


import Tooltip from '@material-ui/core/Tooltip';
import AddUser from './addUser.js';
import ChangePassword from './changePassword.js'

const Settings = () => {

    useEffect(() => {
    

    } , [])


    // genRole == 'Admin' ? adminRole : customerServiceRole

    
    const [dateRange, changeDateRange] = useState(null);

    const onDateRangeChange = dateRange => {
      if (dateRange) {
        changeDateRange(returnMomentDateRange(dateRange[0], dateRange[1]));
      }

    }



    const returnMomentDateRange = (start, finish) => {
        return [moment(start, "YYYY-MM-DD"), moment(finish, "YYYY-MM-DD")];
    };
    

    const [ searchItems , setSearchItems] = useState('')

    const [genRole , setGenRole] = useState('')
  

    const [adminRole , setAdminRole] = useState([])
    
    const [customerServiceRole , setCustomerServiceRole] = useState([])

    const { RangePicker } = DatePicker;

    const [phase , setPhase] = useState(1)

    const [search , setSearch] = useState([])

    const [loading , setLoading] = useState(false)


    const click = () => {
        setPhase(2)
    }
    const changePassword = () => {
        setPhase(3)
    }
    const onBack = ()=>{
        setPhase(1)
    }


   // functions for all my filtering from the backend.
   const dateRangeFunc = () => {
    axios.get(`${API}user/user/?created_at_after=${dateRange[1]}&created_at_before=${dateRange[0]}`)
    .then(res => {
       console.log(res.data)
       

     })
    .catch(err => {
        console.log(err)
    })


   }

   const getRoles = () => {
       let adminArray = []
       let customerServiceArray = []
      
    axios.get(`${API}user/user/`)
    .then(res => {
    
       adminArray.push(res.data.filter(e => e.is_staff))
       customerServiceArray.push(res.data.filter(e => e.is_customerService))
       setCustomerServiceRole(customerServiceArray)
       setAdminRole(adminArray)
       setLoading(false)
    
        
 
    })
    .catch(err => {
        console.log(err)
    })
       

   }

  
  const getSearch = () => {
 
    axios.get(`${API}user/user/?companyName=${searchItems}`)
    .then(res => {
        console.log(res.data)
        setSearch(res.data)
        // setSupplier([])
        // setPm([])
        // setAdmin([])
        setLoading(false)
    })
   .catch(err => {
        console.log(err)
    })

  }
    

    return(
        <div>
            {phase === 1 ? <>  
            <h4 className = "title" style ={{marginLeft : '40px' , marginTop : '10px'}}>Settings</h4>
          

            <div className = "UsersPart">
                <h5 className = "title">Users</h5>
                <Tooltip placement="bottom" title="Add New User"  >
                <button className ="upload2" onClick = {click}><b>Add Users</b>&nbsp; <BiPlusMedical size={27} style={{color: '#0c6980'}} /> </button>
                </Tooltip>
                <button className ="upload5" onClick = {changePassword}><b>Change Password</b></button>
           </div>
           {/* <div className = "UsersPart2">
                <button className ="upload2" onClick = {getAdmin}><b>Admins</b></button>
                <button className ="upload3" onClick = {getPm}><b>Pms</b></button>
                <button className ="upload4" onClick = {getSupplier}><b>Suppliers</b></button>
           </div> */}
         
           <br/>
         
                <div className = "TechnicalPart">
               <span className = "title">
                    <span>Search</span></span>
                    <input type = "search" onChange = {(e) => setSearchItems(e.target.value)}  placeholder = "search for companies here" className = "UserSearch"/>
                     &nbsp;
                    <button className = "searchButton" onClick ={getSearch}><span><BiSearch className  = "searchIcon"/></span></button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className = "Roles">
                <option>Roles </option>  
                <option>Finance </option>
                <option>Digital Marketing</option>
                
        
                </select>
                <button className = "searchButton1"><span><BiSearch className  = "searchIcon"/></span></button>
              
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
    <RangePicker style ={{ zoom : 1.4 , border : '2px solid #0c6980' }}
      format = "YYYY-MM-DD" onChange={onDateRangeChange}/>
       <button className = "searchButton1"  onClick ={dateRangeFunc}><span><BiSearch className  = "searchIcon"/></span></button>
           
              </div>
              {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
             <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div> :<table>
           <thead>
            <tr className='trrr headdd'>  
            <th>Name</th>  
            <th>Email</th>   
            <th>Role</th>
            <th>Date Added</th>
            <th>Action</th>
           </tr>  
            </thead>
           
             <tbody>
            
               {/* {admin ? admin && admin.map(item => {
             return(
                   <tr className = 'trrr' >
                    <td>{item.fields.companyName}</td>
                    <td>{item.fields.email}</td>
                    <td></td>
                    <td>{item.fields.created_at}</td>
                </tr>
                 )
              }) : null }
           {pm ? pm && pm.map(item => {

           return(
             <tr className = 'trrr'>
                   <td>{item.fields.companyName}</td>
                    <td>{item.fields.email}</td>
                    <td></td>
                    <td>{item.fields.created_at}</td>


            </tr>
            )
            }) : null }

            {supplier ? supplier && supplier.map (item => {
                return(
                    <tr className = 'trrr'>
                    <td>{item.fields.companyName}</td>
                    <td>{item.fields.email}</td>
                    <td></td>
                    <td>{item.fields.created_at}</td>


                   </tr>

                )
            }) : null } */}

            {search ? search && search.map (item => {
                return(
                    <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td></td>
                    <td>{item.created_at}</td>


                   </tr>

                )
            }) : null }

     

            

               
                   

        

                
      
            
 


            </tbody>
            
            </table>
          
           }
           </> : phase === 2 ? <AddUser onBack = {onBack}/>  : <ChangePassword onBack = {onBack} />  }
        </div>
        
    )
   
}

export default Settings;
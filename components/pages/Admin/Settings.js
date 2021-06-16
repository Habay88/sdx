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
import AddUser from './Approvals/addUser.js';

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
        return [moment(start).format("YYYY-MM-DD"), moment(finish).format("YYYY-MM-DD")];
    };
    

    const [ searchItems , setSearchItems] = useState('')

    const [genRole , setGenRole] = useState('')
  

    const [adminRole , setAdminRole] = useState(false)
    
    const [technicalRole, setTechnicalRole] = useState(false)
    
    const [customerServiceRole , setCustomerServiceRole] = useState(false)

    const { RangePicker } = DatePicker;

    const [phase , setPhase] = useState(1)

    const [search , setSearch] = useState([])

    const [loading , setLoading] = useState(false)

    const [admin , setAdmin] = useState([])

    const [pm , setPm] = useState([])

    const [supplier , setSupplier] = useState([])

    const [range  , setRange] = useState([])

    const click = () => {
        setPhase(2)
    }
    const onBack = ()=>{
        setPhase(1)
    }


   // functions for all my filtering from the backend.
   const dateRangeFunc = () => {
       setLoading(true)
    axios.get(`${API}user/user/?created_at_after=${dateRange[0]}&created_at_before=${dateRange[1]}`)
    .then(res => {
       console.log(res.data)
       setLoading(false)
       setRange(res.data)
       setCustomerServiceRole([])
       setTechnicalRole([])
       setAdmin([])
       setPm([])
       setSupplier([])
       setSearch([])
       
       

     })
    .catch(err => {
        console.log(err)
    })


   }

   

   const getAdmin = () => {
       setLoading(true)
    axios.get(`${API}user/user/?is_staff=1`)
    .then(res => {

       console.log(res.data)
       setLoading(false)

       setAdmin(res.data)
       setRange([])
       setCustomerServiceRole([])
       setTechnicalRole([])
       setPm([])
       setSupplier([])
       setSearch([])
       
     })
    .catch(err => {
        console.log(err)
    })
  }

 
  const getPm = () => {
      setLoading(true)
    axios.get(`${API}user/user/?is_procurementManager=1`)
    .then(res => {
        console.log(res.data)
        setLoading(false)
       
        setPm(res.data)
        setRange([])
        setCustomerServiceRole([])
        setTechnicalRole([])
        setAdmin([])
        setSupplier([])
        setSearch([])
       

    })
    .catch(err => {
        console.log(err)
    })
  }
  const getSupplier = () => {
    setLoading(true)
    axios.get(`${API}user/user/?is_supplier=1`)
    .then(res => {
        console.log(res)

        setLoading(false)
        setSupplier(res.data)
        setCustomerServiceRole([])
        setTechnicalRole([])
        setRange([])
        setPm([])
        setAdmin([])
        setSearch([])
        
    })
    .catch(err => {
        console.log(err)
    })
  }



  

  const getSearch = () => {
      setLoading(true)
 
    axios.get(`${API}user/user/?companyName=${searchItems}`)
    .then(res => {

        console.log(res.data)
        setLoading(false)
        
        setSearch(res.data)
        setRange([])
        setTechnicalRole([])
        setCustomerServiceRole([])
        setSupplier([])
        setPm([])
        setAdmin([])
        
    })
   .catch(err => {
        console.log(err)
    })

  }

  const getRole = (event) => {
      if(event.target.value === "Admin"){
          setLoading(true)
        axios.get(`${API}user/user/?is_staff=1`)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            
            setAdmin(res.data)
            setRange([])
            setTechnicalRole([])
            setCustomerServiceRole([])
            setPm([])
            setSupplier([])
            setSearch([])
           
        })
        .catch(err => {
            console.log(err)
        })
          
      }

      else if(event.target.value === "Customer Service"){
          setLoading(true)
        axios.get(`${API}user/user/?is_customerService=1`)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            
            setCustomerServiceRole(res.data)
            setRange([])
            setTechnicalRole([])
            setAdmin([])
            setPm([])
            setSupplier([])
            setSearch([])
            

        })
        .catch(err => {
            console.log(err)
        })

          
      }
      else if(event.target.value === "Technical"){
          setLoading(true)
        axios.get(`${API}user/user/?is_technical=1`)
        .then(res => {
            console.log(res.data)
            setLoading(false)

            
            setTechnicalRole(res.data)
            setRange([])
            setCustomerServiceRole([])
            setAdmin([])
            setPm([])
            setSupplier([])
            setSearch([])
            
        })
        .catch(err => {
            console.log(err)
        })
      }

      
  }
    

    return(
        <div>
            {phase === 1 ? <>  
            <h4 className = "title" style ={{marginLeft : '40px' , marginTop : '10px'}}>Settings</h4>
          

            <div className = "UsersPart">
                <h5 className = "title">Users</h5>
                <Tooltip placement="bottom" title="Add New User"  >
                <button className ="upload" onClick = {click}><b>Add Users</b>&nbsp; <BiPlusMedical size={27} style={{color: '#0c6980'}} /> </button>
                </Tooltip>
                
           </div>
           <div className = "UsersPart2">
                <button className ="upload2" onClick = {getAdmin}><b>Admins</b></button>
                <button className ="upload3" onClick = {getPm}><b>Pms</b></button>
                <button className ="upload4" onClick = {getSupplier}><b>Suppliers</b></button>
           </div>
         
           <br/>
         
                <div className = "TechnicalPart">
               <span className = "title">
                    <span>Search</span></span>
                    <input type = "search" onChange = {(e) => setSearchItems(e.target.value)}  placeholder = "search for companies here" className = "UserSearch"/>
                     &nbsp;
                    <button className = "searchButton" onClick ={getSearch}><span><BiSearch className  = "searchIcon"/></span></button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className = "Roles" onChange = {getRole}>
                <option>Roles</option>
                <option>Admin</option>
                <option>Customer Service</option>
                <option>Technical</option>
        
                </select>
                <button className = "searchButton1"><span><BiSearch className  = "searchIcon"/></span></button>
              
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
    <RangePicker style ={{ zoom : 1.4 , border : '2px solid #0c6980' }}
      format = "YYYY-MM-DD" onChange={onDateRangeChange} />
       <button className = "searchButton1"  onClick ={dateRangeFunc}><span><BiSearch className  = "searchIcon"/></span></button>
           
              </div>
              {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
             <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div> : <table>
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
            
               {admin ? admin && admin.map(item => {
             return(
                   <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>Admin</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                </td>  
                </tr>
                 )
              }) : null }
           {pm ? pm && pm.map(item => {

           return(
             <tr className = 'trrr'>
                   <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>Procurement Manager</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                </td>  


            </tr>
            )
            }) : null }

            {supplier ? supplier && supplier.map (item => {
                return(
                    <tr className = 'trrr'>
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>Supplier</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                </td>  


                   </tr>

                )
            }) : null }

            {search ? search && search.map (item => {
                return(
                    <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>{item.is_supplier?"Supplier":item.is_procurementManager?"Procurement Manager":item.is_staff ? "Admin" : item.is_customerService? "Customer Service": "Technical"}</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                    </td>  


                   </tr>

                )
            }) : null }

                {technicalRole ? technicalRole && technicalRole.map (item => {
                return(
                    <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>Technical</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td >
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                </td>  


                   </tr>

                )
            }) : null }

             {customerServiceRole ? customerServiceRole && customerServiceRole.map (item => {
                return(
                    <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>Customer Service</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td>
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                      </td>  


                   </tr>

                )
            }) : null }

         {range ? range && range.map (item => {
                return(
                    <tr className = 'trrr' >
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>{item.is_supplier?"Supplier":item.is_procurementManager?"Procurement Manager":item.is_staff ? "Admin" : item.is_customerService? "Customer Service": "Technical"}</td>
                    <td>{moment(item.created_at).format('YYYY/MM/DD')}</td>
                    <td>
                    <select className='loll'>
                        <option>Action</option>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Delete</option>
                    </select> 
                      </td>  


                   </tr>

                )
            }) : null }



     

            

               
                   

        

                
      
            
 


            </tbody>
            
            </table>
          
           }
           </> : <AddUser onBack = {onBack}/> }
        </div>
        
    )
   
}

export default Settings;
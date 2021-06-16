import axios from 'axios'
import React , {useState , useEffect} from 'react'
import './addUser.css'
import { API } from '../../../Helpers/environment/backend';




const AddUser = ({onBack}) => {

    // useEffect(() => {
    // //     let num = Math.floor((Math.random() * 1000000) + 1)
    // //     var characters = "ABCDEFIJKLMNOPQRSTUVWXYZ123"
    // //     var lenString = 4;
    // //     var randomString = '';

    // //     for (var i=0 ; i < lenString; i++){
    // //         var rnum = Math.floor(Math.random() * characters.length);
    // //         randomString += characters.substring(rnum , rnum+1)
    // //     }

    // //      setRPassword(randomString+num)
    // // } , [])

     const [firstName , setFirstName] = useState("")
     const [email , setEmail] = useState("")
     const [lastName , setLastName] = useState("")
     const [role , setRole] = useState("")

     const selectChange = (event) => {
         let change;
         change = event.target.value
         console.log(change)
         setRole(change)
     }

     console.log(role)

     

  

     
    
    const onSubmit = (e) => {
        
        if (role === "Admin") {

        e.preventDefault()
        let statuss;
        let boddy;
        let bodyy = {
            "first_name" : firstName,
            "last_name" : lastName,
            "is_staff" : true,
            "email"  : email,
            "password" : firstName+'123'
     
        }
        console.log(boddy)
    let options = {
        method : "POST",
        headers : {
        Accept : "application/json",
        "content-type" : "application/json"
        },
         body : JSON.stringify(bodyy)
        }
        console.log(bodyy)
        return fetch(`${API}user/user/`, options)
       .then(res => {
        statuss = res.status
        res.json()
       
        
      })
      .then(() => {
      
        if(statuss < 400){
          alert("User has been saved")
        
    
        }
        else{
          alert("User has not been saved ")

        }
       
      })
      .catch(err => console.log(err))
    }

    if (role === "Customer Service") {

        e.preventDefault()
        let statuss;
        let boddy;
        let bodyy = {
            "first_name" : firstName,
            "last_name" : lastName,
            "email"  : email,
            "is_customerService" : true,
            "password" : firstName+'123'
     
        }
        console.log(boddy)
    let options = {
        method : "POST",
        headers : {
        Accept : "application/json",
        "content-type" : "application/json"
        },
         body : JSON.stringify(bodyy)
        }
        console.log(bodyy)
        return fetch(`${API}user/user/`, options)
       .then(res => {
        statuss = res.status
        res.json()
       
        
      })
      .then(() => {
      
        if(statuss < 400){
          alert("User has been saved")
        
    
        }
        else{
          alert("User has not been saved ")

        }
       
      })
      .catch(err => console.log(err))
    }










    }
           
          

        

    

    const [phase , setPhase] = useState(2)
    const [Rpassword , setRPassword] = useState()


    return (
        <div>
        {phase === 2 ? <div>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '20px'}}>Settings</h4><br/>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '10px'}}>Add New User</h4>
        <button className ="backButton" onClick ={onBack}>Back</button>
        <br/>
        <label className ="firstNameLabel">First Name</label><br/>
        <input type ="text" placeholder =" first name" className ="firstName" onChange = {(e) => setFirstName(e.target.value) }/><br/><br/>
        <label className ="firstNameLabel">Last Name</label><br/>
        <input type ="text" placeholder ="last name" className ="firstName" onChange = {(e) => setLastName(e.target.value)}/><br/><br/>
        <label className ="firstNameLabel">Email</label><br/>
        <input type ="text" placeholder ="email" className ="firstName" onChange = {(e) => setEmail(e.target.value) }/><br/><br/>
        <label className ="firstNameLabel">Role</label><br/>
        <select className = "rolesOptions" onChange = {selectChange}>
        <option>Roles</option>
        <option>Admin</option>
        <option>Customer Service</option>
       </select><br/><br/><br/>
        <button className ="upload" onClick = {onSubmit}>Add New User</button>


        



        

        
        
        </div>:null}
        </div>
    


    )

}


export default AddUser
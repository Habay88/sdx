import React , {useState , useEffect} from 'react'
import './addUser.css'
import { API } from '../../Helpers/environment/backend';




const ChangePassword = ({onBack}) => {

    useEffect(() => {
        // let num = Math.floor((Math.random() * 1000000) + 1)
        // var characters = "ABCDEFIJKLMNOPQRSTUVWXYZ123"
        // var lenString = 4;
        // var randomString = '';

        // for (var i=0 ; i < lenString; i++){
        //     var rnum = Math.floor(Math.random() * characters.length);
        //     randomString += characters.substring(rnum , rnum+1)
        // }

        //  setRPassword(randomString+num)
    } , [])

    const [phase , setPhase] = useState(3)
    const [password , setPassword] = useState("")
    const [cpassword , setCPassword] = useState("")

    const onSubmit = (e) => {

        e.preventDefault()
        let statuss;
        let boddy;
        let bodyy = {
            "password" : password,
            
   
     
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


    return (
        <div>
        {phase === 3 ? <div>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '20px'}}>Settings</h4><br/>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '10px'}}>Change Password</h4>

        <button className ="backButton" onClick ={onBack}>Back</button>
        <br/>
        <label className ="firstNameLabel">Password</label><br/>
        <input type ="text" placeholder ="password" className ="firstName" onChange ={(e) => setPassword(e)}/><br/><br/>
        <label className ="firstNameLabel">Confirm Password</label><br/>
        <input type ="text" placeholder ="confirm password" className ="firstName" onChange ={(e) => setCPassword(e)}/><br/><br/>
       
        <button className ="upload">Submit</button>
       </div>:null}
        </div>
    


    )

}

export default ChangePassword
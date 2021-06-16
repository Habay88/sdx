import React , {useState , useEffect} from 'react'
import './addUser.css'




const AddUser = ({onBack}) => {

    useEffect(() => {
        let num = Math.floor((Math.random() * 1000000) + 1)
        var characters = "ABCDEFIJKLMNOPQRSTUVWXYZ123"
        var lenString = 4;
        var randomString = '';

        for (var i=0 ; i < lenString; i++){
            var rnum = Math.floor(Math.random() * characters.length);
            randomString += characters.substring(rnum , rnum+1)
        }

         setRPassword(randomString+num)
    } , [])

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
        <input type ="text" placeholder =" first name" className ="firstName"/><br/><br/>
        <label className ="firstNameLabel">Last Name</label><br/>
        <input type ="text" placeholder ="last name" className ="firstName"/><br/><br/>
        <label className ="firstNameLabel">Email</label><br/>
        <input type ="text" placeholder ="email" className ="firstName"/><br/><br/>
        <label className ="firstNameLabel">Password</label><br/>
        <input type ="text" placeholder ="email" className ="firstName" readOnly = {true} value = {Rpassword}/><br/><br/>
       <label className ="firstNameLabel">Role</label><br/>
        <select className = "rolesOptions">
        <option>Roles</option>
        <option>Admin</option>
        <option>Customer Service</option>
       </select><br/><br/><br/>
        <button className ="upload">Add New User</button>


        



        

        
        
        </div>:null}
        </div>
    


    )

}

export default AddUser
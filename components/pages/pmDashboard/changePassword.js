import React , {useState , useEffect} from 'react'
import './addUser.css'




const ChangePassword = ({onBack}) => {

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

    const [phase , setPhase] = useState(3)
    const [Rpassword , setRPassword] = useState()


    return (
        <div>
        {phase === 3 ? <div>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '20px'}}>Settings</h4><br/>
        <h4 className = "title" style ={{marginLeft : '60px' , marginTop : '10px'}}>Change Password</h4>

        <button className ="backButton" onClick ={onBack}>Back</button>
        <br/>
        <label className ="firstNameLabel">Password</label><br/>
        <input type ="text" placeholder ="password" className ="firstName"/><br/><br/>
        <label className ="firstNameLabel">Confirm Password</label><br/>
        <input type ="text" placeholder ="confirm password" className ="firstName"/><br/><br/>
       
        <button className ="upload">Submit</button>
       </div>:null}
        </div>
    


    )

}

export default ChangePassword
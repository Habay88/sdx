import React from 'react'
import './addTender.css'




const AddTender = ({changePhase}) => {

return(


    <>

    <div>
        <button className = "backButtonn" onClick = {changePhase}>Back</button>
    </div>  
 


    <br/>
    <br/>
    <br/>
    <br/>
    <table>
       <thead> 

           <tr className = "trr headd">
               <th>Tender Ref</th>
               <th>Tender Name</th>
               <th>Date & Time</th>
               <th>Status</th>
               <th>Accept Status</th>
               <th>Submit</th>
           </tr>

       </thead>
       <tbody className = 'tr'>
           <tr>
               <td>2987373</td>
               <td>xxxxxxxxx</td>
               <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open : 05-10-2020 2020<br/>Close: 25-20-2020</td>
               <td><button className = "tenderButton">Active</button></td>
               <td>
                   <select>
                   <option>Accept</option>
                   <option>Reject</option>
                   <option>Pending</option>
                   </select>
                </td>
               <td><button className = "tenderButton">click</button></td>
           </tr>

       </tbody>

    </table>




    </>
)


}


export default AddTender
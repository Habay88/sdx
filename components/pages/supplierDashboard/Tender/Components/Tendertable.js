import React , {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import View from "../View"
import '../Components/Tendertable.css'
import {useForm, useStep} from 'react-hooks-helper'


const steps = [
    {id: 'view'},
    {id: 'edit'},
    {id: 'action'}
]
    // Create an array of object to simulate the incoming data
 const data = [
        {
            tenderRef: 177393,
            company: 'SterlingTech',
            tenderName: "xxxxxxxxx",
            openTime : '10-10-2021 12:00',
            closeTime: '10-10-2021 12:00',
            status: "Active"
        },
        {
            tenderRef: 177393,
            company: 'Nestle',
            tenderName: "xxxxxxxxx",
            openTime : '10-10-2021 12:00',
            closeTime: '10-10-2021 12:00',
            status: "Active"
        },
        {
            tenderRef: 177393,
            company: 'Guiness',
            tenderName: "xxxxxxxxx",
            openTime : '10-10-2021 12:00',
            closeTime: '10-10-2021 12:00',
            status: "Active"
        },
        {
            tenderRef: 177393,
            company: 'Stambic Ibtc',
            tenderName: "xxxxxxxxx",
            openTime : '10-10-2021 12:00',
            closeTime: '10-10-2021 12:00',
            status: "Active"
        }
    ];

const Tendertable = () => {
    const history = useHistory()

    const [selectOption , setSelectOption] = useState()

    const {step, navigation} = useStep({
        steps,
        initialStep: 1
    })

    switch (step.id){
        case "view":
            return <View/>
    }

    console.log(step)

    function handleChange(rname){
        if(rname === "view"){
            <Link to="/supplier/dashboard"></Link>
           // history.push('/View')
        }
        
        else if(rname === "edit"){
            history.push('')
        }
    }

    return(

        <table className='tablu'>
                <thead>  
                    <tr className='trr headd'>  
                        <th>Tender Ref.</th>  
                        <th>Company</th>  
                        <th>Tender Name</th> 
                        <th>Date & Time</th>  
                        <th>Status</th>
                        <th>Action</th>
                    </tr>  
                </thead>  

                <tbody>  
                    {
                        data.map((tenderitem) =>(
                            
                            <tr className='tr' key={tenderitem.tenderRef}>  
                                <td>{tenderitem.tenderRef}</td>
                                <td>{tenderitem.company}</td>  
                                <td>{tenderitem.tenderName} </td>  
                                <td>
                                    Open: {tenderitem.openTime}<br/>
                                    Close: {tenderitem.closeTime}
                                </td>  
                                
                                <td>
                                    <div className='statusstate'>
                                        {tenderitem.status}
                                    </div>
                                </td>

                                <td>
                                    {/* <select className='reason' onChange = {event  => handleChange(event.target.value)}>
                                        <option value =''>Action</option>
                                        <option value='view'>View</option>
                                        <option value='edit'>Edit</option>
                                    </select> */}

                                    <Link to="/View">View</Link>
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>  
        </table>
    )
}

export default Tendertable
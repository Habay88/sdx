import React , {useState} from 'react'
import Factory from './factoryInspection'
import Production from './productionCapacity'
import './profile.css'
import Capability from './tradeCapability'
import Capacity from './rCapaity'
import Document from './qualityControl'


const Overview = ({onProduction}) => {
 
    return (
        <>
      
        <div className = "general">
          <h4 className = "title" style ={{marginLeft:'-1px'}}>Company Overview</h4>

          <div className ="Companydiv1">
            <label className = "labelStyle">Introduction</label>
            <textarea className = "textareaStyle" placeholder = 'Introduction'></textarea>
          </div>

         <div className ="Companydiv2">
            <label className = "labelStyle">Business Type</label>
            <input type  = "text" className ="textStyle1" placeholder = 'Business type'/>
            <button className = "save">Save For Later</button><br/>
         </div>

         <div className ="Companydiv3">
            <label className = "labelStyle">Main Products</label>
            <input type  = "text" className ="textStyle2" placeholder = 'Main Products'/>
            <button className = "back">Back</button>
         </div>

         <div className ="Companydiv4">
            <label className = "labelStyle">TotalEmployees</label>
            <select className ="textStyle12">
                <option>Total Employees</option>
                <option>50 - 100</option>
                <option>101 - 500</option>
                <option>501 - 1000</option>
                <option>1001 -10000</option>
            </select>
         </div>

         <div className ="Companydiv5">
            <label className = "labelStyle">Year Established</label>
            <input type  = "date" className ="textStyle3" placeholder = 'Year Established'/>
         </div>

         <div className ="Companydiv6">
            <label className = "labelStyle">Product Certification</label>
            <input type  = "text" className ="textStyle4" placeholder = 'Product Certification'/>
         </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Trademarks</label>
            <input type  = "text" className ="textStyle5" placeholder = 'Trademarks'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Country</label>
            <input type  = "text" className ="textStyle6" placeholder = 'Country'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">State</label>
            <input type  = "text" className ="textStyle7" placeholder = 'State'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Total Annual Revenue</label>
            <input type  = "text" className ="textStyle8" placeholder = ' Annual Revenue'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Certifications</label>
            <input type  = "text" className ="textStyle9" placeholder = 'Certifications'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Patents</label>
            <input type  = "text" className ="textStyle10" placeholder = 'Patents'/>
          </div>

          <div className ="Companydiv7">
            <label className = "labelStyle">Main Market</label>
            <input type  = "text" className ="textStyle11" placeholder = 'Main Market'/>
          </div>
          
          <button className = "continue" onClick = {Production}>Continue</button>

        </div>
        </>

    )
}

export default Overview;


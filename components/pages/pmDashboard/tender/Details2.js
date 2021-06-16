import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { API} from '../../../Helpers/environment/backend';
import Button from 'reactstrap-button-loader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { BiUnderline } from 'react-icons/bi';
import CollapsiblePanel from "./CollapsiblePanel";
import {AiOutlineUpload} from "react-icons/ai";
import './tender1.css'
import './tender3.css'



import LabelField from './LabelField';

const Details2 = (changePhases)=>{

    const [refno, setRefno] = useState('')
    const [title, setTitle] = useState('')
    const [inputList, setInputList] = useState([{  Questions: ""}]);
    const [desc, setDesc] = useState('')
    const [mark, setMark] = useState('')
    const [collapse, setCollapse] = useState(true);
    const [titles, setTitles] = useState("Expand All");
    const [icon, setIcon] = useState("fa fa-chevron-right");
    const [market, setMarket] = useState([])
    const [loading, setLoading] = useState(false)
    const [openDate, setOpenDate] = useState(new Date());
    const [closeDate, setCloseDate] = useState(new Date());
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')
    const tender = [
        {
            tenderRef: 17363,
            tenderName: 'SterlingTech',
            bidder: 40,
            openTime: '10/10/2021 12:15',
         
            status: 'active'
        },
        {
            tenderRef: 177393,
            tenderName: 'Nestle',
            bidder: 30,
            openTime: '10/10/2021 12:15',
           
            status: 'active'
        },
        {
            tenderRef: 19262,
            tenderName: 'Miccom',
            bidder: 29,
            openTime: '10/10/2021 12:15',
          
            status: 'active'
        },
        {
            tenderRef: 24662,
            tenderName: 'SterlingTech',
            bidder: 50,
            openTime: '10/10/2021 12:15',
           
            status: 'active'
        }
    ]
    const tenderd = [
        {
            tenderRef: 'SSS19262',
            tenderName: 'SterlingTech',
            queries:(9),
            bidder: 'xxxxxxxxx',
            response:'Accepted',
            openTime: '10/10/2021 12:15',
         
            status: 'Open'
        },
        {
            tenderRef:'SSS19262',
            tenderName: 'Nestle',
            queries:(9),
            bidder: 'xxxxxxxxx',
            response:'Accepted',
            openTime: '10/10/2021 12:15',
           
            status: 'Replied'
        },
        {
            tenderRef: 'SSS19262',
            tenderName: 'Miccom',
            bidder: 'xxxxxxxxx',
            queries:(9),
            response:'Accepted',
            openTime: '10/10/2021 12:15',
          
            status: 'Open'
        },
        {
            tenderRef: 'SSS19262',
            tenderName: 'SterlingTech',
            queries:(9),
            bidder: 'xxxxxxxxx',
            response:'Accepted',
            openTime: '10/10/2021 12:15',
           
            status: 'Replied'
        }
    ]
    useEffect(()=>{

        let num = Math.floor((Math.random() * 1000000) + 1);

        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";  
        //specify the length for the new string  
        var lenString = 4;  
        var randomstring = '';  
  
            //loop to select a new character in each iteration  
        for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
     }
     setRefno(randomstring+num)

     getMarket()
    },[])
    const collapseAll = () => {
        setCollapse(!collapse);
        setIcon(state => {
            return state === "fa fa-chevron-right"
                ? "fa fa-chevron-down"
                : "fa fa-chevron-right";
        });
        setTitle(state => {
            return state === "Expand All" ? "Collapse All" : "Expand All";
        });
    };

    const getMarket = ()=>{
     axios.get(`${API}industry/industry/`)
     .then(res => setMarket(res.data))
     .catch(err => {
         console.log(err)
     })
    }

 
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

      const handleAddClick = () => {
        setInputList([...inputList, { Questions: "" }]);
      };

    const addDetails = (e)=>{

        e.preventDefault();
        setLoading(true)
        let id = localStorage.getItem('id')
        let data = {
          tenderOwner: `${API}user/user/${id}/`,
          tenderRef: refno,
          tenderTitle: title,
          tenderDescription: desc
        }
        let status;
        console.log(data)
        axios({
            url: `${API}tender/tender/`,
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(data)
        })
        .then(res => {
           console.log(res)
        })
        .then(()=>{
           setLoading(false)
        })
        .catch(err => console.log(err))
    }
    
     
    return(
        
        <div style={{marginBottom: 30}}>
          
          <div class="parent">
  <div class="child left">
  <p className='parag' style={{}}>AbS Cooperation Ltd.</p>
  <br/>
  <p className='parag' style={{color:'blue'}}>Activated Since: 01/01/2019.</p>
  <br/>
  <label class="l" >SSID: </label>
  <br/><br/>
  <label class="l" >Contact: </label>
  <br/><br/>
  <label class="l" >Email: </label>
  <br/><br/>
  <label class="l" >Address: </label>
  <br/><br/>
  <label class="l" >Industry: </label>
  <br/><br/>
  <label class="l" >Status:&nbsp;&nbsp;&nbsp;&nbsp; <label style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'150px'}}>Active</label></label>
  <br/><br/><br/>
  <button style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'300px', paddingLeft:'20px'}}>Award Tender</button>
          
  </div>
  {/* <div class="child center">Center
  <p className='parag'>Tender Reference No.</p>
           <input className='refno' placeholder='Reference No.' readOnly={true} value={refno} />
           <p className='parag'>Tender Reference No.</p>
           <input className='refno' placeholder='Reference No.' readOnly={true} value={refno} /></div> */}
  <div class="child right">
  <div class="rows">
  <div class="column">
  <CollapsiblePanel title="Questionaire" collapse={collapse}>
  <label class="l" >Time Frame for delivery : <input class="i" type="text"/></label>
  <br/>
  <label class="l" >Product Variety :  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;    <input class="i" type="text"/></label>
  <br/>
  <label class="l">Total Quantity :   &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  <input class="i" type="text"/></label>
  <br/>
  <label class="l" >Minimum Quantity :  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;<input class="i" type="text"/></label>
  <br/>
  <label class="l" >Location:  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;   <input class="i" type="text"/></label>
  <br/>
  <label class="l">Year of Incoporation:      &nbsp; &nbsp; &nbsp; <input class="i" type="text"/></label>
  <br/>
  <label class="l">Annual revenue:   &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  <input class="i" type="text"/></label>
  <br/>
  <label class="l" >Pay Taxes: &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;<input class="i" type="text"/></label>
  </CollapsiblePanel>
  <CollapsiblePanel title="Documents" collapse={collapse}>
  <table>
            <thead>  
            <tr className='trr headd'>  
            <th></th>  
            <th> Name</th>  
            <th>Publish Date</th>  
           

    <th ><button style={{width:'150px', border: 'solid 3px' }}>Download</button></th>
  

           </tr>  
           </thead>  

          <tbody>  
          {tender && tender.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr style = {{ paddingBottom: '20px', paddingTop: '20px',}}className='tr' key={item.tenderRef}>  
                  <td  className='zero'>o</td>
               
                <td >{item.tenderName}</td>  
               
                <td>
                {item.openTime}<br/>
            
                 </td>  
               
                <td>
                <button><AiOutlineUpload size={26} color='secondary'/></button>
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
  </CollapsiblePanel>
  <CollapsiblePanel title="Queries" collapse={collapse}>
  <table>
            <thead>  
            <tr className='trr headd'>  

            {/* <th>SS ID</th>   */}
            <th>Subject</th>  
            {/* <th>Response</th>  */}
            <th>Published Date</th>  
            <th>Status</th>  
            {/* <th>Action</th>   */}
           
           

    <th ><button style={{width:'150px', border: 'solid 3px' }}>Action</button></th>
  

           </tr>  
           </thead>  

          <tbody>  
          {tenderd && tenderd.map(item=>{
              let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Open" : "Replied"
              return(
                <tr style = {{ paddingBottom: '20px', paddingTop: '20px',}} className='tr' key={item.tenderRef}>  
{/*               
              <td >{item.tenderRef}</td>   */}
              
              <td style = {{ marginBottom:'4px',paddingBottom: '20px', paddingTop: '20px',}}>{item.bidder}</td>  
              {/* <td ><label style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'150px'}}>{item.response}</label></td>   */}
              <td >({item.openTime})</td>  
              <td ><label style={{  backgroundColor:'lightgrey',border:'solid 3px', width:'150px'}}>{item.status}</label></td> 
               
               
               
                <td>
                 <select className='reason'>
                    <option value=''>Action</option>
                    <option value='view'>View</option>
                    <option value='edit'>Edit</option>
                    <option value='delete'>Delete</option>
                 </select>
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
  </CollapsiblePanel>

                      {/* <label className="on">First Name</label> */}
                    
                  </div>
                  </div>
                  </div>
</div>
           
      
           {/* <Button className='kont' loading={loading} onClick={addDetails}>Continue</Button> */}
        </div>
    )
}

export default Details2;
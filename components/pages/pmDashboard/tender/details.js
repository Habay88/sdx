import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { API} from '../../../Helpers/environment/backend';
import Button from 'reactstrap-button-loader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Document from './document';


let industries = []

const Details = ()=>{

    const [refno, setRefno] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [mark, setMark] = useState('')
    const [marks, setMarks] = useState('')
    const [industry, setIndustry] = useState([])
    const [id, setId] = useState(0)
    const [market, setMarket] = useState([])
    const [loading, setLoading] = useState(false)
    const [odate, setodate] = useState(null);
    const [cdate, setcdate] = useState(null);
    const [step, setStep] = useState(1)
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')

    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{ border: "solid 1px pink" }}
        />
      );

      let handleColor = time => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };
      const changePhases = ()=>{
        setStep(1)
    }
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
     const idds = localStorage.getItem('idds')
     setId(parseInt(idds))
     console.log(idds)
     getMarket()
    },[])


    // const getMarket = ()=>{
    //  axios.get(`${API}industry/industry/`)
    //  .then(res => setMarket(res.data))
     
    //  .catch(err => {
    //      console.log(err)
    //  })
    // }

    const changeStep = ()=>{
      setStep(2)
  }
    const getMarket = ()=>{
        axios.get(`${API}industry/industry/`)
         .then(res => {
           console.log(res.data)
           setMarket(res.data)
           res.data.map(e =>
             industries.push({
                 ids: e.industry_id
             })
           )
           setIndustry(industries)
          })
         .catch(err => console.log(err))
       }

    const addDetails = (e)=>{
      setStep(2)
      console.log("This is our data, hope you see it",mark)
        e.preventDefault();
        // setLoading(true)
        let id = localStorage.getItem('id')
        
        
        let data = {
            
          tenderOwner: parseInt(id),
          tenderRef: refno,
          tenderTitle: title,
          tenderDescription: desc,
          closeDate:cdate,
          openDate:odate,
          market:mark.slice(44,-1)
        }
        
        localStorage.setItem('currentDoc',JSON.stringify(data))
       //let j =   localStorage.setItem('mark', 1)
       let r =   localStorage.setItem('mark', data.market)
       console.log(mark)
      //  let d = localStorage.setItem('Odate',data.openDate)
      //  let h = localStorage.setItem('Cdate',data.closeDate)
      //  let g =localStorage.setItem('tdescrition',data.tenderDescription)
      //  let f = localStorage.setItem('tref',data.tenderRef)
      //  let gt = localStorage.setItem('ttitle',data.tenderTitle)
      //   let status;
      //   console.log(data)
   
        
        axios({
            url: `${API}tender/tender/getTenders/?tenderOwner=${id}`,
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data
        })
        .then(res => {
           console.log(res)
        })
        .then(()=>{
          //  setLoading(false)
        })
        .catch(err => console.log(err))
    }
    const handlecdate = (date) => {
        setcdate(date);
      };
      const handleodate = (date) => {
        setodate(date);
      };
     
    return(
        <div style={{marginBottom: 30}}>
            {step === 1 ? <>   
           <h4 style={{color: 'rgb(65, 63, 63)'}}>Tender Details</h4>
           <p className='parag'>Tender Reference No.</p>
           <input className='refno' placeholder='Reference No.' readOnly={true} value={refno} />

           <p className='parag'>Tender Title</p>
           <input className='refno' placeholder='Title' value={title}
                onChange={(e)=> setTitle(e.target.value)}
           />

           <p className='parag'>Tender Description (Brief scope of work)</p>
           <textarea  className='refnoo' placeholder='Tender description' value={desc}
                onChange={(e)=>setDesc(e.target.value)}
           />

           <p className='parag'>Market</p>
           <select className='refss' value={mark} onChange={(e)=> setMark(e.target.value)}>
               <option>--Select Market--</option>
               {market && market.map(e =>(
                  <option value={e.url} key={e.url}>{e.industry_name}</option> 
               ))}
           </select><br/>
           
           <p className='parag'>Open Date</p>
           <div>
           <DatePicker  className='dpicker'  selected={odate} //when day is clicked
  onChange={handleodate}
  showTimeSelect
  timeFormat="p"
  timeIntervals={15}
  dateFormat="dd MM, yyyy h:mm aa"
  />
           </div>

           
           <p className='parag'>Close Date</p>
           <div>
           <DatePicker  className='dpicker'  selected={cdate} //when day is clicked
  onChange={handlecdate}
  showTimeSelect
  timeFormat="p"
  timeIntervals={15}
  dateFormat="dd MM, yyyy h:mm aa"
  />
           </div>
  
           <p className='parag'>Status</p>
           <select className='refss'>
               <option>-- Select --</option>
               <option value='open'>Open</option>
               <option value='active'>Active</option>
               <option value='completed'>Completed</option>
               <option value='cancelled'>Cancelled</option>
           </select>
           <br/><br/>
           <Button className='kont' loading={loading} onClick={addDetails}>Continue</Button>
           </> : <Document changePhases={changePhases} />}     
        </div>
    )
}

export default Details;
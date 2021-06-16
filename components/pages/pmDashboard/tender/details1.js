import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { API} from '../../../Helpers/environment/backend';
import Button from 'reactstrap-button-loader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { BiUnderline } from 'react-icons/bi';

const Details = (changePhases)=>{

    const [refno, setRefno] = useState('')
    const [title, setTitle] = useState('')
    const [inputList, setInputList] = useState([{  Questions: ""}]);
    const [desc, setDesc] = useState('')
    const [mark, setMark] = useState('')
    const [market, setMarket] = useState([])
    const [loading, setLoading] = useState(false)
    const [openDate, setOpenDate] = useState(new Date());
    const [closeDate, setCloseDate] = useState(new Date());
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')

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
           
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


<tr style={{ textAlign: 'center',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}><button style={{width:'150px'}}>Update Tender</button></td>
  
</tr>




</div>
<br/>
<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
<tr style={{ textAlign: 'left',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}><button   style={{  width:'1150px',textAlign:'left', maxWidth:'1200px'}}>Details</button></td>
  
</tr>


</div>
<br/>
<div>

</div>


           <p className='parag'>Description:</p>
          
           <textarea  name="content" data-provide="markdown" rows="6" style={{width:'1150px',textDecoration:'underline'}}></textarea>
           <br/><br/>
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
<tr style={{ textAlign: 'left',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}><button   style={{width:'1150px',textAlign:'left',}}>Questionaire</button></td>
  
</tr>


</div>     
<br/>
<div style={{ display: 'flex', justifyContent: 'flex-end' }}>


<tr style={{ textAlign: 'center',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}> <button onClick={handleAddClick}style={{width:'150px'}}>Add Fields</button></td>
  
</tr>




</div>  

{inputList.map((x, i) => {
        return (
          <div>
           <label>Create Questions :  </label>
           {"  "}{"  "}
            <input
            style={{border:'solid 1px',width:'400px'}}
              name="Questions"
   placeholder="Create a Question"
              value={x.Questions}
              onChange={e => handleInputChange(e, i)}
            />
         
            <div>
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {/* {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>} */}
            </div>
            </div>
        
        );
      })}
           <br/><br/>
           <Button className='kont' loading={loading} onClick={addDetails}>Continue</Button>
        </div>
    )
}

export default Details;
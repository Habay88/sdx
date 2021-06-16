import React,{useState, useEffect} from 'react'
import {AiOutlineUpload, AiOutlineClose} from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import {useHistory} from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown';
import AddTender2 from './addTender2';
import AddTender from './addTender';
import  Details1 from './details1';
import swal from 'sweetalert';

import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import { BiPlusMedical, BiSave } from 'react-icons/bi';
import TenderList from './tenderList';
import { Fragment } from 'react';



let industries = []
const file=[
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
]
// const [step, setStep] = useState(1)
// const [name, setName] = useState('Dashboard')
// const toChats = ()=>{
//     setName('Chat')
//     setStep(3)
// }
const Bidder = ()=>{


    const [selected, setSelected] = useState([]);
    const [step, setStep] = useState(1)
    const [inputlist, setInputList] = useState([]);
    const [segment, setSegment] = useState([]);
    const [marks, setMarks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(0)
    const history = useHistory()
    const [classProduct , setClassProduct] = useState([])
    const [productclass , setProductClass] = useState([])
    const [selectedCompanies , setSelectedCompanies] = useState([])
   

    const changePhases = ()=>{
        setStep(1)
    }
    useEffect(()=>{
        getsegMent()
        getIndus()
           
          }, [])
          const getsegMent = async ()=>{
            let myArray = []
            
            let e = localStorage.getItem('mark')
            let id = localStorage.getItem('id')    
           
               const res = await axios.get(`${API}tender/tender/getRegisteredBidders/?id=${id}&industry=${e}`)
                // console.log(res.data)
                .then(res => {
                    console.log(res)
                    res.data.map(e =>
                      myArray.push({
                        name: e.fields.companyName,
                        id: e.pk
                        
                      })
                    )
                    setSegment(myArray)
                    // setAllCompany(myArray)
                    console.log(myArray)
                  
                  })
                  .catch(err => console.log(err))
           
           
       }
           const removeProduct = (select)=>{
            console.log(select)
          }
           const selectedProducts = (select) => {
        
            setInputList(select)
            console.log(select)
           
        }

        const onSubmitCompanies = (e) => {
            e.preventDefault()
            // Get the doc from localstorsge
            const dataSaved = localStorage.getItem('currentDoc')
            let formData = JSON.parse(dataSaved)
            console.log(dataSaved)
            
            //  let options = {
            //      method : "POST",
            //      headers : {
            //      Accept : "application/json",
            //      "content-type" : "application/json"
            //      },
            //       body : JSON.stringify(bodyy)
            //      }
                 console.log()
                 return fetch(`${API}user/supplier/updateSupplier/`, )
                .then(res => {
                 
                 res.json()
                
                 
               })
            //    .then(() => {
            //      let id = localStorage.getItem('id')
            //      if(statuss < 400){
            //        alert("Company has been saved")
            //         updateStep(2, id) 
            //        history.push({
            //          pathname : "/supplier/payment"
            //        })
            //      }
            //      else{
            //        alert("company has not been saved ")
         
            //      }
                
            //    })
               .catch(err => console.log(err))
            
             }

             const addDetails = (e)=>{

                e.preventDefault();
                let statuss;

                // let comp =[]
                // selectedCompanies.map(e => comp.push(`${parseInt(e.id)}`) )
                setLoading(true)

                // let bodyy = {
                //     supplier_id : id
                 
                
                    
                //   }
                let id = localStorage.getItem('id')
                const dataSaved = localStorage.getItem('currentDoc')
                let formData = JSON.parse(dataSaved)
                formData['bidders'] = selectedCompanies.map(i => i.id)
                console.log(formData)
                
              
               
              //  let d = localStorage.setItem('Odate',data.openDate)
              //  let h = localStorage.setItem('Cdate',data.closeDate)
              //  let g =localStorage.setItem('tdescrition',data.tenderDescription)
              //  let f = localStorage.setItem('tref',data.tenderRef)
              //  let gt = localStorage.setItem('ttitle',data.tenderTitle)
              //   let status;
              //   console.log(data)
           
                
                axios({
                    url: `${API}tender/tender/postTender/`,
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data:formData
                })
                
                .then(res => {
                    statuss = res.status
                    if(statuss < 400){
                        swal("Tender Created Sucessfully", "You clicked the button!", "success");
                        //  updateStep(2, id) 
                        // history.push({
                        //   pathname : "/supplier/payment"
                        // })
                      }
                      else{
                        swal("Tender did not Save", "You clicked the button!", "error");
              
                      }

                      

                      
                   console.log(res)
                })
                .then(()=>{
                   setLoading(false)
                })
                .catch(err => console.log(err))
                localStorage.removeItem('currentDoc');
            }
        const getIndus = async ()=>{

            let idd = localStorage.getItem('mark')    
           try {
               const response = await axios.get(`${API}industry/industry/${idd}/`)
                console.log(response.data)
           
           //    console.log(response)
           setMarks(response.data)
              
           } catch (error) {
               console.log(error)
              
           }
           
       }
        
        const SelecteddCompanies = (select) => {
        
            setSelectedCompanies(select)
           console.log(selectedCompanies.map(item => item.id))
        }
// const [state, setState] = useState('start')

const changeStep = ()=>{
    setStep(2)
}

const changeIndustry = (e) => {

    getIndus(e.target.value)
       
  }

// const changePhases = ()=>{
//     setStep(1)
// }
    // const options = [
    //     { name: "Grapes 🍇", id: "grapes" },
    //     { name: "Mango 🥭", id: "mango" },
    //     { name: "Strawberry 🍓", id: "strawberry" },
    //   ];
    //   triggerAddTripState = () => {
    //     setState('add-trip')
    //   }
    return(
        
        <div className='rock'>
        {step === 1 ? <>    
        <div className='bossdown'>
        <h4 style={{color: 'rgb(65, 63, 63)'}}>Invite Bidders</h4>
      
      
       <br/><br/>
       <label id = "formLabel">Industry</label><br/>
       <select id="formStyleClass" onChange={changeIndustry} >
       {/* <option>Industry</option> */}
     
      <option  value={marks.industry_name}>-{marks.industry_name} </option>
        


       </select> 
       <br/>
       <hr class = "ProductLine"/>
       <label id = "formLabel">Companies</label><br/>

       <Multiselect
            id="formStyleClass"
            options={segment} // Options to display in the dropdown
            showCheckbox={true}
            avoidHighlightFirstOption={true}
            selectedValues={selectedCompanies}
            //selectedValues={selectedCompanies} // Preselected value to persist in dropdown
            onSelect={SelecteddCompanies} // Function will trigger on select event
            onRemove={removeProduct} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
      

    
       
       
      
     
   

        <br/><br/><br/>
        <button className='kont'>Add</button>
     </div>

     <div className='bossup'>
        <h4>Selected Bidders:</h4>
        <div className='arc'>
            <table className='dtable'>
                <thead className='dname'>
                    <td>Supplier Name</td>
                    <td>Supplier ID</td>
                    <td>Delete</td>
                </thead>

                <tbody>
                    {selectedCompanies&& selectedCompanies.map(item =>(
                        <tr>
                            <td className='tnamee'>{item.name} </td>
                            <td className='tnamee'>{item.file} </td>
                            <td className='tnamee'>
                            <Tooltip placement="bottom" title="delete file" >
                              <button className='secc'>
                             <AiOutlineClose size={26} color='secondary'/>
                              </button>
                            </Tooltip> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div id = "SelectedStyle">
               
               <div id = "companySelect">
               <label id = "formLabel" style={{color: '#077b9e', fontSize: 17, fontWeight:'bold', textAlign: 'center'}}>Selected</label>
               <center>{selectedCompanies.length > 0 ? 
                               selectedCompanies.map((e, i)=>(
                                 <>
                                 
                                 <p key={i} style = {{color : 'black'}}>{e.name}</p>
                                 </>
                             )) : null
               }</center>
   
               </div>
               </div> */}
          
        </div><br/><br/>
        <div></div>
        <Tooltip placement="bottom" title="Add Tender" >
            <button className='kont' onClick={addDetails}>
                 Continue                
            </button>
            </Tooltip>
      
     </div>
     <div>
               
            </div>
            </> : <Details1 changePhases={changePhases} />}     
     </div>
    )
}

export default Bidder;
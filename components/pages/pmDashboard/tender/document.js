import React, { useState } from 'react'
import {AiOutlineUpload, AiOutlineClose} from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios'
import { API} from '../../../Helpers/environment/backend';
import Button from 'reactstrap-button-loader';
import Bidder from './Bidder';
import { GiConsoleController } from 'react-icons/gi';


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

let dummy = []

let documentArray = []

const Document = ()=>{

    const [doc, setDoc] = useState({})
    const [images, setImages] = useState([])
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState('')
    const [files, setFiles] = useState([])
    const [step, setStep] = useState(1)
    const [dname, setDname] = useState('')
    const [docs, setDocs] = useState([])
    const [dtype, setDtype] = useState('')
    const [desc, setDesc] = useState('')

  const  clickDoc = ()=>{
        const hello = document.getElementById('doc1')
        hello.click();
      }
   
   const onChangeDoc = (e) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(doc)
    // reader.addEventListener("load",()=>{
    //     localStorage.setItem("recentdocs",reader.result)
    // })
    setDoc(e.nativeEvent.target.files[0])
    console.log("This is the file",e.target.files[0])
    setName(e.nativeEvent.target.files[0].name)
    setSize(e.nativeEvent.target.files[0].size+'kb')
    const files = e.nativeEvent.target.files;
    for(var idx = 0; idx < files.length; idx++){
        const rdr = new FileReader();
        const file = files.item(idx)
        rdr.readAsDataURL(file);
        rdr.onload = (t) => {
            // if(!doc.images) doc.images = []
            images.push(t.target.result)
          
        }
    }
    
 
    

    console.log(e.nativeEvent)

    console.log(e)
   

    } 

    const onAdd = (e)=>{

        e.preventDefault()
       
       dummy.push({
           name: dname,
           file: name
       })
        setFiles([...dummy])
        
        // setDname('')
        // setDesc('')
        // setDtype('')
       // setDoc('')
        // setName('')
        // setSize('')
    }
    const changePhases = ()=>{
        setStep(1)
    }
    const changeStep = ()=>{
        setStep(2)
    }
    const addDetails = (e)=>{
        setStep(2)
        e.preventDefault();
        setLoading(true)
        // const reader = new FileReader();
        // reader.readAsDataURL(doc)
        // reader.addEventListener("load",()=>{
        //     localStorage.setItem("recentdocs",reader.result)
        // })
        let id = localStorage.getItem('id')
        // let doc = localStorage.getItem('recentdocs')
        
        let data = {
            
          document: doc,
        //   images,
          documentName:dname,
          documentType:dtype,
          documentDescription:desc
        }
        let status;
        console.log(doc)
        console.log(data)
        documentArray.push(data);
        // Augment the Object inside the localstorage
        const details = localStorage.getItem('currentDoc')
        let dataParsed = details !== null ? JSON.parse(details) : null;
        if(dataParsed !== null){
            dataParsed['documents'] = documentArray
            console.log("This is our document ",documentArray)
            localStorage.setItem('currentDoc',JSON.stringify(dataParsed));
            console.log(dataParsed)
        }
        
        axios({
            url: `${API}tender/tender/`,
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
           setLoading(false)
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='rock'>
             {step === 1 ? <> 
        <div className='bossdown'>
        <h4 style={{color: 'rgb(65, 63, 63)'}}>Upload Document</h4>
        <p className='parag'>Document Name</p>
        <input className='refno' value={dname} placeholder='Document name'
            onChange={(e)=> setDname(e.target.value)}
        />

        <p className='parag'>Document Type</p>
        <select className='reff' value={dtype}
            onChange={(e)=> setDtype(e.target.value)}
        >
            <option>--Select Market--</option>
            <option value='form-1'>form-1</option>
            <option value='form-2'>form-2</option>
            <option value='form-3'>form-3</option>
        </select>

        <p className='parag'>Document Description</p>
        <textarea  className='refnoo' value={desc} placeholder='Tender description'
            onChange={(e)=> setDesc(e.target.value)}
        />

        <p className='parag' style={{marginBottom: 25}}>File Name</p>
        <div className='refno'>
            <span style={{marginLeft: 5, marginTop: 8}}>{name} {size} </span>
        <input type='file' hidden='hidden' id='doc1' onChange={onChangeDoc} />
        <span style={{float: 'right', marginRight: 10, marginTop: 4}}>
        <Tooltip placement="bottom" title="Choose File" >
            <button className='secc' onClick={clickDoc} >
            <AiOutlineUpload size={26} color='secondary'/>
            </button>
        </Tooltip>    
        </span>
        </div>
        <br/><br/><br/>
        <button className='kont' onClick={onAdd}>Add</button>
     </div>

     <div className='bossup'>
        <h4>Uploaded:</h4>
        <div className='arc'>
            <table className='dtable'>
                <thead className='dname'>
                    <td>Document Name</td>
                    <td>File</td>
                    <td>Delete</td>
                </thead>

                <tbody>
                    {files && files.map(item =>(
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
          
        </div><br/><br/>
        <button onClick={addDetails} className='kont'>Continue</button>
     </div>
     </> : <Bidder changePhases={changePhases} />}   
     </div>
    )
}

export default Document;
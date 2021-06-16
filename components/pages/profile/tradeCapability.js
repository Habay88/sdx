import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import './tradeCapability.css'

const Capability = () => {

  const [inputList, setInputList] = useState([{ }])
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    }

    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)

    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            machineName: "", certificateName: "", issuedBy: "",
            businessScope: "", availableDate: "", verified: false
        }])
    }

  const [doc, setDoc] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [size, setSize] = useState('')
  const [files, setFiles] = useState([])
  const [dname, setDname] = useState('')
  const [dtype, setDtype] = useState('')



  let dummy = []
  const clickDoc = () => {
    const hello = document.getElementById('doc1')
    hello.click();
  }

  const onChangeDoc = (e) => {

    setDoc(e.target.files[0])
    setName(e.target.files[0].name)
    setSize(e.target.files[0].size + 'kb')
  }
  const onAdd = (e) => {
    e.preventDefault()
    dummy.push({
      name: dname,
      file: name
    })
    setFiles([...dummy])
    setDname('')
    setDtype('')

  }

  return (
    <div className='rock'>
       <div className="MainTable">
        <div className="OverProduction">
          <h4 className="title">Main Markets & Product</h4>
          
          {/* <Tooltip placement="bottom" title="Add New Table">
            <BiPlusMedical className="addTable" onClick={handleAddClick}/>
          </Tooltip> */}

        </div>
          
       
          <table>
            <thead>
              <tr className='pproducttable'>
                <th className="pproductthead">Main Markets</th>
                <th> Total Revenue (%)</th>
                <th >Main Product(s)</th>
                <th > Verified</th>

              </tr>
            </thead>
            <tbody>
            {inputList.map((x, i) => {
              return(
              <tr className='pproducttable'>
                <td className="pproductthead"><input type="text" placeholder="Enter Main Markets"onChange={e => handleInputChange(e, i)}/></td>
                <td><input type="text" placeholder="Total Revenue(%)" onChange={e => handleInputChange(e, i)}/></td>
                <td><input type="text" placeholder="Main Product(s)" onChange={e => handleInputChange(e, i)}/></td>
                <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)}/></td>
              </tr>
            )

                })}
            </tbody>
          </table>
          <br />
          <button className='kont' onClick= {handleAddClick}>Add</button>
          {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}

          <div className='general'>
            <h4 className="title">Trade Ability</h4>
            <div className="Companydiv3">
              <label className="labelStyle">Language Spoken</label>
              <input type="text" className="textStyle18" placeholder='5,000-10,000 square'/>
              {/* <button className = "back">Back</button>
              <button className = "kont">Back</button> */}
            </div>
            <div className="Companydiv3">
              <label className="labelStyle">Total Annual Revenue</label>
              <input type="text" className="textStyle19" placeholder='Factory Country/State' />
            </div>

            <div className="Companydiv3">
              <label className="labelStyle">Total Export Revenue</label>
              <input type="text" className="textStyle20" placeholder='Above 10' />
            </div>
          </div>
          <div className='general'>
            <h4 className="title" style ={{marginTop : '10px'}}>Business Terms</h4>
            <div className="Companydiv3">
              <label className="labelStyle">Accepted Delivery Terms</label>
              <input type="text" className="textStyle21" placeholder='5,000-10,000 square meters' />
            </div>
            <div className="Companydiv3">
              <label className="labelStyle">Accepted Payment Currency</label>
              <input type="text" className="textStyle22" placeholder='Factory Country/State' />
            </div>
            <div className="Companydiv3">
              <label className="labelStyle">Accepted Payment Type</label>
              <input type="text" className="textStyle23" placeholder='Above 10' />
            </div>
            {/* <button className = "back">Save for later</button>
            <button className = "kont">Back</button> */}
          </div><br/>
          <button className='kont'>Continue</button>
        </div>

      
      {/* <div className='bossup'>
        
        
        
      </div> */}
    </div>
  )
}

export default Capability;



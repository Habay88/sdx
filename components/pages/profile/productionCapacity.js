import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import './productionCapacity.css'




const Production = () => {


    const [inputList, setInputList] = useState([{ machineName: "", brandModel: "", Quantity: "", verified: false }])
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
            <div className='bossdown'>
                <h4 className="title">Production Capacity </h4>
                <p className='parag'>Document Name</p>
                <input className='refno' placeholder='Document name' />

                <p className='parag' style={{ marginBottom: 25 }}>File Name</p>

                <div className='refno'>
                    <span style={{ marginLeft: 5, marginTop: 8 }}>{name} {size} </span>
                    <input type='file' hidden='hidden' id='doc1' onChange={onChangeDoc} />
                    <span style={{ float: 'right', marginRight: 10, marginTop: 4 }}>
                        <Tooltip placement="bottom" title="Choose File" >
                            <button className='secc' onClick={clickDoc} >
                                <AiOutlineUpload size={26} color='secondary' />

                            </button>
                        </Tooltip>
                    </span>
                </div>
                <button className='addButton'>Upload</button>
                <br /> <br />
                <div className="OverProduction">
                    <h4 className="title">Production Equipment</h4>
                    {/* <Tooltip placement="bottom" title="Add New Table" >
                        <BiPlusMedical className="addTable" onClick={handleAddClick} />
                    </Tooltip>
                    {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="removeTable" >Remove</button>} */}
                </div>
                <div className="MainTable">
                    <table>
                        <thead>
                            <tr className='pproducttable'>
                                <th className="pproductthead">Name</th>
                                <th> No.</th>
                                <th > Quantity</th>
                                <th > Verified</th>

                            </tr>
                        </thead>
                        <tbody>
                            {inputList.map((x, i) => {
                                return (
                                    <tr className='pproducttable'>
                                        <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange(e, i)} /></td>
                                        <td><input type="text" placeholder="Enter No." onChange={e => handleInputChange(e, i)} /></td>
                                        <td><input type="text" placeholder="Enter Qty" onChange={e => handleInputChange(e, i)} /></td>
                                        <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} /></td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table><br /><button className='kont' onClick= {handleAddClick}>Add</button>
          {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}
                    <div className='general'>
                        <h4 className="title">Factory Information</h4>
                        <div className="Companydiv3">
                            <label className="labelStyle">Factory Size</label>
                            <input type="text" className="textStyle13" placeholder='5,000-10,000 square meters' />
                        </div>
                        <div className="Companydiv3">
                            <label className="labelStyle">Factory Country/State</label>
                            <input type="text" className="textStyle14" placeholder='Factory Country/State' />
                        </div>

                        <div className="Companydiv3">
                            <label className="labelStyle">No. of Production Lines</label>
                            <input type="text" className="textStyle15" placeholder='Above 10' />
                        </div>

                        <div className="Companydiv3">
                            <label className="labelStyle">Contract Manufacturing</label>
                            <input type="text" className="textStyle16" placeholder='OEM Service OfferedDesign Service Offered' />
                        </div>

                        <div className="Companydiv3">
                            <label className="labelStyle">Annual Output Value</label>
                            <input type="text" className="textStyle17" placeholder='Above US$100 Million' />
                        </div>
                    </div>
                    <br/>
                    <div className="OverProduction">
                        <h4 className="title">Annual Production Capacity </h4>
                        {/* <Tooltip placement="bottom" title="Add New Table" >
                            <BiPlusMedical className="addTable" onClick={handleAddClick}/>
                        </Tooltip>
                        {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="removeTable" >Remove</button>} */}
                    </div>
                    <div className="MainTable">
                        <table>
                            <thead>
                                <tr className='pproducttable'>
                                    <th className="pproductthead">Product Name </th>
                                    <th> Production Line Capacity </th>
                                    <th > Actual Units Produced (Previous Year) </th>
                                    <th > Verified</th>

                                </tr>
                            </thead>
                            <tbody>
                                {inputList.map((x, i) => {
                                    return (
                                        <tr className='pproducttable'>
                                            <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange(e, i)}/></td>
                                            <td><input type="text" placeholder="Enter No." onChange={e => handleInputChange(e, i)}/></td>
                                            <td><input type="text" placeholder="Enter Qty" onChange={e => handleInputChange(e, i)}/></td>
                                            <td ><input className='checkBox' type="checkbox" placeholder="Verify"onChange={e => handleInputChange(e, i)} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table><br />
                        <button className='kont' onClick= {handleAddClick}>Add</button>
          {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}<br />
                    </div>

                </div>

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
                            {files && files.map(item => (
                                <tr>
                                    <td className='tnamee'>{item.name} </td>
                                    <td className='tnamee'>{item.file} </td>
                                    <td className='tnamee'>
                                        <Tooltip placement="bottom" title="delete file" >
                                            <button className='secc'>
                                                <AiOutlineClose size={26} color='secondary' />
                                            </button>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div><br /><br />
                <button className = "kont">Save For Later</button>
                <button className = "kont">Back</button>
                <button className='kont'>Continue</button>
            </div>
        </div>
    )
}

export default Production;



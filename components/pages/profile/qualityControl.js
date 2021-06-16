import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import './productionCapacity.css'



const Quality = () => {



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
            <div className='bossdown'>
                <h4 className="title">Quality Control </h4>
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
                    <h4 className="title">Test Equipment </h4>
                    {/* <Tooltip placement="bottom" title="Add New Table" >
                        <BiPlusMedical className="addTable"  onClick={handleAddClick}  />
                    </Tooltip>
                    {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="removeTable" >Remove</button>} */}
                </div>
                <div className="MainTable">
                    <table>
                        <thead>
                            <tr className='pproducttable'>
                                <th className="pproductthead">Machine Name</th>
                                <th> Brand & Model No </th>
                                <th > Quantity</th>
                                <th > Verified</th>

                            </tr>
                        </thead>
                        <tbody>
                        {inputList.map((x, i) => {
                            return(
                            <tr className='pproducttable'>
                                <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange(e, i)}/></td>
                                <td><input type="text" placeholder="HBZ-40/40" onChange={e => handleInputChange(e, i)}/></td>
                                <td><input type="number" placeholder="Enter Qty"onChange={e => handleInputChange(e, i)} /></td>
                                <td ><input className='checkBox' type="checkbox" placeholder="Verify"onChange={e => handleInputChange(e, i)} /></td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table><br />
                    <button className='kont' onClick= {handleAddClick}>Add</button>
          {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}

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
export default Quality;



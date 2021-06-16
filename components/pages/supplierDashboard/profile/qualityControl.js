import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import './productionCapacity.css'
import Capacity from './rCapacity'
import axios from 'axios';
import { API } from '../../../Helpers/environment/backend';

let dummy = []
let dummy2 = []

const Quality = () => {

    const [step, setStep] = useState(1)
    const [doc, setDoc] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState('')
    const [files, setFiles] = useState([])
    const [postFile, setPostFile] = useState([])
    const [dname, setDname] = useState('')



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
        dummy2.push({
            name: dname,
            file: doc
        })
        setFiles([...dummy])
        setPostFile([...dummy2])
    }
    const postFiles = () => {

        for (let element of postFile) {
            var myForm = new FormData()
            myForm.append("docName", element.name)
            myForm.append("file", element.file)
            console.log("This is our file ", myForm)

            console.log("This is data 1", myForm.keys)




            axios({
                url: `${API}companyprofile/qualitymanagementprocess/`,
                method: 'POST',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                data: myForm
            })
                .then((res) => {

                    console.log(res)
                })
                .catch(err => console.log(err))



        }
    }

    const changeStep = () => {
        setStep(1)
    }
    const onCapacity = (e) => {
        setStep(2)
    }

    const [inputList, setInputList] = useState([{ machineName: "", brandModelNo: "", actualUnit: "", verified: false }])
    const handleInputChange = (e, index) => {

        let name = e.target.id
        let value = e.target.value
        if ((name === "verified") && (value == "on")) {
            value = true
        }
        else if ((name === "verified") && (value == "off")) {
            value = false
        }

        const list = [...inputList];
        list[index][name] = value;
        console.log("This is the list ", list)
        setInputList(list)


    }

    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)

    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            machineName: "", brandModelNo: "", actualUnit: "", verified: false
        }])
    }

    const submitDetails = () => {

        //let id = parseInt(localStorage.getItem('id'))
        console.log("This is my input List", inputList)
        for (let element of inputList) {


            let data1 = {
                machineName: element.machineName,
                brandModelNo: element.brandModelNo,
                actualUnitsProduced: element.actualUnit,
                verified: element.verified
            }
            console.log("This is data 1", data1)

            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data1)
            }

            fetch(`${API}companyprofile/testequipment/`, requestOption)
                .then(res => {
                    console.log(res)
                })

                .catch(err => {
                    console.log(err)
                })

        }

    }
    const submitAll = () => {
        submitDetails()
        onCapacity()
        postFiles()

    }
    return (
        <>
            {step === 1 ? <>
                <div className='rock'>
                    <div className='bossdown'>
                        <h4 className="title">Quality Control </h4>
                        <p className='parag'>Document Name</p>
                        <input className='refno' placeholder='Document name' onChange={(e) => setDname(e.target.value)} />

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
                        <button className='addButton' onClick={onAdd}>Upload</button>
                        <br /> <br />
                        <div className="OverProduction">
                            <h4 className="title">Test Equipment </h4>
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
                                        return (
                                            <tr className='pproducttable'>
                                                <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange(e, i)} id='machineName' /></td>
                                                <td><input type="text" placeholder="HBZ-40/40" onChange={e => handleInputChange(e, i)} id='brandModelNo' /></td>
                                                <td><input type="number" placeholder="Enter Qty" onChange={e => handleInputChange(e, i)} id='actualUnit' /></td>
                                                <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} id='verified' /></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table><br />
                            <button className='kont' onClick={handleAddClick}>Add</button>
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
                        <button className="kont">Save For Later</button>
                        <button className="kont">Back</button>
                        <button className='kont' onClick={submitAll}>Continue</button>
                    </div>
                </div>
            </> : <Capacity changePhases={changeStep} />
            }
        </>
    )
}
export default Quality;



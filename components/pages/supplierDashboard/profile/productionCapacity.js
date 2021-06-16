import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import './productionCapacity.css'
import Quality from './qualityControl'
import { API } from '../../../Helpers/environment/backend';
import axios from 'axios';


let dummy = []
let dummy2 = []
const Production = () => {

    const [step, setStep] = useState(1)
    const [doc, setDoc] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState('')
    const [files, setFiles] = useState([])
    const [postFile, setPostFile] = useState([])
    const [dname, setDname] = useState('')
    const [factorySize, setFactorySize] = useState('')
    const [factoryState, setFactoryState] = useState('')
    const [productionLines, setProductionLines] = useState('')
    const [contractManufacturing, setContractManufacturing] = useState('')
    const [annualOutputValue, setAnnualOutputValue] = useState('')



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

        //let id = parseInt(localStorage.getItem('id'))
        console.log("This is my input List", inputList)
        for (let element of postFile) {
            var myForm = new FormData()
            myForm.append("docName", element.name)
            myForm.append("file", element.file)
            console.log("This is our file ", myForm)
            console.log("This is data 1", myForm.keys)

            axios({
                url: `${API}companyprofile/productionflow/`,
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

    const onQuality = (e) => {
        setStep(2)

    }

    const [inputList, setInputList] = useState([{ machineName: "", brandModel: "", Quantity: "", verified: false }])
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

    const handleRemoveClick1 = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
        console.log(list)

    }

    const handleAddClick1 = () => {
        setInputList([...inputList, {
            machineName: "", brandModel: "", Quantity: "", verified: false
        }])
    }


    const [inputList2, setInputList2] = useState([{ ProductName: "", ProductionLineCapacity: "", ActualUnitsProduced: "", verified: false }])
    const handleInputChange2 = (e, index) => {


        let name = e.target.id
        let value = e.target.value
        if ((name === "verified2") && (value == "on")) {
            value = true
        }
        else if ((name === "verified2") && (value == "off")) {
            value = false
        }
        const list = [...inputList2];
        list[index][name] = value;
        console.log("This is the list ", list)
        setInputList2(list)
    }

    const handleRemoveClick2 = index => {
        const list = [...inputList2]
        list.splice(index, 1)
        setInputList2(list)
        console.log(list)

    }

    const handleAddClick2 = () => {
        setInputList2([...inputList2, {
            ProductName: "", ProductionLineCapacity: "", ActualUnitsProduced: "", verified: ""
        }])
    }


    const submitDetails1 = () => {

        //let id = parseInt(localStorage.getItem('id'))
        console.log("This is my input List", inputList)
        for (let element of inputList) {


            let data1 = {
                name: element.machineName,
                number: element.brandModel,
                quantity: element.Quantity,
                verified: element.verified
            }
            console.log("This is data 1", data1)

            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data1)
            }

            fetch(`${API}companyprofile/productionequipment/`, requestOption)
                .then(res => {
                    console.log(res)
                })

                .catch(err => {
                    console.log(err)
                })
        }

    }


    const submitDetails2 = () => {

        //let id = parseInt(localStorage.getItem('id'))
        console.log("This is my input List", inputList2)
        for (let element of inputList2) {


            let data1 = {
                productName: element.ProductName,
                productionLineCapacity: element.ProductionLineCapacity,
                actualUnitsProduced: element.ActualUnitsProduced,
                verified: element.verified
            }
            console.log("This is data 1", data1)

            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data1)
            }

            fetch(`${API}companyprofile/annualproductioncapacity/`, requestOption)
                .then(res => {
                    console.log(res)
                })

                .catch(err => {
                    console.log(err)
                })
        }

    }

    const submitFactoryInformation = () => {

        let data = {
            size: factorySize,
            country: factoryState,
            state: factoryState,
            numberofproductionline: productionLines,
            contractmanufacturing: contractManufacturing,
            annualoutvalue: annualOutputValue
        }

        console.log("This is our information ", data)

        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${API}companyprofile/factoryinformation/`, requestOption)
            .then(res => {
                console.log(res)
            })

            .catch(err => {
                console.log(err)
            })
    }
    const submitAll = () => {
        submitDetails1()
        submitDetails2()
        postFiles()
        submitFactoryInformation()
        onQuality()
    }

    return (
        <>
            {step === 1 ? <>
                <div className='rock'>
                    <div className='bossdown'>
                        <h4 className="title">Production Capacity </h4>
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
                            <h4 className="title">Production Equipment</h4>
                        </div>
                        <div className="MainTable">
                            <table>
                                <thead>
                                    <tr className='pproducttable' >
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
                                                <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange(e, i)} id='machineName' /></td>
                                                <td><input type="text" placeholder="Enter No." onChange={e => handleInputChange(e, i)} id='brandModel' /></td>
                                                <td><input type="text" placeholder="Enter Qty" onChange={e => handleInputChange(e, i)} id='Quantity' /></td>
                                                <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} id='verified' /></td>
                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table><br /><button className='kont' onClick={handleAddClick1}>Add</button>
                            {inputList !== 1 && <button onClick={() => handleRemoveClick1()} className="kont" >Remove</button>}
                            <div className='general'>
                                <h4 className="title">Factory Information</h4>
                                <div className="Companydiv3">
                                    <label className="labelStyle">Factory Size</label>
                                    <input type="text" className="textStyle13" placeholder='5,000-10,000 square meters' onChange={(e) => setFactorySize(e.target.value)} />
                                </div>
                                <div className="Companydiv3">
                                    <label className="labelStyle">Factory Country/State</label>
                                    <input type="text" className="textStyle14" placeholder='Factory Country/State' onChange={(e) => setFactoryState(e.target.value)} />
                                </div>

                                <div className="Companydiv3">
                                    <label className="labelStyle">No. of Production Lines</label>
                                    <input type="text" className="textStyle15" placeholder='Above 10' onChange={(e) => setProductionLines(e.target.value)} />
                                </div>

                                <div className="Companydiv3">
                                    <label className="labelStyle">Contract Manufacturing</label>
                                    <input type="text" className="textStyle16" placeholder='OEM Service OfferedDesign Service Offered' onChange={(e) => setContractManufacturing(e.target.value)} />
                                </div>

                                <div className="Companydiv3">
                                    <label className="labelStyle">Annual Output Value</label>
                                    <input type="text" className="textStyle17" placeholder='Above US$100 Million' onChange={(e) => setAnnualOutputValue(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div className="OverProduction">
                                <h4 className="title">Annual Production Capacity </h4>
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
                                        {inputList2.map((x, i) => {
                                            return (
                                                <tr className='pproducttable'>
                                                    <td className="pproductthead"><input type="text" placeholder="Enter Name" onChange={e => handleInputChange2(e, i)} id="ProductName" /></td>
                                                    <td><input type="text" placeholder="Enter No." onChange={e => handleInputChange2(e, i)} id="ProductionLineCapacity" /></td>
                                                    <td><input type="text" placeholder="Enter Qty" onChange={e => handleInputChange2(e, i)} id="ActualUnitsProduced" /></td>
                                                    <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange2(e, i)} id="verified2" /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table><br />
                                <button className='kont' onClick={handleAddClick2}>Add</button>
                                {inputList !== 1 && <button onClick={() => handleRemoveClick2()} className="kont" >Remove</button>}<br />
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
                        <button className="kont">Save For Later</button>
                        <button className="kont">Back</button>
                        <button className='kont' loading={loading} onClick={submitAll}>Continue</button>
                    </div>
                </div>
            </> : <Quality changePhases={changeStep} />
            }
        </>
    )
}

export default Production;
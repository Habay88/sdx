import axios from 'axios'
import React, { useState } from 'react'
import { API } from '../../../Helpers/environment/backend'
import './rCapacity.css'
import Capability from './tradeCapability'




const Capacity = () => {

    const [step, setStep] = useState(1)

    const changeStep = () => {
        setStep(1)
    }
    const onCapability = (e) => {
        setStep(2)
    }

    const [inputList, setInputList] = useState([{
        certificate: "", certificateName: "", issuedBy: "",
        businessScope: "", availableDate: "", researchDev: "", verified: false
    }])
    const handleInputChange = (e, index) => {

        let name = e.target.id
        let value = e.target.value
        if ((name === "verified") && (value === "on")) {
            value = true
        }
        else if ((name === "verified") && (value === "off")) {
            value = false
        }

        else if (name === 'certificate'){
            value = e.target.files[0]
            console.log(value)
        }

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
            certificate: "", certificateName: "", issuedBy: "", businessScope: "",
            availableDate: "", researchDev: "", verified: false
        }])
    }

    const submitDetails = () => {

        console.log("This is my input List", inputList)
        for (let element of inputList) {
            var myForm = new FormData()
            myForm.append("Certificate", element.certificate)
            myForm.append("CertificateName", element.certificateName)
            myForm.append("issuedby", element.issuedBy)
            myForm.append("businessScope", element.businessScope)
            myForm.append("availableDate", element.availableDate)
            myForm.append("researchandDev", element.researchDev)
            myForm.append("verified", element.verified)
            // let data1 = {
            //     // companyName: `${API}user/user/${id}/`,
            //     Certificate: element.certificate,
            //     CertificateName: element.certificateName,
            //     issuedby: element.issuedBy,
            //     businessScope: element.businessScope,
            //     availableDate: element.availableDate,
            //     researchandDev: element.researchDev,
            //     verified: element.verified,

            // }
            //console.log("This is data 1", data1)


            axios({
                url: `${API}companyprofile/randdcapacity/`, 
                method : 'POST',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                data: myForm
            })
                .then(res => {
                    console.log(res)
                })

                .catch(err => {
                    console.log(err)
                })
                .then(onCapability())
        }

    }

    return (
        <>
            {step === 1 ? <>
                <div className='rock'>
                    {/* <div className='bossdown'>  */}
                    <div className="MainTable">
                        <div className="OverProduction">
                            <h4 className="title">Test Equipment </h4>
                        </div>
                        <br />
                        <table>
                            <thead>
                                <tr className='pproducttable'>
                                    <th className="pproductthead">Certification (Picture) </th>
                                    <th> Certification Name </th>
                                    <th > Issued BY </th>
                                    <th > Business Scope</th>
                                    <th > Available Date</th>
                                    <th>Research and Development </th>
                                    <th > Verified </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputList.map((x, i) => {

                                    return (

                                        <tr className='pproducttable' >
                                            <td className="pproductthead"><input type="file" onChange={e => handleInputChange(e, i)} id='certificate' /></td>
                                            <td><input type="text" placeholder="HBZ-40/40" onChange={e => handleInputChange(e, i)} id='certificateName' /></td>
                                            <td><input type="text" placeholder="Issued By" onChange={e => handleInputChange(e, i)} id='issuedBy' /></td>
                                            <td><input type="text" placeholder="Business Scope" onChange={e => handleInputChange(e, i)} id='businessScope' /></td>
                                            <td><input type="text" onChange={e => handleInputChange(e, i)} id='availableDate' /></td>
                                            <td><input type="text" placeholder=" 10-15 people" onChange={e => handleInputChange(e, i)} id='researchDev' /></td>
                                            <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} id='verified' /></td>

                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                        <button className='kont' onClick={handleAddClick}>Add</button>
                        {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}
                        <button className="continue" onClick={submitDetails}>Continue</button>
                    </div>

                    {/* </div> */}
                </div>
            </> : <Capability changePhases={changeStep} />
            }
        </>
    )
}
export default Capacity;



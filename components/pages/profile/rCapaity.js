import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose, AiOutlineConsoleSql } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import './rCapability.css'

const Document = () => {


    const [inputList, setInputList] = useState([{ machineName: "", certificateName: "", issuedBy: "", businessScope: "", availableDate: "", verified: false }])
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




    return (
        <div className='rock'>
            {/* <div className='bossdown'>  */}
            <div className="MainTable">
                <div className="OverProduction">
                    <h4 className="title">Test Equipment </h4>
                    {/* <Tooltip placement="bottom" title="Add New Table" >
                    <button onClick={handleAddClick} ><BiPlusMedical className="addTable1" /></button>
                </Tooltip> */}

                    {/* <Tooltip placement="bottom" title="Add New Table" >
                        <BiPlusMedical onClick={handleAddClick} className="addTable" />
                    </Tooltip>
                    {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="removeTable" >Remove</button>} */}
                </div>
                <br />

                <table>
                    <thead>
                        <tr className='pproducttable'>
                            <th className="pproductthead">Certification (Picture) </th>
                            <th> Certification Name </th>
                            <th > Issued BY </th>
                            <th > Business Scope  </th>
                            <th > Available Date   </th>
                            <th > Verified </th>
                            {/* <th>Remove Button</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {inputList.map((x, i) => {

                            return (

                                <tr className='pproducttable' >
                                    <td className="pproductthead"><input type="file" placeholder="Enter Name" onChange={e => handleInputChange(e, i)} /></td>
                                    <td><input type="text" placeholder="HBZ-40/40" onChange={e => handleInputChange(e, i)} /></td>
                                    <td><input type="text" placeholder="Issued By" onChange={e => handleInputChange(e, i)} /></td>
                                    <td><input type="text" placeholder="Business Scope" onChange={e => handleInputChange(e, i)} /></td>
                                    <td><input type="date" placeholder=" Date" onChange={e => handleInputChange(e, i)} /></td>
                                    <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} /></td>

                                </tr>


                            )

                        })}

                    </tbody>

                </table>
                <button className='kont' onClick= {handleAddClick}>Add</button>
          {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}
                <button className="continue">Continue</button>
            </div>

            {/* </div> */}

        </div>
    )
}
export default Document;



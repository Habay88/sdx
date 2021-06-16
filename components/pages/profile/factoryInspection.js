import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import './productionCapacity.css'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';



const Factory = () => {

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
                <button className='kont'>Submit</button>
            </div>
        </div>
    )
}

export default Factory;



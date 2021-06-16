import React from 'react'
import './quickorder.css'
import { AiOutlineSearch } from "react-icons/ai";


function Quickorder() {
    return (
        <>
            <div>
                <h2>Quick Order</h2>
            </div>
            <div className="TopLayer">
                <input placeholder="Search" type="text" className="QOSearch"/>
                <span ><AiOutlineSearch size={20} /> </span>

                <div className="toxBox">

                </div>
            </div>
        </>
    )
}

export default Quickorder
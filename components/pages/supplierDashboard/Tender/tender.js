import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import Search from './Components/Search'
import Tendertable from './Components/Tendertable'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import './tender.css'

const TenderList = ()=>{

    const [loading, setLoading] = useState(false);

    return(
        <div style={{marginLeft: 20}}>
          <>
            <h4 className='titleee'>Tenders</h4><br/>
            <Search/>
            <br/><br/> 
            <Tendertable/>
          </>
        </div>
    )
}

export default TenderList;


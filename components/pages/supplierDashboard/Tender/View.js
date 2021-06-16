import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const View = () =>{
    // const history = useHistory();
    return(
        <div>
            <h1>VIEW</h1>
            {/* <button onClick={() => history.goBack()} >Back</button> */}
            <Link to="/supplier/dashboard">Back</Link>
        </div>
    )
}

export default View
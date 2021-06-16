import React,{useState , useEffect} from 'react'
import Loader from "react-loader-spinner";
import './StatusList.css'
import './tender.css'
import { API } from '../../../Helpers/environment/backend';
import axios from 'axios'
import swal from 'sweetalert';



const StatusList = ({id , onBack}) => {

    const [idd , setIdd] = useState(0)
    const [supplier , setSupplier] = useState({})
    useEffect(() => {
        getSupplier(id)
        console.log(id)
        setIdd(id)
       } , [])

      
 

    const getSupplier = async (id) => {
            
        try {
            const response = await axios.get(`${API}user/supplier/${id}/`)
            console.log(response)

            setSelectDescriptionInfoDocs(response.data.documentsDescription)
            setSelectDocumentLocation(response.data.documentsLocation)
            setSelectOwner(response.data.documentsOwner)
            setSelectStartDate(response.data.documentsStartDate)
            setSelectEndDate(response.data.documentsEndDate)
            setSelectRevisitDate(response.data.documentsRevisitDate)
            setSelectSelected(response.data.documentsStatus)
       
            // setSupplier({
            //     "documentsStatus" : response.data.status,
            //     "documentsDescription" : response.data.documentsDescription,
            //     "documentsLocation" : response.data.documentsLocation,
            //     "documentsOwner" : response.data.documentsOwner,
            //     "documentsStartDate" : response.data.documentsStartDate,
            //     "documentsEndDate": response.data.documentsEndDate,
            //     "documentsRevisit" : response.data.documentsRevisitDate
            // })
            
            console.log(response.data.companyName)
            setCompanyName(response.data.companyName)
            setLoading(false)
            
            
        } catch (error) {
            console.log(error)
        }
        
    }
     
      const [companyname , setCompanyName] = useState()
      const [selectSelected , setSelectSelected] = useState(0)
      const [selectInfoDocs , setSelectInfoDocs ] = useState("")
      const [selectDescriptionInfoDocs , setSelectDescriptionInfoDocs] = useState("")
      const [selectDocumentLocation , setSelectDocumentLocation] = useState("")
      const [selectOwner , setSelectOwner] = useState("")
      const [selectStartDate , setSelectStartDate] = useState(null)
      const [selectEndDate , setSelectEndDate ] = useState(null)
      const [selectRevisitDate , setSelectRevisitDate ] = useState(null)
    const [loading , setLoading] = useState(true)
    const [phase, setPhase] = useState(2)
    const [incodocuments , setIncoDocuments] = useState('Incoperation Documents')
    const [shareholderAndBeneficiary , setShareholderAndBeneficiary] = useState('Shareholder and beneficiary')
    const [boardMemberData , setBoardMemberData] = useState('Board members data')
    const [politicalTies , setpoliticalTies] = useState('Political ties')
    const [officialReferences , setOfficialReferences] = useState('Official References')
    const [proffOfIdentites , setProofOfIdentites] = useState('Proof of Identities')
    const [sourceOfFunds , setSourceOfFunds] = useState('Source of Funds')
    const [creditCheck , setCreditCheck] = useState('Credit Check')
    const [researchPublicRecords , setResearchPublicRecords ] = useState('Research Public Records')
    const [ConductSactionScreening , setConductSactionScreening] = useState('Conduct sanctions screening')
    const [checkAgainstDisqualifiedEntities , setCheckAgainstDisqualifiedEntities] = useState('Check against disbarred or disqualified entities list')
    const [identityGovernmentAffliations , setIdentityGovernmentAffliations] = useState('Identity Government Affliations')
    const [risksAssociatedWithCountryOfOrigin , setRisksAssociatedWithCountryOfOrigin] = useState('Risk associated with country origin')
    const [thirdPartiesAssociatedWithVendors , setThirdPartiesAssociatedWithVendors] = useState('Identitfy risks associated with third parties with vendors')
    const [internalAndOperationalFactors , setInternalAndOperationalFactors ] = useState('Identify risks due to internal and operational factors')
    const [establshFrequencyOfMonitoring , setEstablshFrequencyOfMonitoring] = useState('Establish frequency of monitoring')
    const [establishControlMeasuresAndRequirements , setEstablishControlMeasuresAndRequirements] = useState('Establish control measures and requirements')
    

  
    
const changeSelect = (e) =>{

    let change;
    change = e.target.value;
    setSelectInfoDocs(change)
    console.log(selectInfoDocs)
    
}



const infoDocsClick = (e) => {
    e.preventDefault()

    if (selectDescriptionInfoDocs == ''){

        swal({
            title: "Validation Issue!",
            text: "Document desription is empty",
            icon: "error",
            button: "ok",
          });
         
    }
    else if (selectDocumentLocation == ''){
        swal({
            title: "Validation Issue!",
            text: "Document location is empty",
            icon: "error",
            button: "ok",
          });

    }

    else if (selectOwner == ''){
        swal({
            title: "Validation Issue!",
            text: "Document Owner is empty",
            icon: "error",
            button: "ok",
          });
    }
    
    else if (selectStartDate == ''){
        swal({
            title: "Validation Issue!",
            text: "Start date is empty",
            icon: "error",
            button: "ok",
          });
    }
    else if(selectEndDate == ''){

        swal({
            title: "Validation Issue!",
            text: "End date is empty",
            icon: "error",
            button: "ok",
          });

    }

    else if(selectRevisitDate == ''){

        swal({
            title: "Validation Issue!",
            text: "Revisit date is empty",
            icon: "error",
            button: "ok",
          });

    }

    else {




  

    let statuss;
    let bodyy = {
        "documentsStatus" : selectInfoDocs === "Not Started" ? 0 : selectInfoDocs === "Complete" ? 1 : selectInfoDocs === "On Hold" ? 2 : selectInfoDocs === "In Progress" ? 3 : 4 ,
        "documentsDescription" : selectDescriptionInfoDocs,
        "documentsLocation" : selectDocumentLocation,
        "documentsOwner" : selectOwner,
        "documentsStartDate" : selectStartDate,
        "documentsEndDate" : selectEndDate,
        "documentsRevisitDate" : selectRevisitDate

       }
       

       let options = {
        method : "PATCH",
        headers : {
        Accept : "application/json",
        "content-type" : "application/json"
        },
         body : JSON.stringify(bodyy)
        }
       
        console.log(bodyy)
        return fetch(`${API}user/supplier/${idd}/`, options)
       .then(res => {
           console.log(res)
           statuss = res.status
           
          
       })
       .then(()=> {
           if (statuss < 400){

            
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "ok",
              });
             
            
              
           }
           else {
            swal({
                title: "Not a Good job!",
                text: "You clicked the button!",
                icon: "error",
                button: "ok",
              });
           }
       })
       .catch(err => console.log(err))


}
}

console.log(selectSelected)

return(
     <div style ={{marginLeft : 20}}>
     
     {phase === 2 ? <>
     <h4 className = "title">{companyname}</h4>
  
     
     <button className = "backButton" onClick = {onBack}>Back</button><br/>
     <center><h6 className ="title">This is to Notify the staff that, approval of the following checks is verified through your consent.</h6></center>
     <br/><br/><br/>
     
     {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
     <Loader type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /></div>:
                
                <table>
            <thead>
            <tr className='trrr headdd'> 
            <th>Status</th> 
            <th>Tasks</th>
            <th>Description</th> 
            <th>Document<br/>Location</th> 
            <th>Owner</th> 
            <th>Start<br/>Date</th> 
            <th>End<br/>Date</th> 
            <th>Revisit<br/>Date</th> 
            <th>Action</th>

             
            
            </tr> 
           </thead>
       
            <tbody>
    
                   
                
                   <tr className = "trr headd">
                   <td>
                      
                       {selectSelected == 0 ?  
                       
                       <select onChange = {changeSelect}>
                       
                           <option className = "NotStarted" selected>Not Started</option>
                           <option className = "revisitDue" >Revisit Due</option>
                           <option className = "Complete">Complete</option>
                           <option className = "inProgress">In Progress</option>
                           <option className = "onHold">On Hold</option>
                       </select> : selectSelected == 1 ? 
                        <select onChange = {changeSelect} >
                       
                        <option className = "NotStarted" >Not Started</option>
                        <option className = "revisitDue" >Revisit Due</option>
                        <option className = "Complete" selected>Complete</option>
                        <option className = "inProgress">In Progress</option>
                        <option className = "onHold">On Hold</option>
                    </select>: selectSelected == 2 ? 
                     <select onChange = {changeSelect}>
                       
                     <option className = "NotStarted">Not Started</option>
                     <option className = "revisitDue">Revisit Due</option>
                     <option className = "Complete">Complete</option>
                     <option className = "inProgress" selected>In Progress</option>
                     <option className = "onHold" >On Hold</option>
                 </select> : selectSelected == 3 ?  
                  <select onChange = {changeSelect}>
                       
                  <option className = "NotStarted">Not Started</option>
                  <option className = "revisitDue">Revisit Due</option>
                  <option className = "Complete">Complete</option>
                  <option className = "inProgress" selected>In Progress</option>
                  <option className = "onHold" >On Hold</option>
                    </select> :  <select onChange = {changeSelect}>
                       
                       <option className = "NotStarted">Not Started</option>
                       <option className = "revisitDue" selected>Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                         </select>
                       }                        
                   </td>
                   <td>{incodocuments}</td>
                   <td><textarea placeholder ="description" className ="approvalDescr"  onChange = {(e) => setSelectDescriptionInfoDocs(e.target.value)}  value = {selectDescriptionInfoDocs} /></td>
                   <td><input type = "text" className ="approvalLocation" onChange = {(e) => setSelectDocumentLocation(e.target.value)} value = {selectDocumentLocation}/></td>
                   <td><input type = "text" className ="approvalOwner" onChange = {(e) =>setSelectOwner(e.target.value) } value = {selectOwner}  /></td>
                   <td><input type = "date" className ="approvalStartDate" onChange = {(e) => setSelectStartDate(e.target.value)} value = {selectStartDate} /></td>
                   <td><input type = "date" className ="approvalEndDate" onChange = {(e) => setSelectEndDate(e.target.value)}  value = {selectEndDate}/></td>
                   <td><input type = "date" className ="approvalRevisitDate" onChange = {(e) => setSelectRevisitDate(e.target.value)} value = {selectRevisitDate} /></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton" onClick = {infoDocsClick}>Submit</button></td>
                   </tr>
                    <tr className = "trr headd">
                    <select>
                       
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                   
                    <td>
                        {shareholderAndBeneficiary}
                    </td>
                  
                  <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>

                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{boardMemberData}</td>
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>

                   </tr>

                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{politicalTies}</td>
                   <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>

                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
               
                    <td>{officialReferences}</td>

                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                
                  
                   </tr>

                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
           
                    <td>{proffOfIdentites}</td>

                  <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                 
                    <td>{sourceOfFunds}</td>
               
                   
                  <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                  
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{creditCheck}</td>
        
                              
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{researchPublicRecords}</td>
                   <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                 

                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{ConductSactionScreening}</td>
                  
        
                   <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>
                    <tr className = "trr headd">
                    <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{checkAgainstDisqualifiedEntities}</td>
              
              
                   <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{identityGovernmentAffliations}</td>
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                    <br/>
                    
           
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{risksAssociatedWithCountryOfOrigin}</td>
                    
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                

                
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
            
                    <td>{thirdPartiesAssociatedWithVendors}</td>
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
              
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                    <td>{internalAndOperationalFactors}</td>
                
                   
                   <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
                   <td><input type = "text" className ="approvalLocation"/></td>
                   <td><input type = "text" className ="approvalOwner"/></td>
                   <td><input type = "date" className ="approvalStartDate"/></td>
                   <td><input type = "date" className ="approvalEndDate"/></td>
                   <td><input type = "date" className ="approvalRevisitDate"/></td>
                   {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
                   <td><button type = "text" className ="approvalButton">Submit</button></td>
                   </tr>
                    <tr className = "trr headd">
                    <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
                   
                    <td>{establshFrequencyOfMonitoring}</td>
                  
                
          
               <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
               <td><input type = "text" className ="approvalLocation"/></td>
               <td><input type = "text" className ="approvalOwner"/></td>
               <td><input type = "date" className ="approvalStartDate"/></td>
               <td><input type = "date" className ="approvalEndDate"/></td>
               <td><input type = "date" className ="approvalRevisitDate"/></td>
               {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
               <td><button type = "text" className ="approvalButton">Submit</button></td>
             
                   </tr>
                   <tr className = "trr headd">
                   <select>
                       <option className = "notStarted">Not Started</option>
                       <option className = "revisitDue">Revisit Due</option>
                       <option className = "Complete">Complete</option>
                       <option className = "inProgress">In Progress</option>
                       <option className = "onHold">On Hold</option>
                   </select>
              
                    <td>{establishControlMeasuresAndRequirements}</td>
                    <td><textarea placeholder ="description" className ="approvalDescr"  /></td>
               <td><input type = "text" className ="approvalLocation"/></td>
               <td><input type = "text" className ="approvalOwner"/></td>
               <td><input type = "date" className ="approvalStartDate"/></td>
               <td><input type = "date" className ="approvalEndDate"/></td>
               <td><input type = "date" className ="approvalRevisitDate"/></td>
               {/* <td><textarea type = "text" className ="approvalNotes"/></td> */}
               <td><button type = "text" className ="approvalButton">Submit</button></td>
           
              
                   </tr>
                   
                   

                 
                 
                   
             
                
                    
                    
            
             
             </tbody>
            </table>
            
    }
     
     
     
     
     
     
     </> : null}



    </div>
    )


}

export default StatusList
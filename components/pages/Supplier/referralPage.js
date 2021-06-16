import React , {useState , useEffect} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import '../../../styles/pages/supplierStack.css'
import {useHistory} from 'react-router-dom'
import { signout} from '../../Helpers/auth/index'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { API, updateStep } from '../../Helpers/environment/backend';
import Navbarr from '../../layouts/navbarr'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Multiselect } from 'multiselect-react-dropdown';

let allFamily = [];
let allProductClass = []
let industries = []
let statuss


const ReferralPage = () => {



  const [inputlist, setInputList] = useState([{firstName : ""}]);
  const history = useHistory()
  const [segment, setSegment] = useState([]);
  const [family , setFamily] = useState([]);
  const [productclass , setProductClass] = useState([])
  const [seg, setSeg] = useState('');
  const [school,setSchool] = useState(0);
  const [fam, setFam] = useState('');
  const [pro , setPro] = useState('');
  const [industry, setIndustry] = useState([])
  const name = window.localStorage.getItem('name')
  const [selected, setSelected] = useState([]);
  const [selectedCompanies , setSelectedCompanies] = useState([])
  const [companies , setCompanies] = useState([])
  const [procurement , setProcurement] = useState([])
  const [classProduct , setClassProduct] = useState([])
  const [products, setProducts] = useState([])
  const [id, setId] = useState(0)
  const[ide , setIde] = useState(0)
  const [allCompany, setAllCompany] = useState([])
 // const [pro, setPro] = useState()
  const [step , setStep] = useState(0)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [activeTab, setActiveTab] = useState('1');

  useEffect(()=>{
    const idd = localStorage.getItem('id')
        setId(parseInt(idd))
        console.log(idd)
        segMent()

        getIndustry()
        getProcurementManager()
      
      }, [])
    
     const onSignout = () => {
        signout()
        history.push({
          pathname : "/"
        })
       }
    const getIndustry = ()=>{
       axios.get(`${API}industry/industry/`)
        .then(res => {
          console.log(res.data)
          res.data.map(e =>
            industries.push({
               name: e.industry_name, id: e.industry_name
            })
          )
          setIndustry(industries)
         })
        .catch(err => console.log(err))
      }
    
    const SelecteddCompanies = (select) => {
        
        setSelectedCompanies(select)
       
    }
    
    const back = () => {
      history.push("/supplier/companydetails")
    }

     const getProcurementManager = (e) => {
        let myArray = []
        axios.get(`${API}user/procurementmanager/getProcurementManager/?industry=${e}`)
        .then(res => {
          console.log(res)
          res.data.map(e =>
            myArray.push({
              name: e.fields.companyName,
              id: e.pk
              
            })
          )
          setCompanies(myArray)
          setAllCompany(myArray)
          console.log(myArray)
        
        })
        .catch(err => console.log(err))

      }
      
           
      const segMent = () => {
    
        axios.get(`${API}segment/segment/`)
        .then(res =>{
          console.log(res.data)
          setSegment(res.data)
        })
        .catch(err => console.log(err))
      }

    const getFamily = (e) => {
      let arr = []
     axios.get(`${API}family/family/getFamily/?segment=${e}`)
     .then(res => {
         
          res.data.map(item => {
            arr.push(item.fields.familyName)
          })
          console.log(arr)
           setFamily(arr)
          })
     .catch(err => {
       console.log(err)
     })

    }
 const getProductClass = (e) => {
     let arr = []
      axios.get(`${API}productclass/productclass/getProductClass/?familyName=${e}`)
      .then(res => {

         res.data.map(item => {
           arr.push(item.fields.className)
         })
         console.log(arr)
         setProductClass(arr)
          
      })
      .catch(err => {
        console.log(err)
      })


    }
  
const getProduct = (e) => {
  let arr = []
   axios.get(`${API}product/product/getProduct/?className=${e}`)
   .then(res => {
     res.data.map(item => {
       arr.push(item.fields.productName)
     })
     console.log(arr)
     setClassProduct(arr)
    })
   .catch(err => console.log(err))
  }


   const changeProductClass = (e) => {

     getProduct(e.target.value)

   }
 
   
    const changeFamily = (e) => {
    
      getProductClass(e.target.value)

      
      
      
     }
    
      const changeSeg = (e)=>{
        
        getFamily(e.target.value)
         
       }
       const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }
  
      const handleInputChange = (e, index) => {
          const { name, value } = e.target;
          const list = [...inputlist];
          list[index][name] = value;
          setInputList(list);
          };
      const  handleRemoveClick = index =>{
        const list = [...inputlist];
        list.splice(index,1);
        setInputList(list);
      };
      const handleAddClick=()=>{
          setInputList([...inputlist,{firstName :""}])
        }
  
       const  onSelect = (select)=> {
          console.log(select)
          let manager = "";
          let man = {};
            setSelected(select)
            if (select.length > 0) {
              man =  select[select.length - 1]
              manager = man.id
              
              getProcurementManager(manager)
              
            }
            else{
              setCompanies([])
              }
      }
  

    
       

const onSubmitProducts = (e) => {
   e.preventDefault()
  
  let list = []

  inputlist.map(e =>
    list.push(parseInt(e.firstName))
  )
  console.log(inputlist)

  let bodyy = {
    id : id,
    products: list
  }

    let options = {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyy)
      
  }
    console.log(bodyy)

  return fetch(`${API}user/supplier/updateSupplier/`, options)
  .then(res =>{
   statuss = res.status
   console.log(statuss)


  })
  .then(() => {
     if(statuss < 400) {
       alert("Products has successfully saved")
       setActiveTab('2')
       toggle(activeTab)

     }
     else {
       alert("products has not been saved")
     }
  })
  .catch(err => console.log(err))
   

  }

  const onSubmitCompanies = (e) => {
   e.preventDefault()
   let procurementManager = []
   let statuss;
  
   selectedCompanies.map(e => procurementManager.push(`${parseInt(e.id)}`) )

   let bodyy = {
    id : id,
    procurementManager : procurementManager,

    
  }
   
    let options = {
        method : "POST",
        headers : {
        Accept : "application/json",
        "content-type" : "application/json"
        },
         body : JSON.stringify(bodyy)
        }
        console.log(bodyy)
        return fetch(`${API}user/supplier/updateSupplier/`, options)
       .then(res => {
        statuss = res.status
        res.json()
       
        
      })
      .then(() => {
        let id = localStorage.getItem('id')
        if(statuss < 400){
          alert("Company has been saved")
           updateStep(2, id) 
          history.push({
            pathname : "/supplier/payment"
          })
        }
        else{
          alert("company has not been saved ")

        }
       
      })
      .catch(err => console.log(err))
   
    }
    





    return(
    <>
     <Navbarr one = {<AiOutlineCheck size = '1.2em' color = 'black'/>} two = {<AiOutlineCheck size = '1.2em' color = 'black'/>} three = {<AiOutlineCheck size = '1.2em' color = 'black'/>} four ={<AiOutlineCheck size = '1.2em' color = 'black'/>}/>

     <div id = "container">
           
        <aside id = "sideBar">
            
        <h4 id = "homeTitle"><center>SupplierStack</center></h4> 
         
        </aside>
        <section id = "RegisterBar">
        <Tabs>
      <div>
      <Tab ><button style = {{padding : '10px' }}>Refferal</button></Tab>
      <Tab ><button style = {{marginLeft : '5px' , padding : '10px'}}>Choose Companies</button></Tab>
      
    </div><hr/>

        <Panel>
<h3 id = "chooseCompaniesHeader">Choose Companies</h3><br/>
<span style={{marginLeft: '34%', position: 'absolute', fontSize: 17, marginTop : '-4%' }}>Hi, {name}
<button  className='backed' onClick = {onSignout} > Logout</button>
</span>


<h3 id = "chooseCompanies">
 You were referred by a SupplierStack Procurement client<br/><br/>
 Please enter your referral code:

</h3>
<br/><br/>
<label id = "formLabel">Referral Company</label><br/>
<input id = "formStyle" type = "text" placeholder = "Referral Company"/><br/><br/>
<label id = "formLabel">Referral Code</label><br/>
<input id = "formStyle" type = "text"  placeholder = "Referral Code"/><br/><br/><br/><br/>


<button id ="buttonStyleRegister">Submit</button><br/>
<button id ="buttonStyleRegister" onClick = {back} >Back</button>

        </Panel>

        <Panel>

        <h3 id = "chooseCompany">Choose Company
            <span style={{marginLeft: '18%', position: 'absolute', fontSize: 17}}>Hi, {name}
               <button  className='backed' onClick={onSignout} > Logout</button></span>
            </h3>
            <br/>
        
        <div id = "PaymentSubContainersPm1">
        <div id ="MarketContainer">
        <div id = "MarketStyle">
            <label id = "formLabel">Market</label>
         
           <Multiselect
           options={industries} // Options to display in the dropdown
           showCheckbox={true}
           avoidHighlightFirstOption={true}
          //  selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
          //  onRemove={this.onRemove} // Function will trigger on remove event
           displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <div id = "CompaniesStyle">
            <label id = "formLabel">Companies</label>
         

           <Multiselect
           options={companies} // Options to display in the dropdown
           showCheckbox={true}
           avoidHighlightFirstOption={true}
            selectedValues={selectedCompanies} // Preselected value to persist in dropdown
            onSelect={SelecteddCompanies} // Function will trigger on select event
          //  onRemove={this.onRemove} // Function will trigger on remove event
           displayValue="name" // Property name to display in the dropdown options
          />
       </div>
       </div>

    <div id = "MassiveImportStyle">
              
            <div id = "UploadContainer">
            <div id = "billing">
<label id = "formLabelBilling">Annual Billing : </label>
<label id = "formLabelBilling">Price </label> 

</div><br/>
<button id = "buttonStyleRegister" onClick = {onSubmitCompanies}>Continue</button><br/>
<button id = "buttonStyleRegister">Back</button>

            </div>

    </div> 


    </div>
  <div id = "PaymentSubContainers2Pm">
       
  <div id = "SelectedStyle">
           
            <div id = "companySelect">
            <center>{selectedCompanies.length > 0 ? 
                            selectedCompanies.map((e, i)=>(
                              <>
                               <label id = "formLabel" style={{color: '#077b9e', fontSize: 16, fontWeight:'bold'}}>Selected</label>
                              <p key={i} style = {{color : 'black'}}>{e.name}</p>
                              </>
                          )) : null
            }</center>


         

            </div>
            </div>

 </div>


        </Panel>

        </Tabs>

       
        </section>
        {/* <div id = "container">
          <footer id ="mainFooter">
            <h4 id = "footerTag">&copy;Sterlingtech 2021</h4>
          </footer>
        </div> */}


     </div>
     </>

    )
}

export default ReferralPage
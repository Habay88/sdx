import React, { useState, useEffect } from 'react'
import '../../../styles/pages/supplierStack.css'
import { useHistory } from 'react-router-dom'
import { signout } from '../../Helpers/auth/index'
import { Link } from 'react-router-dom'
import NavbarrPm from '../../layouts/navbarrPm'
import { AiOutlineCheck } from 'react-icons/ai'
import axios from 'axios'
import { API, updateStep, updateStepPm } from '../../Helpers/environment/backend';
import { Multiselect } from 'multiselect-react-dropdown';



// let allFamily = [];
// let allProductClass = []
let industries = []
let statuss


const AddProducts = () => {

  const history = useHistory()

  const [inputlist, setInputList] = useState([]);

  const [segment, setSegment] = useState([]);
  const [family, setFamily] = useState([]);
  const [productclass, setProductClass] = useState([])
  const [seg, setSeg] = useState('');
  const [school, setSchool] = useState(0);
  const [fam, setFam] = useState('');
  const [pro, setPro] = useState('');
  const [industry, setIndustry] = useState([])
  const name = window.localStorage.getItem('name')
  const [selected, setSelected] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [companies, setCompanies] = useState([])
  const [procurement, setProcurement] = useState([])
  const [classProduct, setClassProduct] = useState([])
  const [products, setProducts] = useState([])
  const [id, setId] = useState(0)
  const [ide, setIde] = useState(0)
  const [allCompany, setAllCompany] = useState([])
  // const [pro, setPro] = useState()
  const [step, setStep] = useState(0)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [activeTab, setActiveTab] = useState('1');

  const [phase, setPhase] = useState(1)

  useEffect(() => {
    const idd = localStorage.getItem('id')
    setId(parseInt(idd))
    console.log(idd)
    segMent()
    getProduct()

    getIndustry()
    getProcurementManager()
    getProductClass()
  }, [])

  const onSignout = () => {
    signout()
    history.push({
      pathname: "/"
    })
  }

  const back = () => {
    history.push("/supplier/companydetails")
  }

  const getFamily = (e) => {
    let arr = []
    axios.get(`${API}family/family/getFamily/?segment=${e}`)
      .then(res => {

        res.data.map(e => {
          arr.push({
            name: e.fields.familyName,
            id: e.pk
          })
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

        res.data.map(e => {
          arr.push({
            name: e.fields.className,
            id: e.pk
          })
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
        res.data.map(e => {
          arr.push({
            name: e.fields.productName,
            id: e.pk
          })
        })
        console.log(arr)
        setClassProduct(arr)
      })
      .catch(err => console.log(err))
  }

  const changeSeg = (e) => {

    getFamily(e.target.value)

  }

  const changeFamily = (e) => {

    getProductClass(e.target.value)

  }

  const getIndustry = () => {
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

  const selectedProducts = (select) => {

    setInputList(select)
    console.log(select)

  }

  const removeProduct = (select) => {
    console.log(select)
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




  const changeProductClass = (e) => {

    getProduct(e.target.value)

  }






  const segMent = () => {

    axios.get(`${API}segment/segment/`)
      .then(res =>
        setSegment(res.data)
      )
      .catch(err => console.log(err))
  }




  const onSubmitProducts = (e) => {
    e.preventDefault()

    let list = []

    inputlist.map(e =>
      list.push(e.id)
    )
    console.log(list)

    let bodyy = {
      id: id,
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

    return fetch(`${API}user/procurementmanager/updateProcurementManager/`, options)
      .then(res => {
        statuss = res.status
        console.log(statuss)


      })
      .then(() => {
        if (statuss < 400) {
          alert("Products has successfully saved")
          setPhase(2)

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

    selectedCompanies.map(e => procurementManager.push(`${parseInt(e.id)}`))

    let bodyy = {
      id: id,
      procurementManager: procurementManager,


    }

    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(bodyy)
    }
    console.log(bodyy)
    return fetch(`${API}user/procurementmanager/updateProcurementManager/`, options)
      .then(res => {
        statuss = res.status
        res.json()


      })
      .then(() => {
        let id = localStorage.getItem('id')
        if (statuss < 400) {
          alert("Company has been saved")
          updateStepPm(2, id)
          history.push({
            pathname: "/pm/dashboard"
          })
        }
        else {
          alert("company has not been saved ")

        }

      })
      .catch(err => console.log(err))

  }

  const onSelect = (select) => {
    console.log(select)
    let manager = "";
    let man = {};
    setSelected(select)
    if (select.length > 0) {
      man = select[select.length - 1]
      manager = man.id

      getProcurementManager(manager)

    }
    else {
      setCompanies([])
    }
  }

  const backk = () => {
    history.push("/supplier/companydetails")
  }

  return (
    <>
      <NavbarrPm one={<AiOutlineCheck size='1.2em' color='black' />} four={<AiOutlineCheck size='1.2em' color='black' />}
        two={<AiOutlineCheck size='1.2em' color='black' />} three={<AiOutlineCheck size='1.2em' color='black' />} />
      <div id="container">

        <aside id="sideBar">

          <h4 id="homeTitle"><center>SupplierStack</center></h4>

        </aside>
        <section id="RegisterBar">

          <div>
            <button style={{ padding: '10px' }} onClick={() => setPhase(1)}>AddProducts</button>
            <button style={{ marginLeft: '5px', padding: '10px' }} onClick={() => setPhase(2)}>Choose Companies</button>

          </div><hr />
          {phase === 1 ?
            <>
              <h3 id="ProductHeader">Add Products
       <span style={{ marginLeft: '18%', position: 'absolute', fontSize: 17 }}>Hi, {name}
                  <button className='backed' onClick={onSignout} > Logout</button>
                  <span style={{ marginLeft: 10 }}><button className="backed" onClick={backk}>Back</button></span>
                </span>
              </h3><br /><br /><br /><br /><br />


              <div id="mainAddProduct">
                <label id="formLabel">Segment</label><br />
                <select id="formStyleSegment" onChange={changeSeg} >
                  <option>choose your Segment</option>

                  {segment && segment.map((e, i) => (<option key={i} value={e.segmentName}>{e.segmentName}</option>
                  ))}

                </select>
                <br /><br />
                <label id="formLabel">Family</label><br />
                <select id="formStyleFamily" onChange={changeFamily}>
                  <option>choose your Family</option>


                  {family && family.map((e, i) => (
                    <option key={i} value={e.name}>{e.id}-{e.name} </option>
                  ))}

                </select >
                <br /><br />

                <label id="formLabel">Class</label><br />
                <select id="formStyleClass" onChange={changeProductClass} >
                  <option>choose your Product Class</option>
                  {productclass && productclass.map((e, i) => (
                    <option key={i} value={e.name}>{e.id}-{e.name} </option>
                  ))}


                </select>
                <br />
                <hr class="ProductLine" />
                <label id="formLabel">Commodity</label><br />

                <Multiselect
                  id="formStyleClass"
                  options={classProduct} // Options to display in the dropdown
                  showCheckbox={true}
                  avoidHighlightFirstOption={true}
                  //selectedValues={selectedCompanies} // Preselected value to persist in dropdown
                  onSelect={selectedProducts} // Function will trigger on select event
                  onRemove={removeProduct} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                />

                <button id="buttonStyleRegister" onClick={onSubmitProducts}>Add Products</button><br />

              </div>

            </> :
            <>
              <h3 id="chooseCompany">Choose Company
                <span style={{ marginLeft: '16%', position: 'absolute', fontSize: 17 }}>Hi, {name}
                  <button className='backed' onClick={onSignout} > Logout</button></span>
              </h3>
              <br />

              <div id="PaymentSubContainersPm1">
                <div id="MarketContainer">
                  <div id="MarketStyle">
                    <label id="formLabel">Market</label>

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
                  <div id="CompaniesStyle">
                    <label id="formLabel">Companies</label>


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

                <div id="MassiveImportStyle">

                  <div id="UploadContainer">
                    <div id="billing">
                      <label id="formLabelBilling">Annual Billing : </label>
                      <label id="formLabelBilling">Price </label>

                    </div><br />
                    <button id="buttonStyleRegister" onClick={onSubmitCompanies}>Continue</button><br />
                  </div>

                </div>


              </div>
              <div id="PaymentSubContainers2Pm">

                <div id="SelectedStyle">

                  <div id="companySelect">
                  <label id="formLabel" style={{ color: '#077b9e', fontSize: 16, fontWeight: 'bold' }}>Selected</label>
                    <center>{selectedCompanies.length > 0 ?
                      selectedCompanies.map((e, i) => (
                        <>
                         
                          <p key={i} style={{ color: 'black' }}>{e.name}</p>
                        </>
                      )) : null
                    }</center>

                  </div>
                </div>

              </div>
            </>
          }
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

export default AddProducts;

{/* <NavbarrPm one = {<AiOutlineCheck size = '1.2em' color='black'/>} four={<AiOutlineCheck size = '1.2em' color = 'black'/>}
         two={<AiOutlineCheck size = '1.2em' color='black'/>} three={<AiOutlineCheck size = '1.2em' color = 'black'/>}/> */}

        // import NavbarrPm from '../../layouts/navbarrPm'
import React, { useState } from 'react'
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import './tradeCapability.css'
import Factory from './factoryInspection'
import { API } from '../../../Helpers/environment/backend';




const Capability = () => {

  const [languageSpoken, setLanguageSpoken] = useState('')
  const [totalAnnualRevenue, setTotalAnnualRevenue] = useState('')
  const [totalExportRevenue, setTotalExportRevenue] = useState('')
  const [acceptedDeliveryTerms, setAcceptDeliveryTerms] = useState('')
  const [acceptedPaymentCurrency, setAcceptPaymentCurrency] = useState('')
  const [acceptedPaymentType, setAcceptPaymentType] = useState('')
  const [step, setStep] = useState(1)

  const changeStep = () => {
    setStep(1)
  }
  const onFactory = (e) => {
    setStep(2)
  }

  const [inputList, setInputList] = useState([{ mainMarket: "", totalRevenue: "", mainProduct: "", verified: false }])
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
    setInputList(list)
  }

  const handleRemoveClick = index => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)

  }

  const handleAddClick = () => {
    setInputList([...inputList, {
      mainMarket: "", totalRevenue: "", mainProduct: "", verified: false
    }])
  }

  const submitDetails = () => {

    console.log("This is my input List", inputList)
    for (let element of inputList) {

      // let id = parseInt(localStorage.getItem('id'))


      let data1 = {
        // companyName: `${API}user/user/${id}/`,
        mainMarket: element.mainMarket,
        totalRevenue: element.totalRevenue,
        mainProduct: element.mainProduct,
        verified: element.verified,

      }

      console.log("This is data 1", data1)

      const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data1)
      }

      fetch(`${API}companyprofile/mainmarketproduct/`, requestOption)
        .then(res => {
          console.log(res)
        })

        .catch(err => {
          console.log(err)
        })
    }

  }

  const submitTradeAbility = () => {

    let data = {
      languageSpoken: languageSpoken,
      totalAnnualRevenue: totalAnnualRevenue,
      totalexportRevenue: totalExportRevenue,


    }

    console.log("This is our information ", data)

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch(`${API}companyprofile/tradeability/`, requestOption)
      .then(res => {
        console.log(res)
      })

      .catch(err => {
        console.log(err)
      })
  }

  const submitBusinessTerms = () => {

    let data2 = {
      acceptedDeliveryTerms: acceptedDeliveryTerms,
      acceptedPaymentCurrency: acceptedPaymentCurrency,
      acceptedPaymentType: acceptedPaymentType,
      
    }

    console.log("This is our information ", data2)

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data2)
    }

    fetch(`${API}companyprofile/businessterm/`, requestOption)
      .then(res => {
        console.log(res)
      })

      .catch(err => {
        console.log(err)
      })
  }


  const submitAll = () => {
    submitDetails()
    submitTradeAbility()
    submitBusinessTerms()
    onFactory()
  }



  return (
    <>
      {step === 1 ? <>
        <div className='rock'>
          <div className="MainTable">
            <div className="OverProduction">
              <h4 className="title">Main Markets & Product</h4>
            </div>


            <table>
              <thead>
                <tr className='pproducttable'>
                  <th className="pproductthead">Main Markets</th>
                  <th> Total Revenue (%)</th>
                  <th >Main Product(s)</th>
                  <th > Verified</th>

                </tr>
              </thead>
              <tbody>
                {inputList.map((x, i) => {
                  return (
                    <tr className='pproducttable'>
                      <td className="pproductthead"><input type="text" placeholder="Enter Main Markets" onChange={e => handleInputChange(e, i)} id='mainMarket' /></td>
                      <td><input type="text" placeholder="Total Revenue(%)" onChange={e => handleInputChange(e, i)} id='totalRevenue' /></td>
                      <td><input type="text" placeholder="Main Product(s)" onChange={e => handleInputChange(e, i)} id='totalProduct' /></td>
                      <td ><input className='checkBox' type="checkbox" placeholder="Verify" onChange={e => handleInputChange(e, i)} id='verified' /></td>
                    </tr>
                  )

                })}
              </tbody>
            </table>
            <br />
            <button className='kont' onClick={handleAddClick}>Add</button>
            {inputList !== 1 && <button onClick={() => handleRemoveClick()} className="kont" >Remove</button>}

            <div className='general'>
              <h4 className="title">Trade Ability</h4>
              <div className="Companydiv3">
                <label className="labelStyle">Language Spoken</label>
                <input type="text" className="textStyle18" onChange={(e) => setLanguageSpoken(e.target.value)} />
              </div>
              <div className="Companydiv3">
                <label className="labelStyle">Total Annual Revenue</label>
                <input type="text" className="textStyle19" onChange={(e) => setTotalAnnualRevenue(e.target.value)} />
              </div>

              <div className="Companydiv3">
                <label className="labelStyle">Total Export Revenue</label>
                <input type="text" className="textStyle20" onChange={(e) => setTotalExportRevenue(e.target.value)} />
              </div>
            </div>
            <div className='general'>
              <h4 className="title" style={{ marginTop: '10px' }}>Business Terms</h4>
              <div className="Companydiv3">
                <label className="labelStyle">Accepted Delivery Terms</label>
                <input type="text" className="textStyle21" onChange={(e) => setAcceptDeliveryTerms(e.target.value)} />
              </div>
              <div className="Companydiv3">
                <label className="labelStyle">Accepted Payment Currency</label>
                <input type="text" className="textStyle22" onChange={(e) => setAcceptPaymentCurrency(e.target.value)} />
              </div>
              <div className="Companydiv3">
                <label className="labelStyle">Accepted Payment Type</label>
                <input type="text" className="textStyle23" onChange={(e) => setAcceptPaymentType(e.target.value)} />
              </div>

            </div><br />
            <button className='kont' onClick={submitAll}>Continue</button>
          </div>
        </div>
      </> : <Factory changePhases={changeStep} />
      }
    </>
  )

}

export default Capability;



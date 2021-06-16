import React, { useState } from 'react'
import Production from './productionCapacity'
import './profile.css'
import { API } from '../../../Helpers/environment/backend'



const Overview = () => {
  const [loading, setLoading] = useState(false)
  const [intro, setIntro] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [mainProduct, setMainProduct] = useState('')
  const [totalEmployees, setTotalEmployees] = useState('')
  const [yearOfEstablishment, setYearOfEstablishment] = useState('')
  const [productCertification, setProductCertification] = useState('')
  const [trademarks, setTrademarks] = useState('')
  const [country, setCountry] = useState('')
  const [industryState, setIndustryState] = useState('')
  const [totalAnnualRevenue, setTotalAnnualRevenue] = useState('')
  const [certifications, setCertification] = useState('')
  const [patents, setPatent] = useState('')
  const [mainMarket, setMainMarket] = useState('')

  const [step, setStep] = useState(1)

  const submitDetails = () => {

    let id = parseInt(localStorage.getItem('id'))


    let data = {
      companyName: `${API}user/user/${id}/`,
      introduction: intro,
      bussinessType: businessType,
      mainProduct: mainProduct,
      totalEmployees: totalEmployees,
      yearEstablished: yearOfEstablishment,
      productCertification: productCertification,
      trademarks: trademarks,
      country: country,
      state: industryState,
      totalAnnualRevenue: totalAnnualRevenue,
      certifications: certifications,
      patents: patents,
      mainMarket: mainMarket,
    }

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    console.log(data)


    fetch(`${API}companyprofile/companyoverview/`, requestOption)
      .then(res => {
        console.log(res)
      })
      .then(Onproduction())

      .catch(err => {
        console.log(err)
      })

  }

  const changeStep = () => {
    setStep(1)
  }

  const Onproduction = (e) => {
    setStep(2)

  }

  return (
    <>
      {step === 1 ? <>
        <div className="general">
          <h4 className="title" style={{ marginLeft: '-1px' }}>Company Overview</h4>
          <div className="Companydiv1">
            <label className="labelStyle">Introduction</label>
            <textarea className="textareaStyle" placeholder='Introduction' onChange={(e) => setIntro(e.target.value)} />
          </div>

          <div className="Companydiv2">
            <label className="labelStyle">Business Type</label>
            <input type="text" className="textStyle1" placeholder='Business type' onChange={(e) => setBusinessType(e.target.value)} />
            <button className="save">Save For Later</button><br />
          </div>

          <div className="Companydiv3">
            <label className="labelStyle">Main Products</label>
            <input type="text" className="textStyle2" placeholder='Main Products' onChange={(e) => setMainProduct(e.target.value)} />
            <button className="back">Back</button>
          </div>
          <div className="Companydiv4">
            <label className="labelStyle">TotalEmployees</label>
            <select className="textStyle12">
              <option>Total Employees</option>
              <option>50 - 100</option>
              <option>101 - 500</option>
              <option>501 - 1000</option>
              <option>1001 -10000</option>
              onChange={(e) => setTotalEmployees(e.target.value)}

            </select>
          </div>
          <div className="Companydiv5">
            <label className="labelStyle">Year Established</label>
            <input type="date" className="textStyle3" placeholder='Year Established' onChange={(e) => setYearOfEstablishment(e.target.value)} />


          </div>
          <div className="Companydiv6">
            <label className="labelStyle">Product Certification</label>
            <input type="text" className="textStyle4" placeholder='Product Certification' onChange={(e) => setProductCertification(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Trademarks</label>
            <input type="text" className="textStyle5" placeholder='Trademarks' onChange={(e) => setTrademarks(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Country</label>
            <input type="text" className="textStyle6" placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">State</label>
            <input type="text" className="textStyle7" placeholder='State' onChange={(e) => setIndustryState(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Total Annual Revenue</label>
            <input type="text" className="textStyle8" placeholder=' Annual Revenue' onChange={(e) => setTotalAnnualRevenue(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Certifications</label>
            <input type="text" className="textStyle9" placeholder='Certifications' onChange={(e) => setCertification(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Patents</label>
            <input type="text" className="textStyle10" placeholder='Patents' onChange={(e) => setPatent(e.target.value)} />
          </div>
          <div className="Companydiv7">
            <label className="labelStyle">Main Market</label>
            <input type="text" className="textStyle11" placeholder='Main Market' onChange={(e) => setMainMarket(e.target.value)} />
          </div>
        </div>

        <button className='kont' loading={loading} onClick={submitDetails}  >Continue</button>
      </> : <Production changePhases={changeStep} />
      }
    </>

  )
}

export default Overview;
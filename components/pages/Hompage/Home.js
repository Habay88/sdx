import React  , {Component} from 'react';
import Navbar from './navbar'
import supplier from '../../images/supplier.jpg'
import './home.css'

export default class Home extends Component{

  render(){

    return(
      <>
        <Navbar/>
        <img src={supplier} alt='img' className='sup' /><br/><br/>
        <p className='para'>
        Vend-R is a Vendor Relationship and Registration portal. Don't have an account! Register here<br/>
        All well-meaning procurement team faces several challenges. <br/>
        Vend-R is an innovation from SDX Supplier Information Report Program – where Procurement 
        Managers can ensure new and existing<br/><br/>
        vendors are evaluated according to risk, financial stability, and business performance
         through SXD globally tested processes. All in an easy-to-use, smart and secure portal.<br/><br/>
         With the new Vend-R, Procurement Managers can have the ease of managing their vendors’ pre-qualification application online and 
         invite SDX verified vendors, so your valuable time is not wasted worrying about resolving barriers to 
         strategic sourcing, rather devoted to bringing immediate efficiencies in the procurement process and
          value to the company’s bottom line.
        </p>
        <h2 className='gain'>Gains: </h2>
        <ul className='list'>
          <li>For Procurement Managers, it’s FREE!</li><br/>
          <li>Access to an online portal of SDX verified vendors for procurement managers</li><br/>
          <li>Remain up-to-date with current status of vendors pre-qualification application</li><br/>
          <li>Streamline your procurement process with faster turn-around time</li><br/>
          <li>Ensuring there is current, updated and correct information on the Vendor.</li><br/>
          <li>Having ready and verified information on alternate sources of supply.</li><br/>
          <li>To have a strong, renowned and dependable third-party and unbiased source to ensure proper due-diligence.</li>
        </ul>

        <h2 className='gain'>Vendors:</h2>
        <ul className='list'>
          <li>Have an easy and a transparent process to register</li><br/>
          <li>Have a level-playing field vis-à-vis competitors</li><br/>
          <li>Establish credibility</li><br/>
          <li>Understand the strength of the SDX Number to build greater trust and visibility</li><br/>
          <li>Access larger global and international markets</li><br/>
          <li>Get more business. Cost-efficient to acquire more customers</li><br/>
         
        </ul>
        <div className='foot'>
          <p className='footer-text'>© Copyright 2018, Supplier Stack Western Africa Nigeria Ltd</p>
        </div>
      </>
    )
  }
} 
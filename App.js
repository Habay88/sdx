import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Hompage/Home'
import AddProducts from './components/pages/Supplier/addproducts';
import Approval from './components/pages/Supplier/approval';
import CompanyDetails from './components/pages/Supplier/companyDetails';
import Document from './components/pages/Supplier/document';
import EmailVerify from './components/pages/Supplier/emailVerify';
import Login from './components/pages/Supplier/login';
import Payment from './components/pages/Supplier/payment';
import ReferralPage from './components/pages/Supplier/referralPage';
import Register from './components/pages/Supplier/register';
import RegisterPm from './components/pages/Pm/register';
import RegistrationComplete from './components/pages/Supplier/RegisterationComplete';
import EmailVerifyPm from './components/pages/Pm/emailVerify';
import LoginPm from './components/pages/Pm/login';
import CompanyDetailsPm from './components/pages/Pm/companyDetails';
import AddProductsPm from './components/pages/Pm/addproducts';
import MainDashboard from './components/pages/Admin/mainDashboard'
import CustomerServiceBoard from './components/pages/CustomerDashboard/mainDashboard'
import SupplierDashboard from './components/pages/supplierDashboard/mainDashboard'
import '../src/styles/pages/supplierStack.css'
import PmDashboard from './components/pages/pmDashboard/mainDashboard'
import Okra from '../src/components/Okra'
import Main from './components/chat';
import View from './components/pages/supplierDashboard/Tender/View'
import Quickorder from './components/pages/pmDashboard/pmBoard/Quickorder'


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>

            {/* Home Link */}
            <Route exact path="/" component={Home} />

            {/* Supplier Links */}
            <Route exact path="/supplier/" component={Register} />
            <Route exact path="/supplier/emailverify/" component={EmailVerify} />
            <Route exact path="/supplier/login/" component={Login} />
            <Route exact path="/supplier/companydetails" component={CompanyDetails} />
            <Route exact path="/supplier/addproducts" component={AddProducts} />
            <Route exact path="/supplier/referral" component={ReferralPage} />
            <Route exact path="/supplier/payment" component={Payment} />
            <Route exact path="/supplier/documents" component={Document} />
            <Route exact path="/supplier/approval" component={Approval} />
            <Route exact path='/supplier/okra' component={Okra} />
            <Route exact path="/supplier/completeregistration" component={RegistrationComplete} />
            <Route exact path="/View" component={View} />


            {/* Procurement Links */}
            <Route exact path="/pm/" component={RegisterPm} />
            <Route exact path="/pm/emailverify" component={EmailVerifyPm} />
            <Route exact path="/pm/login" component={LoginPm} />
            <Route exact path="/pm/companydetails" component={CompanyDetailsPm} />
            <Route exact path="/pm/addproducts" component={AddProductsPm} />

            {/* Admin Links */}

            <Route exact path='/admin/dashboard' component={MainDashboard} />
            <Route exact path='/customerservice/dashboard' component={CustomerServiceBoard} />
            <Route exact path='/supplier/dashboard' component={SupplierDashboard} />
            <Route exact path='/pm/dashboard' component={PmDashboard} />

            <Route exact path='/chat' component={Main} />
            <Route exact path='/myquickorder' component={Quickorder} />
          </Switch>

        </Router>

      </div>

    )

  }
}



export default App;

import Okra from 'okra-js'
import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {API} from '../../src/components/Helpers/environment/backend';



const LendingFinance = () => {

     const history = useHistory()
    
    const [identity , setIdentity] = useState(0)
    const [balance , setBalance] = useState('')
    const [income , setIncome] = useState('')
    const [transaction , setTransaction] = useState('')
    

 
    Okra.buildWithOptions({
        
        name : "Sterlingtech",
        env :   "production",
        app_id : "",
        key : "3d61f68c-98b7-5b24-a85e-6443b6ad20bd",
        token : "605213d1f962f4453cfe564d" ,
        products : ['auth' ,  'identity' , 'balance', 'transactions' , 'income'],
        onSuccess : function(data){
            let id = localStorage.getItem('id')
            let cid = data.customer_id
            let bid = data.bank_id
             getIdentityID(cid)
            //  getCustomerId(cid)
             getBalanceId(cid)
             getIncomeId(cid)
             getTransactionId(cid)
             updateUser(bid,cid,id)
             history.push("/supplier/companydetails") 
             console.log('options success' , data)
              
        },
        
        onClose : function(){
            console.log('options close')
        
        },
        onError : function(){
             console.log('options error ')
             history.push("/supplier/okra")
        }
    })

    



//    const getCustomerId = (cid)=>{

//         let data = {
//             customer: cid
//         } 
//         axios({
//             url: `https://api.okra.ng/v2/identity/getByCustomer`,
//             method: 'post',
//             headers: {
//                 'content-type': 'application/json',
//                 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
//             },
//             data: JSON.stringify(data)
//         })
//         .then(res =>{
//             //identityId
//             console.log(res.data.data.identity[0]._id)
//         })
//         .catch(err => console.log(err))

//     }

    const getIdentityID = (cid) => {
    
    let data = {
      "customer" : cid
    }

    axios({
        url: `https://api.okra.ng/v2/identity/getByCustomer`,
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
        },
        data: JSON.stringify(data)
    })
    .then(res =>{
        //identityId
        console.log(res.data.data.identity[0]._id)
        setIdentity(res.data.data.identity[0]._id)
    })
    .catch(err => console.log(err))

}

const getBalanceId = (cid)=>{

        let data = {
            "customer": cid
        }
        axios({
            url: `https://api.okra.ng/v2/balance/getByCustomer`,
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            //identityId
            console.log(res.data.data.balance[0]._id)
            setBalance(res.data.data.balance[0]._id)
        })
        .catch(err => console.log(err))

    }

    const getIncomeId = (cid)=>{

        let data = {
            "customer": cid
        }
        axios({
            url: `https://api.okra.ng/v2/income/getByCustomer`,
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            //identityId
            console.log(res.data.data.income[0]._id)
            setIncome(res.data.data.income[0]._id)
            
            
        })
        .catch(err => console.log(err))

    }

    const getTransactionId = (cid)=>{

        let data = {
            "customer": cid
        }
        axios({
            url: `https://api.okra.ng/v2/transactions/getByCustomer`,
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            //identityId
            console.log(res.data.data.transaction[0]._id)
            setTransaction(res.data.data.transaction[0]._id)
        })
        .catch(err => console.log(err))

    }


    const updateUser = (bid,cid,id)=>{

        let data = {
            "id" : id,
            "bankID": bid,
            "customerID": cid,
            "identityID" :identity,
            "balanceID" :balance,
            "incomeID" : income ,
            "transactionID" : transaction,
            
        }
        console.log(data)
        axios({
            url: `${API}user/supplier/updateSupplier/`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            console.log(res.data)
        })
        .catch(err => console.log(err))

    }


return(
   <>
    <div>
         
    </div>
   </>
)}


export default LendingFinance




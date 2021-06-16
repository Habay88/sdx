// import React from 'react'

//  // const {handleChange, values, handleSubmit} = useForm()
//  const [values, setValues] = useState({
//     companyName: "",
//     email: "",
//     password: "",
//     error: "",
//     success: false,
//     is_procurementManager: true,
//     RegistrationNo: "",
//     phone: "",
// });

// const { companyName, email, password, error, success, RegistrationNo, phone, is_procurementManager = true } = values;

// const [nameError, setNameError] = useState({})
// const [passwordError, setPasswordError] = useState({})
// const [emailError, setEmailError] = useState({})
// const [loading, setLoading] = useState(false)



// const handleChange = name => event => {
//     setValues({ ...values, error: false, is_procurementManager: true, [name]: event.target.value })
// };


// const onSubmit = (event) => {
//     event.preventDefault();

//     setValues({ ...values, is_procurementManager: true, error: false })

//     signup({ companyName, email, password, RegistrationNo, phone, is_procurementManager })
//         .then((data) => {
//             console.log("DATA", data)
//             localStorage.setItem('email', data.email)
//             if (data.email === email) {
//                 setValues({
//                     ...values,
//                     companyName: "",
//                     email: "",
//                     password: "",
//                     error: "",
//                     success: true
//                 })
//             } else {
//                 setValues({
//                     ...values,
//                     error: true,
//                     success: false
//                 })
//             }
//         })
//         .catch(e => console.log(e))

// }

// const successMessage = () => {
//     return (
//         <div className="alert alert-success"
//             style={{ display: success ? "" : "none" }} id="sucess-msg">
//             <center>Account created. Clink the link below</center>
//             <center id="verifylink"><button id="verifybutton"><Link to="/pm/emailverify"> Verify Now</Link></button></center>
//         </div>
//     )
// }

// const errorMessage = () => {
//     return (
//         <div className="alert alert-danger"
//             style={{ display: error ? "" : "none" }}>
//             Check all fields again
//         </div>
//     )
// }


// function Errordetails() {
//     return ( )
// }

// export default Errordetails

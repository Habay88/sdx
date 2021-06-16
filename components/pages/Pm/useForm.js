import {useState, useEffect} from 'react'

const useForm = () =>{
    const [val, setVal] = useState({
        companyName: "",
        email: "",
        password: "",
        RegistrationNo: "",
        phone: "",
    })

    const [errorr, setErrorr] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setVal({
            ...val, 
            [name] : value
        })
    };

    const handleSubmit = e =>{
        e.preventDefault();
    };
    
    return{handleChange, val, handleSubmit};
};
export default useForm
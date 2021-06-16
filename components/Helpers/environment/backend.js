import axios from 'axios'

export const API = process.env.REACT_APP_BACKEND;

export  const updateStep = (stepSup, id)=>{

    let data = {
      supstep: stepSup
    }
    axios({
      url : `${API}user/user/${id}/`,
      method : 'PATCH',
      headers: {
      'content-type': 'application/json',
      },
      data : data
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
  }

  export  const updateStepPm = (stepPm, id)=>{

    let data = {
      prostep: stepPm,
    }
    axios({
      url : `${API}user/user/${id}/`,
      method : 'PATCH',
      headers: {
      'content-type': 'application/json',
      },
      data : data
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
  }
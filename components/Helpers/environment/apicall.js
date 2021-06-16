import { API } from '.backend';


export const getProducts = () => fetch(`${API}user`, { method: 'GET' })
    .then(response => response.json())
    .catch(err => console.log(err));

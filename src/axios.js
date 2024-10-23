import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://api-utagacm6ta-uc.a.run.app/' //The API (cloud function URL)
});


export default instance

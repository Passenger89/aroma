import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID RVrVRUEhd0cOsnN_qnnDQC2J265NPj9YU1rx-jFoXH8',
  },
})

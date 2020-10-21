import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers:{
            Authorization:token
        },
        baseURL: "https://github.com/foodtruck-trackR-tt31/node-backend/api/"
    })
}
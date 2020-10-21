import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers:{
            Authorization:token
        },
        baseURL: "https://cors-anywhere.herokuapp.com/https://bw-foodtruck-tracker.herokuapp.com/api/"
    })
}
import actions from '../actions'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialTruck = {
    name:'',
    id:'',
    ownerId:'',
    location:'',
    category:'',
    reviews:'',
    stars:'',
    menu:''
}

const initialTruckArr = {
    trucksArr:[]
}

export function trucksArrReducer(state=initialTruckArr,action){
    switch(action.type){
        case actions.owner.POST_TRUCK:
            axiosWithAuth.post('trucks',action.payload)
            .then(res => console.log("THIS IS THE POST_TRUCK SUCCESS",res))
            .catch(err => console.log("THIS IS THE POST_TRUCK ERR ===>", err))
        break
        default:
            return state
    }
}

export function truckReducer(state= initialTruck, action){
    switch(action.type){

        case actions.owner.FETCH_TRUCK:
            axiosWithAuth().get(`users/${action.payload}`)
            .then(res => {
                state = res.data
            })
            .catch(err => console.log(err))

            return state

        case actions.owner.UPDATE_TRUCK:
            return {
                ...state,
                
            }



        default:
            return state
    }
}
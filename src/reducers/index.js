import actions from '../actions'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import { initialState } from "./initialState";


export function ownerTrucksReducer(state=initialState.owner,action){
    switch(action.type){
        case actions.owner.POST_TRUCK:
            axiosWithAuth.post('user/trucks',action.payload)
            .then(res => console.log("THIS IS THE POST_TRUCK SUCCESS",res))
            .catch(err => console.log("THIS IS THE POST_TRUCK ERR ===>", err))
            break
        case actions.owner.UPDATE_TRUCK:
            axiosWithAuth.put('user/trucks',action.payload)
            .then(res => console.log("THIS IS THE UPDATE_TRUCK SUCCESS",res))
            .catch(err => console.log("THIS IS THE UPDATE_TRUCK ERR ===>", err))
            break
        case action.owner.FETCH_TRUCKS:
            axiosWithAuth().get('user.trucks')
            .then(res => {
                console.log("THIS IS THE GET_TRUCKS SUCCESS",res.data)
                return res.data
            })
            .catch(err => console.log("THIS IS THE GET_TRUCKS ERR ===>", err))
            break

        default:
            return state
    }
}

export function truckReducer(state= initialState.truck, action){
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
import actions from '../actions'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import { initialState } from "./initialState";


export function ownerReducer(state=initialState.owner,action){
    switch(action.type){
        case actions.SET_OWNER:
            return {
                ...state,
                ownerID:action.payload
            }
            
        case action.FETCH_TRUCKS:
            axiosWithAuth().get(`trucks/user/${action.payload}`)
            .then(res => {
                return{
                    ...state,
                    trucks:res.data
                }
            })

            break

        default:
            return state
    }
}

export function truckReducer(state=initialState.truck,action){
    switch(action.type){

        case actions.SET_TRUCK:
            return action.payload
        default:
            return state
    }
}

export function menuReducer(state=initialState.menu,action){
    switch(action.type){

        case actions.FETCH_MENU:
            axiosWithAuth().get(`truck/menu/${action.payload}`)
            .then(res => {
                return{
                    ...state,
                    menuItems:res.data
                }
            })
            .catch(err => console.log(err))
            break
        default:
            return state
    }
}
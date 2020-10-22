import {actions} from '../actions'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import { initialState } from "./initialState";


export function reducer(state=initialState,action){
    switch(action.type){
        case action.FETCH_ALL_TRUCKS:
            axiosWithAuth().get('trucks')
            .then(res => {
                console.log("GET TRUCKS SUCCESS ===>", res.data)
                return{
                    ...state,
                    "allTrucks":res.data
                }
            })
            .catch(err => console.log("GET TRUCKS FAILURE ===>", err))
            break
        case actions.SET_OPERATOR:
            axiosWithAuth().get('session')
                .then(res => {
                    console.log("GET SESSION SUCCESS ===>", res.data)
                    return{
                        ...state,
                        "operator_id":res.data
                    }
                })
                .catch(err => console.log("GET SESSION FAILURE ===>", err))
            break
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
            
        case actions.FETCH_MY_TRUCKS:
            return{
                ...state,
                operator:{
                    ...state.operator,
                    trucks:action.payload.trucks.filter(truck => truck.operator_id === action.payload.operator_id)
                }
            }
            
            
        case actions.SET_TRUCK:
            axiosWithAuth().get(`trucks/${action.payload}`)
            .then(res => {
                console.log("GET TRUCK SUCCESS ===>", res.data)
                return{
                    ...state,
                    "truck":res.data
                }
            })
            .catch(err => console.log("GET TRUCK FAILURE ===>", err))
        
            break

        case actions.SET_REVIEW:
            axiosWithAuth().post(`trucks/${action.payload.reviewObj.truckId}/review`,action.payload.reviewObj)
            .then(res => {
                console.log("POST REVIEW SUCCESS ===>", res.data)
                return{
                    ...state,
                    truck:{
                        ...state.truck,
                        review:[
                            ...state.truck.review,
                            action.payload.reviewObj
                        ]
                    }
                }
            })
            .catch(err => console.log("POST REVIEW FAILURE ===>", err))
            break
        
        case actions.SET_MENU_ITEM:
            axiosWithAuth().post(`trucks/${action.payload.menuObj.truckId}/menu`,action.payload.menuObj)
            .then(res => {
                console.log("POST MENU SUCCESS ===>", res.data)
                return{
                    ...state,
                    truck:{
                        ...state.truck,
                        menu:[
                            ...state.truck.menu,
                            action.payload.menuObj
                        ]
                    }
                }
            })
            .catch(err => console.log("POST MENU FAILURE ===>", err))

            break
        default:
            return state
    }
}




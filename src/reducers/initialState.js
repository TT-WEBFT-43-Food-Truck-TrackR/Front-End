export const initialState = {
    // get post put delete
    "truck" : {
        "name":"",
        "id":"",
        "operator_id":"",
        "city":"",
        "cuisine":"",
        "rating":"",
        "reviews":[],
        "imgURL":'',
        "menu":[]
    },
    "operator" : {
        "operator_id":"",
        "trucks":[]
    },
    "allTrucks" : {
        "trucksArr":[]
    },
    "truckReview":{
        "truck_id":"",
        "name":"",
        "rating":"",
        "description":""
    },
    "menu":{
        "truck_id":"",
        "menuItems":[]
    },
    "menuItem":{
        "truck_id":"",
        "id":"",
        "name":"",
        "price":"",
    },
    "menuReview":{
        "menuId":"",
        "name":"",
        "rating":"",
        "description":""
    }

}
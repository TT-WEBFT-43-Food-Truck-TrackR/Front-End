
export const initialState = {
    // get post put delete
    "truck" : {
        "name":"",
        "id":"",
        "ownerId":"",
        "location":"",
        "category":"",
        "rating":"",
        "reviews":[],
        "menu":[]
    },
    "owner" : {
        "ownerId":"",
        "trucks":[]
    },
    "allTrucks" : {
        "trucksArr":[]
    },
    "truckReview":{
        "truckId":"",
        "name":"",
        "rating":"",
        "description":""
    },
    "menu":{
        "truckId":"",
        "menuItems":[]
    },
    "menuItem":{
        "truckId":"",
        "id":"",
        "title":"",
        "price":"",
        "description":"",
        "photo":"",
        "rating":"",
        "reviews":[]
    },
    "menuReview":{
        "menuId":"",
        "name":"",
        "rating":"",
        "description":""
    }

}
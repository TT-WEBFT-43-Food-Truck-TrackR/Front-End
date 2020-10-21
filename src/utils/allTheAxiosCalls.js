import {axiosWithAuth} from './axiosWithAuth'


export function getUsers(){
    axiosWithAuth().get('users')
    .then(res => {
        console.log("GET USERS SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("GET USERS FAILURE ===>", err))
}

export function getUser(){
    axiosWithAuth().get('user')
    .then(res => {
        console.log("GET USER SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("GET USER FAILURE ===>", err))
}

export function getSession(){
    axiosWithAuth().get('session')
    .then(res => {
        console.log("GET SESSION SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("GET SESSION FAILURE ===>", err))
}

export function getTrucks(){
    axiosWithAuth().get('trucks')
    .then(res => {
        console.log("GET TRUCKS SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("GET TRUCKS FAILURE ===>", err))
}

export function getTruck(id){
    axiosWithAuth().get(`trucks/${id}`)
    .then(res => {
        console.log("GET TRUCK SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("GET TRUCK FAILURE ===>", err))
}

export function postRegister(userObj){
    axiosWithAuth().post('auth/regiter',userObj)
    .then(res => {
        console.log("POST REGISTER SUCCESS ===>", res.data)
        return(res.data.token)
    })
    .catch(err => console.log("POST REGISTER FAILURE ===>", err))
}

export function postLogin(userObj){
    axiosWithAuth().post('auth/login',userObj)
    .then(res => {
        console.log("POST LOGIN SUCCESS ===>", res.data)
        return(res.data.token)
    })
    .catch(err => console.log("POST LOGIN FAILURE ===>", err))
}

export function postTruck(truckObj){
    axiosWithAuth().post('trucks',truckObj)
    .then(res => console.log("POST TRUCK SUCCESS ===>", res.data))
    .catch(err => console.log("POST TRUCK FAILURE ===>", err))
}

export function postMenu(menuObj){
    axiosWithAuth().post(`trucks/${menuObj.truckId}/menu`,menuObj)
    .then(res => {
        console.log("POST MENU SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("POST MENU FAILURE ===>", err))
}

export function postReview(reviewObj){
    axiosWithAuth().post(`trucks/${reviewObj.truckId}/review`,reviewObj)
    .then(res => {
        console.log("POST REVIEW SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("POST REVIEW FAILURE ===>", err))
}

export function putTrucks(truckObj){
    axiosWithAuth().put(`trucks/${truckObj.id}`,truckObj)
    .then(res => {
        console.log("PUT TRUCK SUCCESS ===>", res.data)
        return(res.data.token)
    })
    .catch(err => console.log("PUT TRUCK FAILURE ===>", err))
}

export function deteleTruck(truckId){
    axiosWithAuth().delete(`trucks/${truckId}`)
    .then(res => {
        console.log("DELETE TRUCK SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("DELETE TRUCK FAILURE ===>", err))
}

export function deleteMenuItem(menuItemObj){
    axiosWithAuth().delete(`trucks/${menuItemObj.truckId}/menu/${menuItemObj.itemId}`)
    .then(res => {
        console.log("DELETE MENU ITEM SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("DELETE MENU ITEM FAILURE ===>", err))
}

export function deleteReview(reviewObj){
    axiosWithAuth().delete(`trucks/${reviewObj.truckId}/review/${reviewObj.reviewId}`)
    .then(res => {
        console.log("DELETE TRUCK SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("DELETE TRUCK FAILURE ===>", err))
}
// GET	/api/users	List of all users
// GET	/api/user	Shows current user
// GET	/api/session	Shows current logged in user from session
// GET	/api/diners	Displays a list of all registered diners
// GET	/api/trucks	Displays a list of all food trucks
// GET	/api/trucks/:id	Shows food truck with specified ID
// POST	/api/auth/register	REQUIRES: username, password, role (1 for operator, 2 for diner). OPTIONAL: city
// POST	/api/auth/login	REQUIRES: username and password
// POST	/api/trucks	Will create a new food truck under logged in operator (MUST be logged in as an operator: role 1)
// POST	/api/trucks/:id/favorite	Will put food truck with specified ID under a diners favorites
// POST	/api/trucks/:id/menu	Will add a menu item to specified truck. REQUIRES: truck_id, name, price
// POST	/api/trucks/:id/review	Will add a review to specified truck. REQUIRES: truck_id, user_id, rating (integer), review (text)
// PUT	/api/users	Same requirements as registration, will edit current logged in user
// PUT	/api/trucks/:id	Will edit current logged in operators truck information
// DEL	/api/users	Will delete current user logged in
// DEL	/api/trucks/:id	Will delete food truck with specified ID
// DEL	/api/trucks/:id/favorite	Will delete food truck with specified ID from diners favorites
// DEL	/api/trucks/:id/menu/:itemid	Will delete menu item at specified ID
// DEL	/api/trucks/:id/review/:reviewid	Will delete diner review at specified ID
export const actions = {
        FETCH_ALL_TRUCKS:"FETCH_TRUCKS",
        SET_OPERATOR:"SET_OPERATOR",
        FETCH_MY_TRUCKS:"FETCH_MY_TRUCKS",
        SET_TRUCK:"SET_TRUCK",
        SET_REVIEW:"SET_REVIEW",
        SET_MENU_ITEM:"SET_MENU_ITEM",
}

export function fetchAllTrucks(){
    return {
        type:actions.FETCH_ALL_TRUCKS,
        payload:'all'
    }
}

export function setOperator(){
    return {
        type:actions.SET_OPERATOR,
        payload:''
    }
}

export function fetchMyTrucks(operatorObj){
    return {
        type:actions.FETCH_MY_TRUCKS,
        payload:operatorObj
    }
}

export function setTruck(id){
    return {
        type:actions.SET_TRUCK,
        payload:id
    }
}

export function fetchReviews(truckId){
    return {
        type:actions.FETCH_REVIEWS,
        payload:truckId
    }
}

export function setReview(reviewId){
    return {
        type:actions.FETCH_TRUCKS,
        payload:reviewId
    }
}

export function fetchMenu(truckId){
    return {
        type:actions.FETCH_MENU,
        payload:truckId
    }
}

export function setMenuItem(menuId){
    return {
        type:actions.SET_MENU_ITEM,
        payload:menuId
    }
}
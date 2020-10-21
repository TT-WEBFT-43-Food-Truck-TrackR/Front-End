const actions = {
        FETCH_ALL_TRUCKS:"FETCH_TRUCKS",
        SET_OWNER:"SET_OWNER",
        FETCH_TRUCKS:"FETCH_MY_TRUCKS",
        SET_TRUCK:"SET_TRUCK",
        FETCH_REVIEWS:"FETCH_REVIEWS",
        SET_REVIEW:"SET_REVIEW",
        FETCH_MENU:"FETCH_MENU",
        SET_MENU_ITEM:"SET_MENU_ITEM",
}

export function fetchAllTrucks(){
    return {
        type:actions.FETCH_ALL_TRUCKS,
        payload:'all'
    }
}

export function setOwner(id){
    return {
        type:actions.SET_OWNER,
        payload:id
    }
}

export function fetchTrucks(ownerId){
    return {
        type:actions.FETCH_TRUCKS,
        payload:ownerId
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
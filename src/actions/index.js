const actions = {
    foodie:{
        FETCH_TRUCKS:"FETCH_TRUCKS",
        FETCH_TRUCK_REVIEWS:"FETCH_TRUCK_REVIEWS",
        FETCH_REVEIW:"FETCH_REVEIW",
        POST_REVIEW:"POST_REVIEW",

    },
    owner:{
        FETCH_TRUCKS:"FETCH_MY_TRUCKS",
        FETCH_TRUCK:"FETCH_TRUCK",
        POST_TRUCK:"POST_TRUCK",
        UPDATE_TRUCK:"UPDATE_TRUCK",

    },
}

export function fetchFoodieTrucks(){
    return {
        type:actions.foodie.FETCH_TRUCKS,
        paylod:''
    }
}

export function fetchOwnerTrucks(id){
    return {
        type:actions.owner.FETCH_TRUCKS,
        paylod:id
    }
}
export function fetchOwnerTruck(id){
    return {
        type:actions.owner.FETCH_TRUCK,
        paylod:id
    }
}
export function postTruck(truck){
    return {
        type:actions.owner.POST_TRUCK,
        paylod:truck
    }
}
export function updateTruck(truck){
    return {
        type:actions.owner.UPDATE_TRUCK,
        paylod:truck
    }
}
export function fetchReview(id){
    return {
        type:actions.foodie.FETCH_REVEIW,
        paylod:id
    }
}

export function postReview(review){
    return {
        type:actions.foodie.POST_REVIEW,
        paylod:review
    }
}

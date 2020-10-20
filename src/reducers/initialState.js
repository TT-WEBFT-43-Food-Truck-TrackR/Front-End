
export const initialState = {
    // get post put delete
    truck : {
        name:'',
        id:'',
        ownerId:'',
        location:'',
        category:'',
        stars:'',
        reviews:[],
        menu:[]
    },
    owner : {
        ownerId:'',
        trucks:[]
    },
    allTrucks : {
        trucksArr:[]
    },
    truckReview:{
        truckId:'',
        name:'',
        star:'',
        description:''
    },
    menu:{
        truckId:'',
        menuItems:[]
    },
    menuItem:{
        truckId:'',
        id:'',
        title:'',
        price:'',
        description:'',
        photo:'',
        stars:'',
        reviews:[]
    },
    menuReview:{
        menuId:'',
        name:'',
        star:'',
        description:''
    }

}
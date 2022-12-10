// import { act } from "react-dom/test-utils";
import { ADD_TO_CART, EMPTY_CART, PROJECT_LIST, REMOVE_FROM_CART, SET_PROJECT_LIST } from "./constant";

export const cartData = (data = [], action) => {
    
    console.log(data)
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("this is a reducer data", action)
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.warn("this is a reducer remove from cart data", action)
            data.length = data.length ? data.length - 1 : [];
            return [...data]
        case EMPTY_CART:
            console.warn("this is a reducer to empty the cart", action)
            return []
        case PROJECT_LIST:
            console.warn("this is the project list", action)
            return "this is the project list";
        case SET_PROJECT_LIST:
            console.warn("this is reducer funtion where we called API", action)
            return [...action.data];
        default:
            return data
    }


}

export const projects = (data = [] , action)=>{
    if(action.type === SET_PROJECT_LIST){
        return[...action.data]
    }else{
        return data;
    }
}
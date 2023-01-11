import { ADD_TO_CART, EMPTY_CART, PROJECT_LIST, REMOVE_FROM_CART,CLOSE_SIDEBAR } from "./constant";

export const addtoCart = (data)=>{
    console.warn("action called" , data);
    return {
        type:ADD_TO_CART,
        data :data
    }
}

export const removeFromCart = (data)=>{
    console.warn("action removeFromCart" , data);
    return {
        type:REMOVE_FROM_CART,
        data
    }
}

export const EmptyCart = ()=>{
    console.warn("action EmptyCart");
    return {
        type:EMPTY_CART,
        
    }
}

export const projectData = ()=>{
    console.log("this is a project list funtion")
    return {
        type:PROJECT_LIST
    }
}



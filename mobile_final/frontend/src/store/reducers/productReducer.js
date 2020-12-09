import {GET_PRODUCTS, GET_CATEGORIES, ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT,EDIT_PRODUCT, GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT} from '../actions/types'


const initialState = {
    products: [],
    categories: [],
    product: {},
    message:{},
    comments: []
 }


export default function (state=initialState, action){
    console.log(action)
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case EDIT_PRODUCT:
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
                }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
                    }
        case DELETE_COMMENT:
                return {
                    ...state,
                    message: action.payload
                    }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
                }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
                }
        case DELETE_PRODUCT:
            return {
                ...state,
                message: action.payload
                    }
        default:
            return state;
    }
}
import { GET_DOGS, SET_CURRENTPAGE } from "./actions";


const initialState = {
    dogs : [],
    currentPage : 1,
}


export default function rootReducer(state= initialState, action ) {
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload};
        case SET_CURRENTPAGE:
            return { ...state, currentPage: action.payload};
}
}


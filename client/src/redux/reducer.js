import { GET_DOGS, SET_CURRENTPAGE, SAVE_ALL_DOGS } from "./actions"


const initialState = {
    allDogs : [],
    currentDogs: [],
    currentPage : 1,
    dogPerPage: 8
}

export default function rootReducer(state = initialState, action ) {
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload,
                currentDogs: action.payload.slice(0, state.dogPerPage)
            }
        case SAVE_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
            }

        case SET_CURRENTPAGE:
            return { ...state, currentPage: action.payload,
            }
       
        default:
            return { ...state };
}
 }


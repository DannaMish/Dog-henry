import axios from "axios";


export const GET_DOGS = "GET_DOGS";
export const SET_CURRENTPAGE = "SET_CURRENTPAGE"

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export const setCurrentPage = (page) => {
    return function (dispatch) {
       dispatch( {type: SET_CURRENTPAGE, payload: page  })
    }
 }
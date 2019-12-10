import { CATEGORY_GET } from './categoryActionTypes';


export const getCategories = categories => {
    return {
      type: CATEGORY_GET,
      payload: categories
    }
  }


export const categoryGetItem =  () => {
    return dispatch => {
        return  fetch("http://localhost:4000/api/category", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                dispatch(getCategories(json.categories))
            })
    }
}



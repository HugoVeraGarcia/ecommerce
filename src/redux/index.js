import { actions } from "./actions";

const INITIAL_STATE = {
    products: [],
    products2: [],
    isLoading: false,
    categories: [],
    name: []
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.setProducts:
                //console.log('from reducer products')
                return{
                    ...state,
                    products: action.payload
                }
            case actions.setIsLoading:
                return{
                    ...state,
                    isLoading: action.payload
                }
            case actions.setCategories:
                return{
                    ...state,
                    categories: action.payload
                }
            case actions.setFilterProducts:
                //console.log('from reducer filter')
                //console.log('from reducer filter-payload', action.payload)
                return{
                    ...state,
                    products: action.payload
                }
            case actions.setName:
                return{
                    ...state,
                    name: action.payload
                }


        default:
            return state;
    }
}

export default reducer;

import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'
import {List,fromJS} from "immutable";

export function red_index_tit (state = '上面一旦重新填我就变了', action) {
    switch (action.type) {
        case "INDEX_TIT":
            return action.data;
            break;
        default:
            return state
    }
}

export function red_head_tit (state = 'react_home', action) {
    switch (action.type) {
        default:
            return state
    }
}
export function red_list(state = [], action){
    switch (action.type) {
        case 'LIST':
            return action.data;
            break;
        default:
            return state
    }
}
const rootReducer = combineReducers({
    router: routerReducer,
    red_index_tit,
    red_head_tit,
    red_list
})

export default rootReducer
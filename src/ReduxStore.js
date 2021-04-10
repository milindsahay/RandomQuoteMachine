import {createStore} from "redux";

const initialState = {theme: "darkblue"}
const themeReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'set':
            return { ...state, theme: action.payload  }
        default:
            return state
    }
}
export const ReduxStore = createStore(themeReducer)


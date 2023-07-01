import { 
    combineReducers, 
    configureStore,
} from "@reduxjs/toolkit";
import auth from '../pages/AuthPage/services/slice'


const rootReducer = combineReducers({
    auth,
});

export const store = configureStore({
    reducer: rootReducer,
});

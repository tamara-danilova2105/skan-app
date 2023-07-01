import { 
    combineReducers, 
    configureStore,
} from "@reduxjs/toolkit";
import auth from '../pages/AuthPage/services/slice';
import accountInfo from '../components/Navbar/services/slice'


const rootReducer = combineReducers({
    auth,
    accountInfo,
});

export const store = configureStore({
    reducer: rootReducer,
});

import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer  } from 'react-redux-firebase';

import UserReducer from "./UserReducer";


export default combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    user: UserReducer
})
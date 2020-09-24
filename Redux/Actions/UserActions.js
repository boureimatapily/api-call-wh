import {
  ADD_DATA,
  ADD_DATA_ERR,
  
} from "../Type";



//Add new Department
export const AddDepart = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid
    firestore
      .collection("departments")
      .add({
        ...data,
        // authorId:authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_DATA, data });
      })
      .catch((err) => {
        dispatch({ type: ADD_DATA_ERR, err });
      });
  };
};

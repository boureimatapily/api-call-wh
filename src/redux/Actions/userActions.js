import { ADD_DIALY_DATA,ADD_DIALY_DATA_ERR, ADD_CLIMAT_DATA,ADD_CLIMAT_DATA_ERR} from "../Type";

//Add new daily_search
export const dialy_Data = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid
    firestore
      .collection("daily_search")
      .add({
        ...data,
        // authorId:authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_DIALY_DATA, data });
      })
      .catch((err) => {
        dispatch({ type: ADD_DIALY_DATA_ERR, err });
      });
  };
};

//Add new climaData
export const clim_Data = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid
    firestore
      .collection("climaData")
      .add({
        ...data,
        // authorId:authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_CLIMAT_DATA, data });
      })
      .catch((err) => {
        dispatch({ type: ADD_CLIMAT_DATA_ERR, err });
      });
  };
};

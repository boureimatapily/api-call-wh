export const addData = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid;

    firestore
      .collection("daily_search")
      .add({
        ...data,
        date: new Date(),
      })
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        alert("error");
        console.log(err)
      });
  };
};

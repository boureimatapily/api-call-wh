import { ADD_DIALY_DATA,ADD_DIALY_DATA_ERR, ADD_CLIMAT_DATA,ADD_CLIMAT_DATA_ERR} from "../Type";


const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DIALY_DATA:
      alert("Dialy data added to the database");
      return state;
    case ADD_DIALY_DATA_ERR:
      alert("an error occured");
      return state;
    case ADD_CLIMAT_DATA:
        alert("Climat data added to the database");
        return state;
    case ADD_CLIMAT_DATA_ERR:
        alert("an error occured");
        return state;
    
    default:
      return state;
  }
};
export default UserReducer;

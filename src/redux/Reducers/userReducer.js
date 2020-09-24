import {
  ADD_DATA,
  ADD_DATA_ERR
} from "../Type";


const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      alert("infos added");
      return state;
    case ADD_DATA_ERR:
      alert("an error occured");
      return state;
    
    default:
      return state;
  }
};
export default UserReducer;

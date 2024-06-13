import { TYPE_SET_USER } from "../actions";

const initialState = {
  user: { username : "Nguyễn Văn A" , age : 18},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SET_USER:{
      return {...state ,user : {...action.payload} }
    }
    default: {
      return { ...state };
    }
  }
};

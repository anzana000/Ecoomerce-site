const INITIAL_STATE = {
  currentUserState: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_STATE":
      return {
        ...state,
        currentUserState: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

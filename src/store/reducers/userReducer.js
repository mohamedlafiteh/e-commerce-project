const initState = {
  user: [],
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      console.log("created user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
  }

  return state;
};

export default userReducer;

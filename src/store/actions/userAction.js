export const createUser = (user) => {
  return (dispatch, getState) => {
    //Api call to add the user to the database next

    dispatch({ type: "CREATE_USER", user: user });
  };
};

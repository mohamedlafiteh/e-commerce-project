export const resetForm = () => {
  return {
    stateFields: {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        gender: false,
        interests: "",
      },
    },
  };
};

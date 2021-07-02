const initialState = false;

const commentReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "UPDATE_SUB_COMMENT":
      return { update: true };
    default:
      return state;
  }
};

export default commentReducer;

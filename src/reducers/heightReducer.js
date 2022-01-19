const initialState = "65";

const heightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADJUST_HEIGHT": {
      return (state = action.payload);
    }

    default: {
      return state;
    }
  }
};

export default heightReducer;

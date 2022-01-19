export const adjustHeaderHeight = (height) => async (dispatch) => {
  dispatch({
    type: "ADJUST_HEIGHT",
    payload: height,
  });
};

export const toggleHeader = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_HEADER",
  });
};

export const toggleSidebars = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_SIDEBARS",
  });
};

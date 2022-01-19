const initialState = {
  stickyHeader: false,
  stickySidebars: false,
};

const toggleReducers = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_HEADER": {
      return { ...state, stickyHeader: !state.stickyHeader };
    }

    case "TOGGLE_SIDEBARS": {
      return { ...state, stickySidebars: !state.stickySidebars };
    }

    default:
      return { ...state };
  }
};

export default toggleReducers;

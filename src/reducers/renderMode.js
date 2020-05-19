const SET_RENDER_MODE = 'SET_RENDER_MODE';

export const setRenderMode = mode => ({
  type: SET_RENDER_MODE,
  mode
});

function renderMode(state = 'profile', action) {
  switch(action.type) {
    case SET_RENDER_MODE:
      return action.mode;
    default:
      return state;
  };
};

export default renderMode;

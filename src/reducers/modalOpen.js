const SET_MODAL_OPEN = 'SET_MODAL_OPEN';

export const setModalOpen = status => ({
  type: SET_MODAL_OPEN,
  status
});

function modalOpen(state = false, action) {
  switch(action.type) {
    case SET_MODAL_OPEN:
      return action.status;
    default:
      return state;
  };
};

export default modalOpen;

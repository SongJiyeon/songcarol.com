import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen } from '../reducers/modalOpen';
import { useCallback } from 'react';

export default function useModalOpen() {
  const modalOpen = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();

  const setModalStatus = useCallback((status) => dispatch(setModalOpen(status)), [dispatch]);

  return {
    modalOpen,
    setModalStatus
  };
};

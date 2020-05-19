import { useSelector, useDispatch } from 'react-redux';
import { setRenderMode } from '../reducers/renderMode';
import { useCallback } from 'react';

export default function useModalOpen() {
  const renderMode = useSelector((state) => state.renderMode);
  const dispatch = useDispatch();

  const onModeChange = useCallback(mode => dispatch(setRenderMode(mode)), [dispatch]);

  return {
    renderMode,
    onModeChange
  };
};

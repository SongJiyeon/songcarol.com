import React, { useEffect } from 'react';

import Profile from './modalContents/Profile';
import MyWork from './modalContents/MyWork';
import Contact from './modalContents/Contact';

import useModalOpen from '../hooks/useModalOpen';
import useRenderMode from '../hooks/useRenderMode';

export default function Modal() {
  const { setModalStatus } = useModalOpen();
  const { renderMode } = useRenderMode();

  useEffect(() => {
    window.addEventListener('keydown', () => setModalStatus(false));
    return () => {
      window.removeEventListener('keydown', ()=> setModalStatus(false));
    };
  }, []);

  return (
    <div className="modal container">
      <div className="modal-background" onClick={() => setModalStatus(false)}></div>
      <div className="modal-box">
        {renderMode === 'profile' && <Profile />}
        {renderMode === 'mywork' && <MyWork />}
        {renderMode === 'contact' && <Contact />}
      </div>
    </div>
  );
}

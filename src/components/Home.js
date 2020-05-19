import React, { useRef, useEffect, useState } from 'react';

import { STEP, CHAR_SIZE, DEST_SIZE, WIDTH, HEIGHT } from '../constants/index';
import useModalOpen from '../hooks/useModalOpen';
import useRenderMode from '../hooks/useRenderMode';

import charLeft from '../assets/character_left.gif';
import charRight from '../assets/character_right.gif';
import planetProfile from '../assets/planet_profile.png';
import planetWork from '../assets/planet_work.png';
import planetContact from '../assets/planet_contact.png';

export default function Home() {
  const { setModalStatus } = useModalOpen();
  const { onModeChange } = useRenderMode();
  let charRef = useRef();

  const [left, setLeft] = useState(WIDTH / 2 - CHAR_SIZE / 2);
  const [top, setTop] = useState(HEIGHT / 2 - CHAR_SIZE / 2);

  function findDest() {
    if (top === DEST_SIZE && left > WIDTH / 2 - DEST_SIZE && left < WIDTH / 2 + DEST_SIZE / 2) {
      setModalStatus(true);
      onModeChange('profile');
    }
    if (left === DEST_SIZE && top > HEIGHT / 2 - DEST_SIZE && top < HEIGHT / 2 + DEST_SIZE / 2) {
      setModalStatus(true);
      onModeChange('mywork');
    }
    if (left === WIDTH - DEST_SIZE - CHAR_SIZE && top > HEIGHT / 2 - DEST_SIZE && top < HEIGHT / 2 + DEST_SIZE / 2) {
      setModalStatus(true);
      onModeChange('contact');
    }
  }

  function keyDown(e) {
    switch (e.key) {
      case 'ArrowLeft':
        charRef.current.src = charLeft;
        if (left - DEST_SIZE < STEP) {
          setLeft(DEST_SIZE);
          charRef.current.style.left = `${DEST_SIZE}px`;
          findDest();
          return;
        }
        setLeft(left - STEP);
        charRef.current.style.left = `${left - STEP}px`;
        return;
      case 'ArrowRight':
        charRef.current.src = charRight;
        if (left + DEST_SIZE + CHAR_SIZE + STEP > WIDTH) {
          setLeft(WIDTH - (DEST_SIZE + CHAR_SIZE));
          charRef.current.style.left = `${WIDTH - (DEST_SIZE + CHAR_SIZE)}px`;
          findDest();
          return;
        }
        setLeft(left + STEP);
        charRef.current.style.left = `${left + STEP}px`;
        return;
      case 'ArrowUp':
        if (top - DEST_SIZE < STEP) {
          setTop(DEST_SIZE);
          charRef.current.style.top = `${DEST_SIZE}px`;
          findDest();
          return;
        }
        setTop(top - STEP);
        charRef.current.style.top = `${top - STEP}px`;
        return;
      case 'ArrowDown':
        if (top + CHAR_SIZE + STEP > HEIGHT) {
          setLeft(HEIGHT - CHAR_SIZE);
          charRef.current.style.top = `${HEIGHT - CHAR_SIZE}px`;
          return;
        }
        setTop(top + STEP);
        charRef.current.style.top = `${top + STEP}px`;
        return;
      default:
        return;
    }
  }

  useEffect(() => {
    charRef.current.style.left = `${WIDTH / 2 - CHAR_SIZE / 2}px`;
    charRef.current.style.top = `${HEIGHT / 2 - CHAR_SIZE / 2}px`;

    const mstCount = Math.floor(Math.random() * 5);
    console.log(mstCount);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });

  return (
    <div className="container">
      <div className="container-layer"></div>
      <div className="dest-box profile">
        <img className="dest" src={planetProfile} alt="earth" />
        <div className="dest-title">Profile</div>
      </div>
      <div className="dest-box my-work">
        <img className="dest" src={planetWork} alt="planet" />
        <div className="dest-title">My Work</div>
      </div>
      <div className="dest-box contact">
        <img className="dest" src={planetContact} alt="planet" />
        <div className="dest-title">Contact</div>
      </div>
      <img className="char" src={charLeft} ref={charRef} alt="owner character" />
    </div>
  );
}

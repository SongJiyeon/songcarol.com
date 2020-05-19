import React from 'react';
import Modal from './components/Modal';
import Home from './components/Home';
import useModalOpen from './hooks/useModalOpen';
import './App.css';

function App() {
  const { modalOpen } = useModalOpen();
  console.log(modalOpen);
  return (
    <div className="App">
      {modalOpen &&  <Modal />}
      <Home />
    </div>
  );
}

export default App;

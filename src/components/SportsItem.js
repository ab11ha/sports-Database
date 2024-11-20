import React, { useState } from 'react';
import Modal from 'react-modal';
import Logo from '../img/sportsicon.png';

const SportsItem = ({ sport }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className='card-1'>
        <div className='card-1-top'>
          <img
            src={sport.strSportThumb}
            alt='sport-img'
            className='card-1-img'
          />
        </div>
        <div className='card-1-bottom'>
          <h1 className='card-1-title'>{sport.strSport}</h1>
          <button
            className='btn card-1-btn'
            onClick={() => setModalIsOpen(true)}
          >
            More Info
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className='modal-2'
        ariaHideApp={false}
      >
        <button className='close-btn' onClick={() => setModalIsOpen(false)}>
          <i className='fa fa-times'></i>
        </button>
        <div className='modal-2-header'>
          <img
            src={Logo}
            alt='logo'
            style={{ width: '55px', height: '50px' }}
          />
          <h3>{sport.strSport}</h3>
        </div>
        <div className='modal-2-content'>
          <h4>{sport.strFormat}</h4>
          <p>{sport.strSportDescription}</p>
        </div>
      </Modal>
    </div>
  );
};

export default SportsItem;

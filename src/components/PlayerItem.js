import React, { useState } from 'react';
import logo from '../img/player.png';
import Modal from 'react-modal';

const PlayerItem = ({ player }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Card for players without images
  if (player.strCutout === null) {
    return (
      <div>
        <div className='card-2'>
          <div className='card-2-top'>
            <img
              src={logo}
              alt='player img'
              className='card-2-top-img card-2-top-img-2'
            />
          </div>
          <div className='card-2-bottom card-3-bottom'>
            <div className='card-2-title'>
              <h2>{player.strPlayer}</h2>
            </div>
            <div className='card-2-info'>
              <p>
                <strong>Sport:</strong> {player.strSport}
              </p>
              <p>
                <strong>Team:</strong> {player.strTeam}
              </p>
              <p>
                <strong>Position:</strong> {player.strPosition}
              </p>
              <p>
                <strong>Nationality:</strong> {player.strNationality}
              </p>
              <p>
                <strong>Gender:</strong> {player.strGender}
              </p>
            </div>
            <button className='card-2-btn' onClick={() => setModalIsOpen(true)}>
              More Info
            </button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal-3'
          ariaHideApp={false}
        >
          <button
            className='close-btn close-btn-2'
            onClick={() => setModalIsOpen(false)}
          >
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-3-tltle'>
            <img src={logo} alt='player' className='modal-3-img' />
            <h2>{player.strPlayer}</h2>
          </div>
          <div className='modal-3-content modal-3-content-pl'>
            <p>{player.strDescriptionEN}</p>
          </div>
        </Modal>
      </div>
    );
    // Card for players with images
  } else {
    return (
      <div>
        <div className='card-2'>
          <div className='card-2-top'>
            <img
              src={player.strCutout}
              alt='player img'
              className='card-2-top-img'
            />
          </div>
          <div className='card-2-bottom card-3-bottom'>
            <div className='card-2-title'>
              <h2>{player.strPlayer}</h2>
            </div>
            <div className='card-2-info'>
              <p>
                <strong>Sport:</strong> {player.strSport}
              </p>
              <p>
                <strong>Team:</strong> {player.strTeam}
              </p>
              <p>
                <strong>Position:</strong> {player.strPosition}
              </p>
              <p>
                <strong>Nationality:</strong> {player.strNationality}
              </p>
              <p>
                <strong>Gender:</strong> {player.strGender}
              </p>
            </div>
            <button className='card-2-btn' onClick={() => setModalIsOpen(true)}>
              More Info
            </button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal-3'
          ariaHideApp={false}
        >
          <button
            className='close-btn close-btn-2'
            onClick={() => setModalIsOpen(false)}
          >
            <i className='fa fa-times'></i>
          </button>
          <button
            className='close-btn close-btn-2'
            onClick={() => setModalIsOpen(false)}
          >
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-3-tltle'>
            <img src={player.strCutout} alt='player' className='modal-3-img' />
            <h2>{player.strPlayer}</h2>
          </div>
          <div className='modal-3-content modal-3-content-pl'>
            <p>{player.strDescriptionEN}</p>
          </div>
        </Modal>
      </div>
    );
  }
};

export default PlayerItem;

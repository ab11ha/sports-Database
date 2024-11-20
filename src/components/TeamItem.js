import React, { useState } from 'react';
import Modal from 'react-modal';
import Logo from '../img/team.png';

const TeamItem = ({ team }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Card for teams without badges
  if (team.strTeamBadge === null) {
    return (
      <div>
        <div className='card-2'>
          <div className='card-2-top'>
            <img src={Logo} alt='team badge' className='card-2-top-img' />
          </div>
          <div className='card-2-bottom'>
            <div className='card-2-title'>
              <h2>{team.strTeam}</h2>
            </div>
            <div className='card-2-info'>
              <p>
                <strong>Sport:</strong> {team.strSport}
              </p>
              <p>
                <strong>Country:</strong> {team.strCountry}
              </p>
              <p>
                <strong>League:</strong> {team.strLeague}
              </p>
              <p>
                <strong>Stadium:</strong> {team.strStadium}
              </p>
              <p>
                <strong>Location:</strong> {team.strStadiumLocation}
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
            <img src={Logo} alt='badge' className='modal-3-img' />
            <h2>{team.strTeam}</h2>
          </div>
          <div className='modal-3-content'>
            <p>{team.strDescriptionEN}</p>
            <p>{team.strStadiumDescription}</p>
          </div>
        </Modal>
      </div>
    );
    // Card for teams with badges
  } else {
    return (
      <div>
        <div className='card-2'>
          <div className='card-2-top'>
            <img
              src={team.strTeamBadge}
              alt='team badge'
              className='card-2-top-img'
            />
          </div>
          <div className='card-2-bottom'>
            <div className='card-2-title'>
              <h2>{team.strTeam}</h2>
            </div>
            <div className='card-2-info'>
              <p>
                <strong>Sport:</strong> {team.strSport}
              </p>
              <p>
                <strong>Country:</strong> {team.strCountry}
              </p>
              <p>
                <strong>League:</strong> {team.strLeague}
              </p>
              <p>
                <strong>Stadium:</strong> {team.strStadium}
              </p>
              <p>
                <strong>Location:</strong> {team.strStadiumLocation}
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
            <img
              src={team.strTeamBadge}
              alt='loading'
              className='modal-3-img'
            />
            <h2>{team.strTeam}</h2>
          </div>
          <div className='modal-3-content'>
            <p>{team.strDescriptionEN}</p>
            <p>{team.strStadiumDescription}</p>
          </div>
        </Modal>
      </div>
    );
  }
};

export default TeamItem;

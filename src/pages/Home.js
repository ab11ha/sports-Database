import React, { useState } from 'react';
import Modal from 'react-modal';
import Logo from '../img/sportsicon.png';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section>
      <div className='home-header'>
        <h2 className='sub-heading'>
          An interactive website in which you can search for any athlete and
          team from a wide selection of sports{' '}
        </h2>
        <button className='btn' onClick={() => setModalIsOpen(true)}>
          Sign Up
        </button>
      </div>
      {/* <div className='home'>
        <h2>What is Sports Database about?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, in
          vero aspernatur officiis perferendis, consectetur id velit veritatis
          reiciendis ab ut recusandae, voluptates tempore numquam nulla nam
          neque minima accusantium?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          molestias eligendi eaque nam illum dolorem ullam id consectetur quo
          possimus.
        </p>
        <h2>Tell Me More</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti
          repellat natus ratione ipsa quasi? Aspernatur, aut voluptatem? Maiores
          ad animi nisi, temporibus mollitia quia. Nostrum necessitatibus
          debitis beatae! Voluptatum facilis eveniet cum inventore corporis quos
          est blanditiis voluptatibus officiis.
        </p>
        <h2>Benifits</h2>
        <ul>
          <li>Lifetime Access</li>
          <li>30 Day Money Back</li>
          <li>Tailored Customer support</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ducimus amet, expedita ab excepturi deleniti repellat explicabo libero
          saepe consectetur, quos optio ipsum perferendis accusamus quam error
          voluptatum molestiae reiciendis mollitia dolorem earum, cupiditate
          fugit modi eius. Molestias deleniti aut nesciunt. Tempora dolore
          aliquid illum fugiat neque cupiditate recusandae, tempore, minima
          velit quod molestias eveniet numquam ullam, ut sint atque explicabo ad
          quisquam at suscipit architecto magni officia maiores. Culpa.
        </p>
      </div> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className='modal-1'
        ariaHideApp={false}
      >
        <button className='close-btn' onClick={() => setModalIsOpen(false)}>
          <i className='fa fa-times'></i>
        </button>
        <div className='modal-1-header'>
          <img
            src={Logo}
            alt='logo'
            style={{ width: '55px', height: '50px' }}
          />
          <h3>Sign Up</h3>
        </div>
        <div className='modal-1-content'>
          <p>Register with us to get up to date information and results</p>
          <form className='modal-1-form'>
            <div>
              <label for='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter Name'
                className='form-input'
              />
            </div>
            <div>
              <label for='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                className='form-input'
              />
            </div>
            <div>
              <label for='password'>Password</label>
              <input
                type='password'
                id='Password'
                placeholder='Enter Password'
                className='form-input'
              />
            </div>
            <div>
              <label for='password2'>Confirm Password</label>
              <input
                type='password'
                id='password2'
                placeholder='Confirm password'
                className='form-input'
              />
            </div>
            <input type='submit' value='Submit' className='submit-btn' />
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Home;

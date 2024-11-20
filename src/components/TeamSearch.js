import React, { useState } from 'react';

const TeamSearch = ({ getTeams }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something');
    } else {
      getTeams(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='search-box'>
        <div className='search-bar'>
          <input
            type='text'
            className='search-input'
            placeholder='Search Teams'
            value={text}
            onChange={onChange}
          />
          <button className='search-button'>
            <i className='fas fa-search search-icon'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamSearch;

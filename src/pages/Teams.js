import React from 'react';
import TeamSearch from '../components/TeamSearch';
import TeamItem from '../components/TeamItem';
import Spinner from '../components/Spinner';

const Teams = ({ getTeams, teams, loading, clearSearch }) => {
  // Show spinner while fetching Api info
  if (loading) {
    return (
      <div className='team-bg'>
        <TeamSearch getTeams={getTeams} />
        <Spinner />
      </div>
    );
    // Show error message if there is no result for user input and clear btn
  } else if (teams === null) {
    return (
      <div className='team-bg'>
        <TeamSearch getTeams={getTeams} />
        <button className='clear-btn' onClick={clearSearch}>
          <i className='fa fa-times'></i> Clear Search
        </button>
        <h1 className='error-msg'>no results</h1>
      </div>
    );
    // Show cards for teams searched and clear btn
  } else {
    return (
      <div className='team-bg'>
        <TeamSearch getTeams={getTeams} />
        {teams.length > 0 && (
          <button className='clear-btn' onClick={clearSearch}>
            <i className='fa fa-times'></i> Clear Search
          </button>
        )}
        <div className='grid-3 teams-container'>
          {teams.map((team) => (
            <TeamItem key={team.idTeam} team={team} />
          ))}
        </div>
      </div>
    );
  }
};

export default Teams;

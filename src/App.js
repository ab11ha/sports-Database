import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';

const App = () => {
  const [sports, setSports] = useState([]);
  const [loadingSports, setLoadingSports] = useState(false);
  const [teams, setTeams] = useState([]);
  const [loadingTeams, setLoadingTeams] = useState(false);
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(false);

  // Get list of all sports
  const listSports = async () => {
    try {
      setLoadingSports(true);
      const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`);
      setSports(res.data.sports);
      setLoadingSports(false);
    } catch (err) {
      console.log(err);
      setLoadingSports(false);
    }
  };

  // Search for teams by name
  const getTeams = async (input) => {
    try {
      setLoadingTeams(true);
      const res = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input}`
      );
      setTeams(res.data.teams);
      setLoadingTeams(false);
    } catch (err) {
      console.log(err);
      setLoadingTeams(false);
    }
  };

  // Search for players by name
  const getPlayers = async (input) => {
    try {
      setLoadingPlayers(true);
      const res = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${input}`
      );
      setPlayers(res.data.player);
      setLoadingPlayers(false);
    } catch (err) {
      console.log(err);
      setLoadingPlayers(false);
    }
  };

  // Clear Search
  const clearSearch = () => {
    setTeams([]);
    setPlayers([]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/sports'
            render={(props) => (
              <Sports
                listSports={listSports}
                sports={sports}
                loading={loadingSports}
              />
            )}
          />
          <Route
            exact
            path='/teams'
            render={(props) => (
              <Teams
                getTeams={getTeams}
                teams={teams}
                loading={loadingTeams}
                clearSearch={clearSearch}
              />
            )}
          />
          <Route
            exact
            path='/players'
            render={(props) => (
              <Players
                getPlayers={getPlayers}
                players={players}
                loading={loadingPlayers}
                clearSearch={clearSearch}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

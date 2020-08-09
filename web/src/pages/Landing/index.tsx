import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/teach.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  async function getTotalConnections() {
    const { data } = await api.get('/connections');

    setTotalConnections(data.total);
  }

  useEffect(() => {
    getTotalConnections();
  }, []);

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Your study platform online.</h2>
        </div>

        <img src={landingImg} alt='Study platform' className='hero-image' />

        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={studyIcon} alt='Study' />
            Study
          </Link>

          <Link to='/teach' className='teach'>
            <img src={teachIcon} alt='Teach' />
            Teach
          </Link>
        </div>

        <span className='total-connections'>
          Total of {totalConnections} connections already took place
          <img src={purpleHeartIcon} alt='Purple Heart' />
        </span>
      </div>
    </div>
  );
};

export default Landing;

import React, { useEffect } from 'react'
import VisitingCard from './VisitingCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('Arjun-Mehta');
    }
  }, []);

  return (
    <div>
      <VisitingCard />
    </div>
  )
}

export default Home
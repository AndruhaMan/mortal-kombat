import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FatalityPage.scss';
import fatalitySound from './fatality-sound.mp3';

export const FatalityPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    new Audio(fatalitySound).play();

    setTimeout(() => {
      navigate('/select');
    }, 3000)
  }, [navigate]);

  return (
    <div className="FatalityPage"></div>
  );
}
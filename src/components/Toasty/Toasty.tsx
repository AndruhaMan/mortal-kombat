import { useEffect } from 'react';
import toastySound from './toasty.mp3'
import './Toasty.scss'

export const Toasty = () => {
  useEffect(() => {
    new Audio(toastySound).play();
  }, []);

  return (
    <div className="Toasty"></div>
  );
}
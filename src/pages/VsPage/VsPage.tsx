import { Character } from '../../types/character';
import sound from './vs.mp3';

import './VsPage.scss';
import { useEffect, useState } from 'react';

type Props = {
  firstSelectedCharacter: Character | null,
  secondSelectedCharacter: Character | null,
};

export const VsPage: React.FC<Props> = ({ firstSelectedCharacter, secondSelectedCharacter }) => {
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <div className="VsPage">
      {firstSelectedCharacter && (
        <div className={`VsPage__character VsPage__character--${firstSelectedCharacter} `}></div>
      )}
      {secondSelectedCharacter && (
        <div className={`VsPage__character VsPage__character--second VsPage__character--${secondSelectedCharacter}`}></div>
      )}
    </div>
  );
}
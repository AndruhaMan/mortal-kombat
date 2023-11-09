import { useEffect, useRef, useState } from 'react';
import { VersusCodes } from '../../components/VersusCodes';
import { Character } from '../../types/character';
import { incrementNumberInArray } from '../../utils/helpers';
import sound from './vs-sound.mp3';

import './VsPage.scss';

type Props = {
  firstSelectedCharacter: Character | null,
  secondSelectedCharacter: Character | null,
};

export const VsPage: React.FC<Props> = ({ firstSelectedCharacter, secondSelectedCharacter }) => {
  const [versusCodes, setVersusCodes] = useState([0, 0, 0, 0, 0, 0]);
  const pageRef = useRef<HTMLDivElement>(null);
  const audio = useRef(new Audio(sound)).current;

  useEffect(() => {
    audio.play();

    if (pageRef.current) {
      pageRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCodesChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'KeyQ':
        setVersusCodes(current => incrementNumberInArray(current, 0));
        break;

      case 'KeyW':
        setVersusCodes(current => incrementNumberInArray(current, 1));
        break;

      case 'KeyE':
        setVersusCodes(current => incrementNumberInArray(current, 2));
        break;

      case 'KeyR':
        setVersusCodes(current => incrementNumberInArray(current, 3));
        break;

      case 'KeyT':
        setVersusCodes(current => incrementNumberInArray(current, 4));
        break;

      case 'KeyY':
        setVersusCodes(current => incrementNumberInArray(current, 5));
        break;

      default:
        break;
    }
  }

  return (
    <div className="VsPage" tabIndex={0} onKeyDown={handleCodesChange} ref={pageRef}>
      <div className="VsPage__container">
        {firstSelectedCharacter && (
          <div className={`VsPage__character VsPage__character--${firstSelectedCharacter} `}></div>
        )}

        {secondSelectedCharacter && (
          <div className={`VsPage__character VsPage__character--second VsPage__character--${secondSelectedCharacter}`}></div>
        )}

        <VersusCodes versusCodes={versusCodes} />
      </div>
    </div>
  );
}
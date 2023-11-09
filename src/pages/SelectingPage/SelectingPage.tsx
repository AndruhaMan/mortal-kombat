import { useState, useEffect, useRef } from 'react';
import { CharactersList } from '../../components/CharactersList';
import { Character } from '../../types/character';
import { canSwitchDown, canSwitchLeft, canSwitchRight, canSwitchUp, selectRandomLocation } from '../../utils/helpers';
import { characters } from '../../data/characters';
import selectingSound from './selecting-sound.mp3';
import acceptingSound from './accepting-sound.mp3';

import './SelectingPage.scss';

type Props = {
  setFirstSelectedCharacter: (character: Character | null) => void
  setSecondSelectedCharacter: (character: Character | null) => void
};

export const SelectingPage: React.FC<Props> = ({
  setFirstSelectedCharacter,
  setSecondSelectedCharacter,
}) => {
  const [currentFirstCharacter, setCurrentFirstCharacter] = useState(0);
  const [currentSecondCharacter, setCurrentSecondCharacter] = useState(4);
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);

  const location = useRef(selectRandomLocation()).current;
  const pageRef = useRef<HTMLDivElement>(null);
  

  const currentPosition = isFirstSelected
    ? currentSecondCharacter
    : currentFirstCharacter;

  const setCurrentPosition = isFirstSelected
    ? setCurrentSecondCharacter
    : setCurrentFirstCharacter;

  useEffect(() => {
    setFirstSelectedCharacter(null);
    setSecondSelectedCharacter(null);

    if (pageRef.current) {
      pageRef.current.focus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSelectingSound = () => {
    new Audio(selectingSound).play();
  }

  const playAcceptingSound = () => {
    new Audio(acceptingSound).play();
  }

  const handleCharacterChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isFirstSelected && isSecondSelected) {
      return;
    }

    if (event.key === 'ArrowRight' && canSwitchRight(currentPosition)) {
      setCurrentPosition(current => current + 1);
      playSelectingSound();
    }

    if (event.key === 'ArrowLeft' && canSwitchLeft(currentPosition)) {
      setCurrentPosition(current => current - 1);
      playSelectingSound();
    }

    if (event.key === 'ArrowDown' && canSwitchDown(currentPosition)) {
      setCurrentPosition(current => current + 5);
      playSelectingSound();
    }

    if (event.key === 'ArrowUp' && canSwitchUp(currentPosition)) {
      setCurrentPosition(current => current - 5);
      playSelectingSound();
    }

    if (event.key === 'Enter') {
      if (isFirstSelected) {
        setSecondSelectedCharacter(characters[currentPosition]);
        setIsSecondSelected(true);
      } else {
        setFirstSelectedCharacter(characters[currentPosition]);
        setIsFirstSelected(true);
      }

      playAcceptingSound()
    }
  }

  return (
    <div className="SelectingPage" tabIndex={0} onKeyDown={handleCharacterChange} ref={pageRef}>
      <h2 className="SelectingPage__title">Select your fighter</h2>
      <CharactersList
        currentFirstCharacter={currentFirstCharacter}
        currentSecondCharacter={currentSecondCharacter}
        isFirstSelected={isFirstSelected}
        isSecondSelected={isSecondSelected}
      />
      <p className="SelectingPage__map">
        {`Kombat zone: ${location}`}
      </p>
    </div>
  );
}
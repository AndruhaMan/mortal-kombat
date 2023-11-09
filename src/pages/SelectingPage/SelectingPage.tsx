import { useState, useEffect, useRef, useCallback } from 'react';
import { CharactersList } from '../../components/CharactersList';
import { Character } from '../../types/character';
import { canSwitchDown, canSwitchLeft, canSwitchRight, canSwitchUp, handleSwitch, selectRandomLocation } from '../../utils/helpers';
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

  useEffect(() => {
    setFirstSelectedCharacter(null);
    setSecondSelectedCharacter(null);

    if (pageRef.current) {
      pageRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSelectingSound = useCallback(() => {
    new Audio(selectingSound).play();
  }, []);

  const playAcceptingSound = useCallback(() => {
    new Audio(acceptingSound).play();
  }, []);

  const handleCharacterChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'KeyD') {
      handleSwitch('right', currentFirstCharacter, setCurrentFirstCharacter, isFirstSelected)
      playSelectingSound();
    }

    if (event.code === 'KeyA') {
      handleSwitch('left', currentFirstCharacter, setCurrentFirstCharacter, isFirstSelected)
      playSelectingSound();
    }

    if (event.code === 'KeyS') {
      handleSwitch('down', currentFirstCharacter, setCurrentFirstCharacter, isFirstSelected)
      playSelectingSound();
    }

    if (event.code === 'KeyW') {
      handleSwitch('up', currentFirstCharacter, setCurrentFirstCharacter, isFirstSelected)
      playSelectingSound();
    }

    if (event.code === 'ArrowRight') {
      handleSwitch('right', currentSecondCharacter, setCurrentSecondCharacter, isSecondSelected)
      playSelectingSound();
    }

    if (event.code === 'ArrowLeft') {
      handleSwitch('left', currentSecondCharacter, setCurrentSecondCharacter, isSecondSelected)
      playSelectingSound();
    }

    if (event.code === 'ArrowDown') {
      handleSwitch('down', currentSecondCharacter, setCurrentSecondCharacter, isSecondSelected)
      playSelectingSound();
    }

    if (event.code === 'ArrowUp') {
      handleSwitch('up', currentSecondCharacter, setCurrentSecondCharacter, isSecondSelected)
      playSelectingSound();
    }

    if (event.code === 'Space') {
      setFirstSelectedCharacter(characters[currentFirstCharacter]);
      setIsFirstSelected(true);

      playAcceptingSound()
    }

    if (event.code === 'Enter') {
      setSecondSelectedCharacter(characters[currentSecondCharacter]);
      setIsSecondSelected(true);

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
import { useState, useEffect, useRef, useCallback } from 'react';
import { CharactersList } from '../../components/CharactersList';
import { Character } from '../../types/character';
import { getDirectionByKeyCode, handleSwitch, selectRandomLocation } from '../../utils/helpers';
import { characters } from '../../data/characters';
import selectingSound from '../../sounds/selecting-sound.mp3';
import acceptingSound from '../../sounds/accepting-sound.mp3';

import './SelectingPage.scss';
import { Direction } from '../../types/direction';

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
  }, [setFirstSelectedCharacter, setSecondSelectedCharacter]);

  const playSelectingSound = useCallback(() => {
    new Audio(selectingSound).play();
  }, []);

  const playAcceptingSound = useCallback(() => {
    new Audio(acceptingSound).play();
  }, []);

  const handleCharacterChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'KeyD':
      case 'KeyA':
      case 'KeyS':
      case 'KeyW':
        if (!isFirstSelected) {
          handleSwitch(getDirectionByKeyCode(event.code), setCurrentFirstCharacter)
          playSelectingSound();
        }
        break;

      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'ArrowUp':
        if (!isSecondSelected) {
          handleSwitch(getDirectionByKeyCode(event.code), setCurrentSecondCharacter)
          playSelectingSound();
        }
        break;

      case 'Space':
        if (!isFirstSelected) {
          setFirstSelectedCharacter(characters[currentFirstCharacter]);
          setIsFirstSelected(true);

          playAcceptingSound()
        }
        break;

      case 'Enter':
        if (!isSecondSelected) {
          setSecondSelectedCharacter(characters[currentSecondCharacter]);
          setIsSecondSelected(true);

          playAcceptingSound()
        }
        break;

        default:
          return;
    }
  }

  return (
    <section className="SelectingPage" tabIndex={0} onKeyDown={handleCharacterChange} ref={pageRef}>
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
    </section>
  );
}
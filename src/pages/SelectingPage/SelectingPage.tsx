import { useState, useEffect, useRef } from 'react';
import { CharactersList } from '../../components/CharactersList';
import { Character } from '../../types/character';
import './SelectingPage.scss';
import { canSwitchDown, canSwitchLeft, canSwitchRight, canSwitchUp } from '../../utils/helpers';
import { characters } from '../../characters';

type Props = {
  setSelectedCharacter: (character: Character) => void
};

export const SelectingPage: React.FC<Props> = ({ setSelectedCharacter }) => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  const handleCharacterChange = (event : React.KeyboardEvent<HTMLDivElement>) => {
    if (isSelected) {
      return;
    }

    if(event.key === 'ArrowRight' && canSwitchRight(currentCharacter)) {
      setCurrentCharacter(current => current + 1);
    }

    if(event.key === 'ArrowLeft' && canSwitchLeft(currentCharacter)) {
      setCurrentCharacter(current => current - 1);
    }

    if(event.key === 'ArrowDown' && canSwitchDown(currentCharacter)) {
      setCurrentCharacter(current => current + 5);
    }

    if(event.key === 'ArrowUp' && canSwitchUp(currentCharacter)) {
      setCurrentCharacter(current => current - 5);
    }

    if (event.key === 'Enter') {
      setSelectedCharacter(characters[currentCharacter]);
      setIsSelected(true);
    }
  }

  return (
    <div className="SelectingPage" tabIndex={0} onKeyDown={handleCharacterChange} ref={pageRef}>
      <h2 className="SelectingPage__title">Select your fighter</h2>
      <CharactersList currentCharacter={currentCharacter} isSelected={isSelected} />
      <p className="SelectingPage__map">Kombat zone: Soul Chamber</p>
    </div>
  );
}
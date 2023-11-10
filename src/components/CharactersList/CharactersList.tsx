import classNames from 'classnames';
import './CharactersList.scss'
import { characters } from '../../data/characters';
import { Character } from '../../types/character';

type Props = {
  currentFirstCharacter: number,
  currentSecondCharacter: number,
  isFirstSelected: boolean,
  isSecondSelected: boolean,
};

export const CharactersList: React.FC<Props> = ({
  currentFirstCharacter,
  currentSecondCharacter,
  isFirstSelected,
  isSecondSelected,
}) => {
  const isFirstPlayer = (character: Character) => character === characters[currentFirstCharacter];
  const isSecondPlayer = (character: Character) => character === characters[currentSecondCharacter];

  return (
    <ul className="CharactersList">
      {characters.map(character => (
        <li
          key={character}
          className={classNames(
            'CharactersList__icon',
            `CharactersList__icon--${character}`,
            { 'CharactersList__icon--current-first': isFirstPlayer(character) },
            { 'CharactersList__icon--current-second': isSecondPlayer(character) },
            { 'CharactersList__icon--current-both': isFirstPlayer(character) && isSecondPlayer(character) },
            { 'CharactersList__icon--selected-first': isFirstPlayer(character) && isFirstSelected },
            { 'CharactersList__icon--selected-second': isSecondPlayer(character) && isSecondSelected },
            { 'CharactersList__icon--selected-both': isFirstPlayer(character) && isSecondPlayer(character) && isFirstSelected && isSecondSelected },
          )}
        >
        </li>
      ))}
    </ul>
  )
}
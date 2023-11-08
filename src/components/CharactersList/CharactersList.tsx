import classNames from 'classnames';
import './CharactersList.scss'
import { characters } from '../../characters';

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
  return (
    <div className="CharactersList">
      {characters.map(character => (
        <div
          key={character}
          className={classNames(
            'CharactersList__icon',
            `CharactersList__icon--${character}`,
            { 'CharactersList__icon--current-first': character === characters[currentFirstCharacter] },
            { 'CharactersList__icon--current-second': character === characters[currentSecondCharacter] },
            { 'CharactersList__icon--current-both': character === characters[currentFirstCharacter] && currentFirstCharacter === currentSecondCharacter },
            { 'CharactersList__icon--selected-first': character === characters[currentFirstCharacter] && isFirstSelected },
            { 'CharactersList__icon--selected-second': character === characters[currentSecondCharacter] && isSecondSelected },
            { 'CharactersList__icon--selected-both': character === characters[currentFirstCharacter] && currentFirstCharacter === currentSecondCharacter && isSecondSelected },
          )}
        >
        </div>
      ))}
    </div>
  )
}
import classNames from 'classnames';
import './CharactersList.scss'
import { characters } from '../../characters';

type Props = {
  currentCharacter: number,
  isSelected: boolean,
};

export const CharactersList: React.FC<Props> = ({ currentCharacter, isSelected }) => {
  return (
    <div className="CharactersList">
      {characters.map(character => (
        <div
        key={character}
        className={classNames(
          'CharactersList__icon',
          `CharactersList__icon--${character}`,
          { 'CharactersList__icon--current': character === characters[currentCharacter] },
          { 'CharactersList__icon--selected': character === characters[currentCharacter] && isSelected },
        )}
        >
        </div>
      ))}
    </div>
  )
}
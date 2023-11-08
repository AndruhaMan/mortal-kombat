import classNames from 'classnames';
import './CharactersList.scss'
import { characters } from '../../characters';

type Props = {
  currentCharacter: number,
}

export const CharactersList: React.FC<Props> = ({ currentCharacter }) => {
  return (
    <div className="CharactersList">
      {characters.map(character => (
        <div
        key={character}
        className={classNames(
          'CharactersList__icon',
          `CharactersList__icon--${character}`,
          { 'CharactersList__icon--selected': character === characters[currentCharacter] },
        )}
        >
        </div>
      ))}
    </div>
  )
}
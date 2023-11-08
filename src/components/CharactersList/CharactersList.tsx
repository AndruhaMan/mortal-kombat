import './CharactersList.scss'

const characters = [
  'subzero', 'scorpion', 'kitana',
  'reptile', 'ermac', 'shangtsung',
  'sheeva', 'liukang', 'kunglao',
  'kano', 'kabal', 'jax',
  'nightwolf', 'cyrax', 'sektor'
];

export const CharactersList = () => {
  return (
    <div className="CharactersList">
      {characters.map(character => (
        <div className={`CharactersList__icon CharactersList__icon--${character}`}></div>
      ))}
    </div>
  )
}
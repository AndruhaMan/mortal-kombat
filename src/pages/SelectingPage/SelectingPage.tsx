import { CharactersList } from '../../components/CharactersList';
import './SelectingPage.scss';

export const SelectingPage = () => {
  return (
    <div className="SelectingPage">
      <h2 className="SelectingPage__title">Select your fighter</h2>
      <CharactersList />
      <p className="SelectingPage__map">Kombat zone: Soul Chamber</p>
    </div>
  );
}
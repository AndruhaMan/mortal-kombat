import { Character } from '../../types/character';
import './VsPage.scss';

type Props = {
  firstSelectedCharacter: Character | null,
  secondSelectedCharacter: Character | null,
};

export const VsPage: React.FC<Props> = ({ firstSelectedCharacter, secondSelectedCharacter }) => {
  return (
    <div className="VsPage">
      {firstSelectedCharacter && (
        <div className={`VsPage__character VsPage__character--${firstSelectedCharacter} `}></div>
      )}
      {secondSelectedCharacter && (
        <div className={`VsPage__character VsPage__character--second VsPage__character--${secondSelectedCharacter}`}></div>
      )}
    </div>
  );
}
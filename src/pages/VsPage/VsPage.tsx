import { Character } from '../../types/character';
import './VsPage.scss';

type Props = {
  selectedCharacter: Character | null,
};

export const VsPage: React.FC<Props> = ({ selectedCharacter }) => {
  return (
    <div className="VsPage">
      {selectedCharacter && (
        <div className={`VsPage__character VsPage__character--${selectedCharacter} `}></div>
      )}
      <div className="VsPage__character VsPage__character--second"></div>
    </div>
  );
}
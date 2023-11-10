import './VersusCodes.scss';

type Props = {
  versusCodes: number[],
};

export const VersusCodes: React.FC<Props> = ({ versusCodes}) => {
  return (
    <ul className="VersusCodes">
        {versusCodes.map((code, index) => (
          <li className={`VersusCodes__code VersusCodes__code--${code}`} key={`${index}${code}`}></li>
        ))}
    </ul>
  );
}
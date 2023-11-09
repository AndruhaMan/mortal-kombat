import './VersusCodes.scss';

type Props = {
  versusCodes: number[],
};

export const VersusCodes: React.FC<Props> = ({ versusCodes}) => {
  return (
    <div className="VersusCodes">
        {versusCodes.map((code, index) => (
          <div className={`VersusCodes__code VersusCodes__code--${code}`} key={`${index}${code}`}></div>
        ))}
    </div>
  );
}
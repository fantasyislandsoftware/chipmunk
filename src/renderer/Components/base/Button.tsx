import { FC } from 'react';

interface IProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

const Button: FC<IProps> = ({ text, icon, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <span className={`glyphicon glyphicon-${icon}`}></span>
      {text && <span style={{ marginLeft: '4px' }}>{text}</span>}
    </button>
  );
};

export default Button;

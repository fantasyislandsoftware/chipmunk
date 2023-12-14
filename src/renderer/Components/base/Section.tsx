import { FC } from 'react';

interface IProps {
  style: any;
  content: any;
}

const Panel: FC<IProps> = ({ style, content }) => {
  return (
    <div className="section" style={style}>
      {content}
    </div>
  );
};

export default Panel;

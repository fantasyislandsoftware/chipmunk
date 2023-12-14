import { FC, useState } from 'react';
import { JSONObject } from '../../../interface/general';

interface IProps {
  id: string;
  data: { [key: string]: string }[];
  setSelected: (selected: JSONObject | null) => void;
}

const ListBox: FC<IProps> = ({ id, data, setSelected }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul
      className="list-group"
      style={{ height: '100%' }}
      onClick={(e: any) => {
        const index = e.target.id === '' ? null : Number(e.target.id);
        setSelectedIndex(index);
        if (index !== null) {
          setSelected(data[index]);
        } else {
          setSelected(null);
        }
      }}
    >
      {data.map((item, index) => (
        <a
          id={index.toString()}
          key={index}
          href="#"
          className={`list-group-item list-group-item-action ${
            selectedIndex === index ? 'active' : ''
          }`}
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textAlign: 'left',
          }}
        >
          {item[id]}
        </a>
      ))}
    </ul>
  );
};

export default ListBox;

/*
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
*/

{
  /*<li
          key={index}
          className="list-group-item"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textAlign: 'left',
          }}
        >
          {item[id]}
        </li>*/
}

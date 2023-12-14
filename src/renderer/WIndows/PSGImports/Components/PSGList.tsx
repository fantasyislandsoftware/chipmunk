import { FC, useRef } from 'react';
import { PSGItem } from '../../../../interface/PSG';
import ListBox from '../../../Components/base/ListBox';
import { JSONObject } from '../../../../interface/general';
import Section from '../../../Components/base/Section';

interface IProps {
  data: PSGItem[];
  setSelected: (selected: JSONObject | null) => void;
}

const PSGList: FC<IProps> = ({ data, setSelected }) => {
  return (
    <Section
      style={{ height: '100%' }}
      content={
        <ListBox
          id={'file'}
          data={data as unknown as JSONObject[]}
          setSelected={setSelected}
        />
      }
    />
  );
};

export default PSGList;

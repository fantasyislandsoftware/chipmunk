import { FC, useEffect, useState } from 'react';
import { loadPSG, unloadPSG } from '../../../functions/importers/psg';
import { PSGItem } from '../../../interface/PSG';
import { JSONObject } from '../../../interface/general';
import PSGList from './Components/PSGList';
import PSGTracker from './Components/PSGTracker';
import { useAudioManagerStore } from '../../../stores/useAudioManagerStore';

interface IProps {
  data: PSGItem[];
}

export const PSGImportsView: FC<IProps> = ({ data }) => {
  const [selectedPSG, setSelectedPSG] = useState<PSGItem | null>(null);
  const { audioManager } = useAudioManagerStore();

  useEffect(() => {
    audioManager.reset();
    if (selectedPSG) {
      const path = `${selectedPSG.path}/${selectedPSG.file}`;
      loadPSG(path);
    } else {
      unloadPSG();
    }
  }, [selectedPSG]);

  const setSelected = (selected: JSONObject | null) => {
    setSelectedPSG(selected as unknown as PSGItem);
  };

  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <PSGList data={data} setSelected={setSelected} />
        <PSGTracker />
      </div>
    </>
  );
};

export default PSGImportsView;

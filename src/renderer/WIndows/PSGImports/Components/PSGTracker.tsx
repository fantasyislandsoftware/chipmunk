import { useEffect, useState } from 'react';
import { useAudioManagerStore } from '../../../../stores/useAudioManagerStore';
import { usePSGStore } from '../../../../stores/usePSGStore';
import Button from '../../../Components/base/Button';
import Section from '../../../Components/base/Section';
import PSGControlDeck from './PSGControlDesk';
import PSGRegTable from './PSGRegTable';

const PSGTracker = () => {
  const { regData } = usePSGStore();
  const { audioManager } = useAudioManagerStore();

  const [currentFrame, setCurrentFrame] = useState(0);

  if (regData.length > 0) {
    return (
      <div style={{ display: 'flex', flexFlow: 'column', width: '100%' }}>
        <PSGControlDeck />
        <PSGRegTable/>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PSGTracker;

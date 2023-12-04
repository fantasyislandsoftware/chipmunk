import { useEffect } from 'react';
import { usePSGStore } from '../stores/usePSGStore';
import { loadPSG } from '../functions/importers/psg';
import VirtualKeyboardContainer from './WIndows/VirtualKeyboard/VirtualKeyboardContainer';
import '../css/base.css';
import PSGImport from './WIndows/PSGImport';
import { useAYPlayerStore } from '../stores/useAYPlayerStore';
import {
  initAYPLayer,
  initAudioNode,
  processAYBuffer,
} from '../functions/ayPlayer';

const App = () => {
  const { loading } = usePSGStore();
  const { initialized, context } = useAYPlayerStore();

  useEffect(() => {
    if (!initialized) {
      initAYPLayer();
      initAudioNode(processAYBuffer);
      context.suspend();
    }
  }, [initialized]);

  useEffect(() => {
    if (!loading) {
      loadPSG('gliderrider.psg');
    }
  }, [loading]);

  return (
    <div>
      <VirtualKeyboardContainer />
      <PSGImport />
    </div>
  );
};

export default App;

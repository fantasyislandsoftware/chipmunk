import { useEffect } from 'react';
import { usePSGStore } from '../stores/usePSGStore';
import { loadPSG } from '../functions/importers/psg';
import VirtualKeyboard from './WIndows/VirtualKeyboard';
import '../css/window.css';
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
      <VirtualKeyboard />
      <PSGImport />
    </div>
  );
};

export default App;

import { useEffect } from 'react';
import { usePSGStore } from '../stores/usePSGStore';
import { loadPSG } from '../functions/importers/psg';
import VirtualKeyboard from './WIndows/VirtualKeyboard';
import '../css/window.css';
import PSGImport from './WIndows/PSGImport';

const App = () => {
  const { loading } = usePSGStore();

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

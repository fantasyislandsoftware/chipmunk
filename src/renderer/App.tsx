import { useEffect, useState } from 'react';
import '../css/base.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { useAudioManagerStore } from '../stores/useAudioManagerStore';
import PSGImports from './Windows/PSGImports';

const App = () => {
  const [starting, setStarting] = useState(true);

  const { audioManager } = useAudioManagerStore();

  useEffect(() => {
    if (starting) {
      setStarting(false);
    } else {
      //
    }
  }, [starting]);

  return (
    <>
      {/*<VirtualKeyboard />*/}
      <PSGImports />
    </>
  );
};

export default App;

import { useEffect } from 'react';
import '../css/base.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import PSGImports from './Windows/PSGImports';
import { useAudioManagerStore } from '../stores/useAudioManagerStore';

const App = () => {
  return (
    <>
      {/*<VirtualKeyboard />*/}
      <PSGImports />
    </>
  );
};

export default App;

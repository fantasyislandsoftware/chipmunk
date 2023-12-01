import { useEffect } from 'react';
import { usePSGStore } from '../stores/usePSGStore';
import { loadPSG } from '../functions/importers/psg';
import { useAYPlayerStore } from '../stores/useAYPlayerStore';
import { initAYPLayer, processAYBuffer } from '../functions/ayPlayer';

const App = () => {
  const { loading } = usePSGStore();
  const { context, frame } = useAYPlayerStore();

  useEffect(() => {
    if (!loading) {
      loadPSG('gliderrider.psg');
    }
  }, [loading]);

  return (
    <div>
      <button
        onClick={() => {
          initAYPLayer(processAYBuffer);
        }}
      >
        PLAY
      </button>
      <button
        onClick={() => {
          context.suspend();
        }}
      >
        STOP
      </button>
      <div>{frame}</div>
    </div>
  );
};

export default App;

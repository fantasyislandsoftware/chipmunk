import { initAYPLayer, processAYBuffer } from '../../functions/ayPlayer';
import { useAYPlayerStore } from '../../stores/useAYPlayerStore';
import WindowContainer from '../Components/WindowContainer';

const PSGImport = () => {
  const { frame } = useAYPlayerStore();

  return (
    <WindowContainer
      id="psg_import"
      title="PSG Import"
      content={
        <>
          <button
            onClick={() => {
              initAYPLayer(processAYBuffer);
            }}
          >
            PLAY
          </button>
          <button>STOP</button>
          <div>{frame}</div>
        </>
      }
    />
  );
};

export default PSGImport;

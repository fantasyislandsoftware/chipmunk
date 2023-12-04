import { useAYPlayerStore } from '../../stores/useAYPlayerStore';
import WindowContainer from '../Components/WindowContainer';

const PSGImport = () => {
  const { context, frame } = useAYPlayerStore();

  return (
    <WindowContainer
      id="psg_import"
      title="PSG Import"
      content={
        <>
          <button
            onClick={() => {
              context.resume();
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
        </>
      }
    />
  );
};

export default PSGImport;

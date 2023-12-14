import { useAudioManagerStore } from '../../../../stores/useAudioManagerStore';
import { usePSGStore } from '../../../../stores/usePSGStore';
import Button from '../../../Components/base/Button';
import Section from '../../../Components/base/Section';

const PSGTracker = () => {
  const { regData } = usePSGStore();
  const { audioManager } = useAudioManagerStore();

  const ControlDeck = () => (
    <Section
      style={{ padding: '7px' }}
      content={
        <>
          <Button
            text="Play"
            icon="play"
            onClick={() => {
              audioManager.play();
            }}
          />
          <Button
            text="Stop"
            icon="stop"
            onClick={() => {
              audioManager.stop();
            }}
          />
        </>
      }
    />
  );

  const Tracker = () => (
    <Section style={{ flexGrow: 1 }} content={<div>Tracker</div>} />
  );

  if (regData.length > 0) {
    return (
      <div style={{ display: 'flex', flexFlow: 'column', width: '100%' }}>
        <ControlDeck />
        <Tracker />
      </div>
    );
  } else {
    return <></>;
  }
};

export default PSGTracker;

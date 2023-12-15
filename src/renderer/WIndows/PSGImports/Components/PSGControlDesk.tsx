import { FC } from 'react';
import Section from '../../../Components/base/Section';
import Button from '../../../Components/base/Button';
import { useAudioManagerStore } from '../../../../stores/useAudioManagerStore';

interface IProps {}

const PSGControlDeck: FC<IProps> = () => {
  const { audioManager } = useAudioManagerStore.getState();

  return (
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
};

export default PSGControlDeck;

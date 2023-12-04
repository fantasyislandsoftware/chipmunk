import WindowContainer from '../../Components/WindowContainer';
import VirtualKeyboardView from './VirtualKeyboardView';

const VirtualKeyboardContainer = () => {
  return (
    <WindowContainer
      id="virtual_keyboard"
      title="Virtual Keyboard"
      content={<VirtualKeyboardView />}
    />
  );
};

export default VirtualKeyboardContainer;

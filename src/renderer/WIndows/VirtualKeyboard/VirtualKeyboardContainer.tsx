import WindowContainer from '../../Components/WindowContainer';
import VirtualKeyboardView from './VirtualKeyboardView';
const VirtualKeyboardContainer = () => {
  return (
    <WindowContainer
      id="virtual_keyboard"
      title="Virtual Keyboard"
      width={600}
      height={400}
      content={<VirtualKeyboardView />}
    />
  );
};

export default VirtualKeyboardContainer;

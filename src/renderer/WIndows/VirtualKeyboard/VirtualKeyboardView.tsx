// @ts-ignore
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const VirtualKeyboardView = () => {
  const firstNote = MidiNumbers.fromNote('c1');
  const lastNote = MidiNumbers.fromNote('c3');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  return (
    <div>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber: number) => {
          //getMIDIMessage({ data: [144, midiNumber] }, 0);
        }}
        stopNote={(midiNumber: number) => {
          //getMIDIMessage({ data: [128, midiNumber] }, 0);
        }}
        width={800}
        keyboardShortcuts={keyboardShortcuts}
      />
    </div>
  );
};

export default VirtualKeyboardView;

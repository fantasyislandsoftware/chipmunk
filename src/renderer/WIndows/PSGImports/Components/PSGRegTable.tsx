import { FC } from 'react';
import Section from '../../../Components/base/Section';
import { useAudioManagerStore } from '../../../../stores/useAudioManagerStore';
import { usePSGStore } from '../../../../stores/usePSGStore';

interface IProps {}

const PSGRegTable: FC<IProps> = () => {
  const { currentFrame } = useAudioManagerStore.getState();
  const { regData } = usePSGStore.getState();

  const headings = [
    'T1',
    'T2',
    'T4',
    'N',
    'M1',
    'M2',
    'M3',
    'V1',
    'V2',
    'V3',
    'E',
    'S1',
    'S2',
    'S3',
  ];

  const chunk = [];
  if (regData.length === 0) return null;
  for (let i = currentFrame; i < currentFrame + 10; i++) {
    if (i < regData.length) {
      chunk.push(regData[i]);
    }
  }

  return (
    <Section
      style={{ flexGrow: 1 }}
      content={
        <div>
          <table className="fixed">
            {headings.map((heading) => (
              <col width="40px"></col>
            ))}
            <thead>
              <tr>
                {headings.map((heading) => (
                  <th key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chunk.map((row, index) => (
                <tr>
                  {row.map((cell) => (
                    <td
                      style={{
                        backgroundColor: index === 0 ? 'blue' : 'white',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    />
  );
};

export default PSGRegTable;

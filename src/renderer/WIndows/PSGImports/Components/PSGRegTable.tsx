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

  const chunk: number[][] = [];
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
          <table className="table">
            <thead>
              <tr>
                {headings.map((heading, index) => {
                  const a = (chunk[0][index] / 255) * 100;
                  const b = 100 - a;
                  return (
                    <th key={heading}>
                      <div
                        style={{
                          width: '24px',
                          height: '32px',
                          backgroundColor: 'blue',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: `${b}%`,
                            backgroundColor: 'white',
                          }}
                        ></div>
                      </div>
                    </th>
                  );
                })}
              </tr>
              <tr>
                {headings.map((heading) => (
                  <th key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chunk.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell) => (
                    <td
                      key={`${Math.random()}`}
                      style={{
                        backgroundColor: rowIndex === 0 ? 'lightBlue' : 'white',
                        //minWidth: '10px',
                        //maxWidth: '10px',
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

import React from 'react';
import { FC } from 'react';

interface IProps {
  data: number[][];
  frame: number;
}

const EditTable: FC<IProps> = ({ data, frame }) => {
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
  if (data.length === 0) return null;
  for (let i = frame; i < frame + 10; i++) {
    if (i < data.length) {
      chunk.push(data[i]);
    }
  }

  return (
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
  );
};

export default React.memo(EditTable);

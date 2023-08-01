import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Intersection Observer 코드를 여기에 작성하면 됩니다.
    // (아래의 observer 코드를 이곳으로 이동할 수 있습니다.)
  }, []);

  const imgList = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <style>
          {`
            body {
              background: white;
              height: 6000px;
              font-family: "nanumsquare";
              margin: 0;
              flex-wrap: wrap;
              text-align: center;
              align-items: center;
              justify-content: center;
            }
            div {
              margin-top: 0px;
              color: white;
              justify-content: center;
              text-align: center;
            }
            img {
              text-align: center;
              margin: 0px;
              padding: 0px;
              line-height: 0;
              object-fit: cover;
            }
          `}
        </style>

        <audio id="audio" autoPlay>
          <source src="./Untitled1.wav" />
        </audio>

        <table
          id="img_table"
          className="table"
          style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          <tbody>
            {imgList.map((i) => (
              <tr key={i}>
                <img
                  src={`./img/20230622175007_1e33af50baf68827016300f1414453dc_IMAG01_${i}.jpg`}
                  alt={`Image ${i}`}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </html>
  );
};

export default MyComponent;
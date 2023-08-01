import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import image1 from "`./img/20230622175007_1e33af50baf68827016300f1414453dc_IMAG01_1.jpg"

function App() {
  let [성우목소리, 성우목소리변경] = useState('소리OFF');
  let [Good, GoodFunc] = useState(0);
  let [Bad, BadFunc] = useState(0);

  // function OnOff() {
  //   var newArray = [...성우목소리];
  //   newArray[0] = 성우목소리 === '소리OFF' ? '소리ON' : '소리OFF';
  //   성우목소리변경(newArray);
  // }

  function renderImages() {
    let images = [];
    for (let i = 1; i <= 40; i++) {
      let imageName = `./img/20230622175007_1e33af50baf68827016300f1414453dc_IMAG01_${i}.jpg`;
      images.push(<img key={i} src={process.env.PUBLIC_URL + imageName} alt={`Image ${i}`} />);
    }
    return images;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>웹툰 프로젝트</div>
      </div>

      <div className="BGM_setting">
        <span onClick={() => GoodFunc(Good + 1)}>👍</span> {Good}
        <span onClick={() => BadFunc(Bad + 1)}>👎</span> {Bad}
      </div>


      {/* <div className="image-container">{renderImages()}</div> */}
      
      <div className="image-container">
        {Array.from({ length: 40 }, (_, index) => (
          <img
            key={index + 1}
            src={`../img/20230622175007_1e33af50baf68827016300f1414453dc_IMAG01_${index + 1}.jpg`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default App;

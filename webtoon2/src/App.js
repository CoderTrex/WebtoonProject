
import "./App.css";
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const [lastScrollY, setlastScrollY] = useState(0);
  const audioRef = useRef(null);
  const [currentAudioSrc, setCurrentAudioSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  
  window.addEventListener("mousewheel", e => {
    const scrollY = window.scrollY;
        
    // 현재의 스크롤 값을 저장
    setlastScrollY(scrollY);
  });

  useEffect(() => {
    // IntersectionObserver 등록
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'active' 클래스 추가
        if (entry.intersectionRatio >= 0.7) {
          let imgIndex = entry.target.src.split('/')[5].split('.')[0];
          let audioSrc = require(`./audio/${imgIndex}.wav`);
          if (currentIndex !== imgIndex && currentIndex !== -1)
          {
            setCurrentIndex(imgIndex);
            console.log(currentIndex + " " + imgIndex)
            audioRef.current.pause();
            setCurrentIndex(imgIndex);

            var AudioContext;
            var audioContext;
              
            navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
                AudioContext = window.AudioContext || window.webkitAudioContext;
                audioContext = new AudioContext();
            }).catch(e => {
                console.error(`Audio permissions denied: ${e}`);
            }).then(()=>{
              const audio = new Audio(audioSrc);
              audio.play();
              audioRef.current = audio; // 현재 오디오 업데이트
              setCurrentAudioSrc(audioSrc); // 현재 오디오 소스 업데이트            
            })
          }    
        }
        // 그 외의 경우 'active' 클래스 제거
        else {
          entry.target.classList.remove('active');
        }
      })
    })
    if (lastScrollY === 0)
      setCurrentIndex(0);
    // 관찰할 대상을 선언하고, 해당 속성을 관찰  
    const boxList = document.querySelectorAll('.webImg');
    boxList.forEach((el) => {
      io.observe(el);
    })
  }, [lastScrollY]);


  const imgList = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="App">
      <header className="App-header">
        <audio ref={audioRef} >
         <source src={currentAudioSrc} type="audio/wav" />
       
        </audio>
        <table style={{ borderCollapse: "collapse" }}>
          {imgList.map((i) => (
            <tr
              style={{
                margin: 0,
                padding: 0,
                lineHeight: 0,
                backgroundColor: "yellow",
              }}
              key={i}
            >
              <img
                src={require(`./img/${i}.jpg`)}
                className="webImg"
                style={{
                  backgroundColor: "red",
                  verticalAlign: "top",
                  padding: 0,
                  margin: 0,
                  lineHeight: 0,
                }}
                alt={`Image ${i}`}
              />
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;

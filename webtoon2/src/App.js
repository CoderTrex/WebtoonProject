import logo from "./logo.svg";
import "./App.css";

function App() {
  const imgList = Array.from({ length: 39 }, (_, i) => i + 1);
  return (
    <div className="App">
      <header className="App-header">
        <audio id="audio" autoPlay>
          <source src={require("./1.wav")} />
        </audio>
        <video
          controls
          src={require("./audio/1.wav")}
          type="video/wmv"
          autoPlay
        />

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
                src={require(`./img/20230622175007_1e33af50baf68827016300f1414453dc_IMAG01_${i}.jpg`)}
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

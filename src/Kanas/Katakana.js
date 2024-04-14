import { useState } from "react";
import katakanas from "../json/katakana.json";

function Katakana(x) {
  return <div>salve</div>;
}

function App() {
  const [katakana_1, setHiragana_1] = useState(
    katakanas[Math.floor(Math.random() * katakanas.length)]
  );
  const [katakana_2, setHiragana_2] = useState(
    katakanas[Math.floor(Math.random() * katakanas.length)]
  );
  const [katakana_3, setHiragana_3] = useState(
    katakanas[Math.floor(Math.random() * katakanas.length)]
  );

  const [erro, setErro] = useState(false);
  const [resposta, setResposta] = useState("");
  const [numero, setNumero] = useState(1);

  let gerarHiragana = () => {
    setHiragana_1(katakanas[Math.floor(Math.random() * katakanas.length)]);
    setHiragana_2(katakanas[Math.floor(Math.random() * katakanas.length)]);
    setHiragana_3(katakanas[Math.floor(Math.random() * katakanas.length)]);
  };

  let handleChange = (e) => {
    setResposta(e.target.value);
  };

  let handleNumberChange = (e) => {
    setNumero(e);
  };

  let handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (
        resposta.toLowerCase() ===
        katakana_1.portugues + katakana_2.portugues + katakana_3.portugues
      ) {
        gerarHiragana();
        setResposta("");
        setErro(false);
      } else {
        setErro(true);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
      <div className="flex justify-center items-center bg-white h-1/2 text-9xl rounded-lg border-4 border-black px-6">
        <div className="flex items-center flex-col">
          <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
            {katakana_1.portugues}
          </div>
          <div>{katakana_1.katakana}</div>
        </div>
        <div className="flex items-center flex-col">
          <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
            {katakana_2.portugues}
          </div>
          <div>{katakana_2.katakana}</div>
        </div>
        <div className="flex items-center flex-col">
          <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
            {katakana_3.portugues}
          </div>
          <div>{katakana_3.katakana}</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 w-80">
        <div className="numbers">
          <div
            className={`opcao ${
              numero === 1 ? "bg-gray-600 border text-white" : ""
            }`}
            onClick={() => {
              handleNumberChange(1);
            }}
          >
            1
          </div>
        </div>
        <div className="numbers">
          <div
            className={`opcao ${
              numero === 2 ? "bg-gray-600 border text-white" : ""
            }`}
            onClick={() => {
              handleNumberChange(2);
            }}
          >
            2
          </div>
        </div>
        <div className="numbers">
          <div
            className={`opcao ${numero === 3 ? "bg-gray-600 text-white" : ""}`}
            onClick={() => {
              handleNumberChange(3);
            }}
          >
            3
          </div>
        </div>
      </div>
      <input
        className={`mt-5 w-80 h-14 p-4 outline-none ${
          erro ? "border-red-500 border-4" : ""
        }`}
        id="input"
        value={resposta}
        placeholder="Resposta"
        onKeyDown={handleSubmit}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default App;

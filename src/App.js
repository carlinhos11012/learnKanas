import { useState } from "react";
import katakanas from "./json/katakana.json";
import hiraganas from "./json/hiragana.json";

function App() {
  const [hiragana_1, setHiragana_1] = useState(
    hiraganas[Math.floor(Math.random() * hiraganas.length)]
  );
  const [hiragana_2, setHiragana_2] = useState(
    hiraganas[Math.floor(Math.random() * hiraganas.length)]
  );
  const [hiragana_3, setHiragana_3] = useState(
    hiraganas[Math.floor(Math.random() * hiraganas.length)]
  );

  const [erro, setErro] = useState(false);
  const [resposta, setResposta] = useState("");

  let gerarKatakana = () => {
    setHiragana_1(hiraganas[Math.floor(Math.random() * hiraganas.length)]);
    setHiragana_2(hiraganas[Math.floor(Math.random() * hiraganas.length)]);
    setHiragana_3(hiraganas[Math.floor(Math.random() * hiraganas.length)]);
  };

  let handleChange = (e) => {
    setResposta(e.target.value);
  };

  let handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (
        resposta.toLowerCase() ===
        hiragana_1.portugues + hiragana_2.portugues + hiragana_3.portugues
      ) {
        gerarKatakana();
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
            {hiragana_1.portugues}
          </div>
          <div>{hiragana_1.hiragana}</div>
        </div>
        <div className="flex items-center flex-col">
          <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
            {hiragana_2.portugues}
          </div>
          <div>{hiragana_2.hiragana}</div>
        </div>
        <div className="flex items-center flex-col">
          <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
            {hiragana_3.portugues}
          </div>
          <div>{hiragana_3.hiragana}</div>
        </div>
      </div>
      <input
        className={`mt-10 w-80 h-14 p-4 outline-none ${
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

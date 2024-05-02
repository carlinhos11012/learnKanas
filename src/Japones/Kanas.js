import { useEffect, useState } from "react";
import katakanas from "../json/katakana.json";
import hiragana from "../json/hiragana.json";

function Kanas() {
  const listaNumeros = [1, 2, 3];
  const [erro, setErro] = useState(false);
  const [lista, setLista] = useState([]);
  const [resposta, setResposta] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [numero, setNumero] = useState(1);
  const [kana, setKana] = useState(true);

  let gerarLista = (numero) => {
    let updateLista = [];
    let updateResposta = "";
    if (kana) {
      for (let i = 0; i < numero; i++) {
        updateLista[i] = hiragana[Math.floor(Math.random() * hiragana.length)];
        updateResposta += updateLista[i].portugues;
      }
    } else {
      for (let i = 0; i < numero; i++) {
        updateLista[i] =
          katakanas[Math.floor(Math.random() * katakanas.length)];
        updateResposta += updateLista[i].portugues;
      }
    }
    setLista(updateLista);
    setResposta(updateResposta);

    return updateLista;
  };

  let handleInputChange = (e) => {
    return setInputValue(e.target.value);
  };

  let handleKanaChange = () => {
    return setKana(!kana);
  };

  let handleNumberChange = (e) => {
    setErro(false);
    setInputValue("");
    return setNumero(e);
  };

  let handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (inputValue.toLowerCase() === resposta) {
        gerarLista(numero);
        setInputValue("");
        setErro(false);
      } else {
        setErro(true);
      }
    }
  };
  useEffect(() => {
    gerarLista(numero);
  }, [kana, numero]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
      <div
        className="rounded-xl bg-white py-1 px-10 mb-3 hover:cursor-pointer"
        onClick={handleKanaChange}
      >
        <div className="w-10 h-10 bg-gray-400 rounded-[50%] "></div>
      </div>
      <div className="flex flex-row justify-center w-[550px] items-center bg-white h-1/2 text-9xl rounded-lg border-4 border-black px-6">
        <div className="flex flex-row">
          {lista.map((x) => {
            return (
              <div className="flex flex-col items-center">
                <div className={`text-2xl ${erro ? "visible" : "invisible"}`}>
                  {x.portugues}
                </div>
                <div>{x.kana}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 w-80">
        {listaNumeros.map((e) => {
          return (
            <div className="numbers">
              <div
                className={`opcao ${
                  numero === e ? "bg-gray-600 text-white" : ""
                }`}
                onClick={() => {
                  handleNumberChange(e);
                }}
              >
                {e}
              </div>
            </div>
          );
        })}
      </div>
      <input
        className={`mt-5 w-80 h-14 p-4 outline-none ${
          erro ? "border-red-500 border-4" : ""
        }`}
        id="input"
        value={inputValue}
        placeholder="Resposta"
        onKeyDown={handleSubmit}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default Kanas;

import { useEffect, useState } from "react";
import katakanas from "../json/katakana.json";
import hiragana from "../json/hiragana.json";

function Kanas() {
  const numberList = [1, 2, 3];
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [correct, setCorrect] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState(1);
  const [kana, setKana] = useState(true);

  let generateList = (number) => {
    let updatelist = [];
    let updateCorrect = "";
    if (kana) {
      for (let i = 0; i < number; i++) {
        updatelist[i] = hiragana[Math.floor(Math.random() * hiragana.length)];
        updateCorrect += updatelist[i].portuguese;
      }
    } else {
      for (let i = 0; i < number; i++) {
        updatelist[i] = katakanas[Math.floor(Math.random() * katakanas.length)];
        updateCorrect += updatelist[i].portuguese;
      }
    }
    setList(updatelist);
    setCorrect(updateCorrect);

    return updatelist;
  };

  let handleInputChange = (e) => {
    return setInputValue(e.target.value);
  };

  let handleKanaChange = () => {
    return setKana(!kana);
  };

  let handleNumberChange = (e) => {
    setError(false);
    setInputValue("");
    return setNumber(e);
  };

  let handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (inputValue.toLowerCase() === correct) {
        generateList(number);
        setInputValue("");
        setError(false);
      } else {
        setError(true);
      }
    }
  };
  useEffect(() => {
    generateList(number);
  }, [kana, number]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
      <div>{kana ? "hiragana" : "katakana"}</div>
      <div
        className="rounded-xl bg-white py-1 px-10 mb-3 hover:cursor-pointer"
        onClick={handleKanaChange}
      >
        <div className="w-10 h-10 bg-gray-400 rounded-[50%] "></div>
      </div>
      <div className="flex flex-row justify-center w-[550px] items-center bg-white h-1/2 text-9xl rounded-lg border-4 border-black px-6">
        <div className="flex flex-row">
          {list.map((x) => {
            return (
              <div className="flex flex-col items-center">
                <div className={`text-2xl ${error ? "visible" : "invisible"}`}>
                  {x.portuguese}
                </div>
                <div>{x.kana}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 w-80">
        {numberList.map((e) => {
          return (
            <div className="numbers">
              <div
                className={`opcao ${
                  number === e ? "bg-gray-600 text-white" : ""
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
          error ? "border-red-500 border-4" : ""
        }`}
        id="input"
        value={inputValue}
        placeholder="correct"
        onKeyDown={handleSubmit}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default Kanas;

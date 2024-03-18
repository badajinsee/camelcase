import { useState } from "react";

import "./Container.css";

const Upper = () => {
  // 대문자 사용자 입력을 위한 상태
  const [capitalInput, setCapitalInput] = useState("");

  // 대문자 변환
  const [capitalLetter, setCapitalLetter] = useState<string>("");

  // 대문자 핸들러
  const handleUpperCase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCapitalInput(input);
    const upperText = input.toUpperCase();
    setCapitalLetter(upperText);
  };

  // 복사버튼
  // input에 아무것도 없을때 복사 안되게 하기

  // 대문자 복사버튼
  const clipButton = () => {
    if (!capitalInput) {
      alert("입력을 해주세요 !");
    } else {
      navigator.clipboard.writeText;
      navigator.clipboard
        .writeText(capitalLetter)
        .then(() => {
          alert("복사 완료");
        })
        .catch((err) => {
          console.error("복사를 실패했습니다.", err);
          alert("복사 실패");
        });
    }
  };

  // 삭제버튼
  const deleteUpperButton = () => {
    setCapitalInput("");
    setCapitalLetter("");
  };

  return (
    <>
      <div className="entire">
        <h2 className="h2Text">⭐️ 대문자 변환</h2>

        <div className="inputContainer">
          <input
            className="input"
            value={capitalInput}
            type="text"
            onChange={handleUpperCase}
            placeholder="대문자로 바꿀 텍스트를 입력하세요."
          />
          <button onClick={deleteUpperButton}>삭제</button>
        </div>

        <div className="clip">
          <h3 className="h3Text">{capitalLetter}</h3>
          <button className="button" onClick={clipButton}>
            복사
          </button>
        </div>
      </div>
    </>
  );
};

export default Upper;

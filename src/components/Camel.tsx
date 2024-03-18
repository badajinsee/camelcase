import { useState } from "react";

import "./Container.css";

const Camel = () => {
  // 카멜 사용자 입력을 위한 상태
  const [camelInputText, setCamelInputText] = useState("");

  // 카멜 변환
  const [camelText, setCamelText] = useState<string>("");

  // 카멜케이스 변환 함수
  const camelF = (text: string): string => {
    const words = text.split("-");
    const camelCaseWord = words
      .map((word, index) => {
        if (index === 0) {
          return word;
        }
        const firstLetterCap = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1);
        return firstLetterCap + remainingLetters;
      })
      .join("");

    return camelCaseWord;
  };

  // 카멜케이스 핸들러
  const handleCamelCase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCamelInputText(input);
    const camelCaseText = camelF(input);
    setCamelText(camelCaseText);
  };

  // 복사버튼
  // input에 아무것도 없을때 복사 안되게 하기

  // 카멜케이스 복사 버튼
  // - 입력 안했을때도 처리하기
  const clipCamelButton = () => {
    if (!camelInputText) {
      alert("입력을 해주세요 !");
    } else if (!camelInputText.includes("-")) {
      alert("-를 입력해야 카멜케이스 변환이 가능합니다.");
    } else {
      navigator.clipboard.writeText;
      navigator.clipboard
        .writeText(camelText)
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
  const deleteCamelButton = () => {
    setCamelInputText("");
    setCamelText("");
  };

  return (
    <>
      <div className="entire">
        <div>
          <h2 className="h2Text">⭐️ 카멜케이스 변환</h2>
          <div className="span">
            <span className="spanCamel">
              카멜이 필요한 부분 앞에 -를 넣어주세요
            </span>
            <span>EX : type-script ➡️ typeScript</span>
          </div>
        </div>

        <div className="inputContainer">
          <input
            className="input"
            value={camelInputText}
            type="text"
            onChange={handleCamelCase}
            placeholder="카멜케이스로 바꿀 텍스트를 입력하세요."
          />
          <button onClick={deleteCamelButton}>삭제</button>
        </div>

        <div className="clip">
          <h3 className="h3Text">{camelText}</h3>
          <button className="button" onClick={clipCamelButton}>
            복사
          </button>
        </div>
      </div>
    </>
  );
};

export default Camel;

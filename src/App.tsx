import "./App.css";
import React from "react";

import Camel from "./components/Camel";
import Upper from "./components/Upper";

function App() {
  return (
    <>
      <Camel />
      <br />
      <Upper />

      <div className="bottom">
        <span>sunjin</span>
        <a
          href="https://github.com/badajinsee/camelcase"
          rel="noopener noreferrer"
        >
          깃헙 바로가기
        </a>
      </div>
    </>
  );
}

export default React.memo(App);

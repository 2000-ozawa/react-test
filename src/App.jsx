import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue" message="お元気ですか？" />
      <p style={contentLadyStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

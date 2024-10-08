import React, { useContext } from "react";
import QuizContext from "../../QuizQuestion";
import GameScreen from "../GameScreen";
import "./index.css";

const MainScreen = ({ questions }) => {
  const { currentQuestionIndex } = useContext(QuizContext);

  const currentQuestion = questions.find(
    (item) => item.id === currentQuestionIndex
  );

  return (
    <div className="main-screen">
      <h1>Quiz Game</h1>
      <div className="question-display">
        <h2>{currentQuestion.text}</h2>
        <GameScreen />
      </div>
    </div>
  );
};

export default MainScreen;

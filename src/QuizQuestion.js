import React from "react";

const QuizContext = React.createContext({
  contestantsList: [],
  addContestantName: () => {},
  currentQuestionNo: 1,
  updateCurrentQuestion: () => {},
  currentPlayerName: "Mall",
  updatePlayerName: () => {},
});

export default QuizContext;

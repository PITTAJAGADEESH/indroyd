import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import QuizContext from "./QuizQuestion";
import MainScreen from "./components/Home";
import PlayerScreen from "./components/PlayHome";
import "./App.css";

const App = () => {
  const quizQuestions = [
    {
      id: 1,
      text: "What is the largest ocean on Earth?",
      options: [
        "A. Atlantic Ocean",
        "B. Indian Ocean",
        "C. Arctic Ocean",
        "D. Pacific Ocean",
      ],
      correct: "D",
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Venus"],
      correct: "B",
    },
    {
      id: 3,
      text: "What is the boiling point of water?",
      options: ["A. 90°C", "B. 100°C", "C. 120°C", "D. 80°C"],
      correct: "B",
    },
    {
      id: 4,
      text: 'Who wrote the play "Hamlet"?',
      options: [
        "A. Leo Tolstoy",
        "B. William Shakespeare",
        "C. Charles Dickens",
        "D. Mark Twain",
      ],
      correct: "B",
    },
    {
      id: 5,
      text: "What is the capital of France?",
      options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
      correct: "C",
    },
  ];

  const [contestantNames, setContestantNames] = useState([]);
  const [currentQuestionIndex, updateCurrentQuestionIndex] = useState(1);
  const [currentPlayerName, updateCurrentPlayerName] = useState("");

  const addContestantName = (name) => {
    setContestantNames((prevList) => [...prevList, name]);
  };

  const updateCurrentQuestion = (questionId) => {
    updateCurrentQuestionIndex(questionId);
  };

  const updatePlayerName = (player) => {
    updateCurrentPlayerName(player);
  };

  const resetQuiz = () => {
    updateCurrentQuestionIndex(1);
    setContestantNames([]);
  };

  return (
    <QuizContext.Provider
      value={{
        contestantNames,
        addContestantName,
        currentQuestionIndex,
        updateCurrentQuestion,
        currentPlayerName,
        updatePlayerName,
        resetQuiz,
      }}
    >
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<MainScreen questions={quizQuestions} />}
          />
          <Route
            exact
            path="/join"
            element={<PlayerScreen questions={quizQuestions} />}
          />
        </Routes>
      </Router>
    </QuizContext.Provider>
  );
};

export default App;

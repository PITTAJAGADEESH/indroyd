import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../../QuizQuestion";
import "./index.css";

const PlayerScreen = ({ questions }) => {
  const {
    addContestantName,
    currentQuestionIndex,
    currentPlayerName,
    updatePlayerName,
    updateCurrentQuestion,
    resetQuiz,
  } = useContext(QuizContext);

  const navigate = useNavigate();
  const [localPlayerName, setLocalPlayerName] = useState("");
  const [isJoined, setJoinedStatus] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerStatus, setAnswerStatus] = useState(null);

  const handleJoin = () => {
    if (localPlayerName.trim() !== "") {
      updatePlayerName(localPlayerName);
      addContestantName(localPlayerName);
      setJoinedStatus(true);
    }
  };

  const currentQuestion = questions.find(
    (item) => item.id === currentQuestionIndex
  );

  const handleSubmitAnswer = () => {
    if (currentQuestion) {
      if (currentQuestion.correct === selectedAnswer[0]) {
        setAnswerStatus(true);
        alert("Correct answer!");
        updateCurrentQuestion(currentQuestionIndex + 1);
      } else {
        setAnswerStatus(false);
        alert("Your answer is wrong! Try Again.");
      }
    }
  };

  const handleExit = () => {
    resetQuiz();
    navigate("/");
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="mobile-screen">
      {currentPlayerName && (
        <h1 className="playerName">
          PlayerName: <span className="name">{currentPlayerName}</span>
        </h1>
      )}

      {!isJoined ? (
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter your name"
            value={localPlayerName}
            onChange={(e) => setLocalPlayerName(e.target.value)}
            className="inputEl"
          />
          <button onClick={handleJoin} className="joinBtn">
            Join Game
          </button>
        </div>
      ) : currentQuestion ? (
        <>
          <h2 className="question">{currentQuestion.text}</h2>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(option)}
                className="button"
                style={{
                  border:
                    selectedAnswer === option ? "3px solid orange" : "none",
                  backgroundColor:
                    selectedAnswer === option
                      ? "rgb(23, 155, 45)"
                      : "rgb(23, 155, 45)",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmitAnswer} className="submit-button">
            Submit Answer
          </button>
          {isAnswerStatus === false && (
            <div className="wrong-container">
              <p>Your answer is wrong! Try Again.</p>
              <button onClick={handleReload} className="try-again-btn">
                Try Again
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <p className="success">Congratulations! You won the game.</p>
          <div className="success-btn-container">
            <button onClick={handleReload} className="success-btn">
              Replay
            </button>
            <button onClick={handleExit} className="success-btn">
              Exit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;

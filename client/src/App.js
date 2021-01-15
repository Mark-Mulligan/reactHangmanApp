import './App.css';
import Title from './components/Title';
import GeneralBtn from './components/GeneralBtn';
import ChooseLevelContainer from './components/ChooseLevelContainer'
import GameContainer from './components/GameContainer';
import { useState, useEffect } from 'react';
import {indexOfAll} from './util/util.js';

function App() {
  const [mainBtnsState, setMainBtnsState] = useState({
    startBtn: false,
    easyMode: false,
    mediumMode: false,
    hardMode: false
  });
  
  const [word, setWord] = useState(['T', 'E', 'S', 'T'])
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameboard, setGameboard] = useState()

  function generalBtnClick(event) {
    const { name} = event.target;

    setMainBtnsState(prevValue => {
      return {
        ...prevValue,
        [name]: true
      };
    }); 
  }

  function keyboardClick(event) {
    const {value} = event.target;

    if (word.includes(value)) {
      let result = indexOfAll(word, value);
      let updatedBoard = gameboard;

      result.forEach(index => {
        updatedBoard[index] = value;
      })
      setGameboard(updatedBoard);
      setCorrectGuesses(correctGuesses + result.length);
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  }

  function handlePlayAgain() {
    resetGameValues();
    setMainBtnsState(prevValue => {
      return {
        ...prevValue,
        easyMode: false,
        mediumMode: false,
        hardMode: false
      }
    })
  }

  function handleQuit() {
    resetGameValues();
    setMainBtnsState(prevValue => {
      return {
        startBtn: false,
        easyMode: false,
        mediumMode: false,
        hardMode: false
      }
    })
  }

  function resetGameValues() {
    setGameOver(false);
    setCorrectGuesses(0);
    setIncorrectGuesses(0);
    setGameWon(false);
  }

  useEffect(() => {
    if (correctGuesses === word.length) {
      setGameOver(true);
      setGameWon(true);
    } else if (incorrectGuesses >= 8) {
      setGameOver(true);
    }
  }, [correctGuesses, incorrectGuesses, word.length])


  return (
    <div className="App">
      <Title titleText="Hangman Game" />
      {!mainBtnsState.startBtn && <GeneralBtn btnText="Start" clickFunction={generalBtnClick} btnName="startBtn"/>}
      {mainBtnsState.startBtn && !mainBtnsState.easyMode && !mainBtnsState.mediumMode && !mainBtnsState.hardMode ? 
        <ChooseLevelContainer clickFunction={generalBtnClick} setWord={setWord} setGameboard={setGameboard} /> : null}

      {(mainBtnsState.easyMode || mainBtnsState.mediumMode || mainBtnsState.hardMode) ? 
        <GameContainer 
          clickFunction={keyboardClick}
          playAgain={handlePlayAgain}
          handleQuit={handleQuit} 
          display={gameboard} 
          gameWon={gameWon} 
          gameOver={gameOver}
          lettersMissed={incorrectGuesses}
          word={word}  
          /> : null}
    </div>
  );
}

export default App;

import GeneralBtn from './GeneralBtn.js';
import {wordToArray, createGameboardBlanks, checkWord} from '../util/util.js';
const axios = require('axios');

function ChooseLevelContainer(props) {

    function apiCall(event) {
        const {value} = event.target;
        let range = JSON.parse(value);

        axios.get(`/api/randomword?minlength=${range[0]}&maxlength=${range[1]}`)
            .then(function (response) {
                if (checkWord(response.data.word)) {
                    setWordandGameboard(response.data.word);
                    props.clickFunction(event);
                } else {
                    console.log(response.data.word);
                    apiCall(event)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function setWordandGameboard(input) {
        let word = wordToArray(input);
        let blanks = createGameboardBlanks(word);
        props.setWord(word);
        props.setGameboard(blanks);
        console.log(word);
    }

    return ( <div className = "game-difficulty-container"> 
    <p className="difficulty-instruction"> Choose Difficulty</p> 
    <GeneralBtn extraClasses= "difficultyBtn" btnText = "Easy" btnValue = "[3,6]" clickFunction = {apiCall} btnName = "easyMode" /> 
    <p className="difficulty-label">3 - 6 Letter Words</p>
    <GeneralBtn extraClasses = "difficultyBtn" btnText = "Medium" btnValue = "[6,9]" clickFunction = {apiCall} btnName = "mediumMode" />
    <p className="difficulty-label">6 - 9 Letter Words</p> 
    <GeneralBtn extraClasses = "difficultyBtn" btnText = "Hard" btnValue = "[10,40]" clickFunction = {apiCall} btnName = "hardMode" />
    <p className="difficulty-label">10+ Letter Words</p> 
    </div>
    )}

  export default ChooseLevelContainer;
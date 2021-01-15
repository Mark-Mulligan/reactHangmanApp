import Keyboard from './Keyboard';
import WordDisplay from './Worddisplay';
import Gameresult from './Gameresult';
import Scoretracker from './Scoretracker';


function GameContainer(props) {
    return (<div className="container game-container">
        <Scoretracker lettersMissed={props.lettersMissed}/>
        <WordDisplay display={props.display} />
        <Keyboard clickFunction={props.clickFunction}/> 
        {props.gameOver && <Gameresult gameWon={props.gameWon} playAgain={props.playAgain} handleQuit={props.handleQuit} word={props.word}/>}      
    </div>)
}

export default GameContainer;
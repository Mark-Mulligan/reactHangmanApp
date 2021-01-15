import WordBlank from './WordBlank';

function WordDisplay (props) {
    return <div className="word-blank-container">
        {props.display.map((letter, index) => {
            return <WordBlank key={`word-blank-${index}`} letter={letter} />
        })}
    </div>
}

export default WordDisplay;
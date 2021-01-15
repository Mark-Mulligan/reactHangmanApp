import KeyboardBtn from './KeyboardBtn';

function Keyboard (props) {
    const keyBtnLetters = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], 
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], 
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    return <div className="keyboard-container">
        {keyBtnLetters.map((letterArray, index) => {
            return <div className={`keyboard-row-${index}`} key={`keyboard-row-${index}`}>
                {letterArray.map(letter => {
                    return <KeyboardBtn btnText={letter} btnValue={letter} key={`${letter}-btn`} clickFunction={props.clickFunction}/>
                })}
            </div>
        })}
    </div>
}

export default Keyboard;
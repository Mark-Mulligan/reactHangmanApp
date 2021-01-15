import { useState } from "react";

function KeyboardBtn (props) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    function keyboardBtnClick(event) {
        props.clickFunction(event);
        setHasBeenClicked(true);
    }

    return <button 
        className={`btn btn-dark keyboard-btn ${hasBeenClicked && 'disabled'}`} 
        value={props.btnValue}   
        onClick={!hasBeenClicked ? keyboardBtnClick : null}>
            {props.btnText}
        </button>
}

export default KeyboardBtn;
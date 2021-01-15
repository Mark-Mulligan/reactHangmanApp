import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


function Gameresult (props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard="false"
            animation={false}
          >
            <Modal.Header>
                <Modal.Title className="m-auto">Game Over {props.gameWon ? `You Won!` : `You Lost.`}</Modal.Title>
            </Modal.Header>
            <Modal.Footer className="text-center"> 
                <div className="m-auto">
                {props.gameWon ? null : <p>The Word was "{props.word}"</p>}
                    <button className="btn btn-dark m-2" onClick={props.playAgain}>Play Again</button>
                    <button className="btn btn-dark m-2" onClick={props.handleQuit}>Quit</button>
                </div>   
            </Modal.Footer>  
          </Modal>
        </div>
      );
  
}

export default Gameresult;


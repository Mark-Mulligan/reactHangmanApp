function GeneralBtn(props) {
    return <button 
                className={`btn btn-dark ${props.extraClasses}`} 
                name={props.btnName} 
                value={props.btnValue}
                onClick={props.clickFunction}>
                    {props.btnText}
            </button>
}

export default GeneralBtn;

import { useState } from "react";

export default function Button(props){
    const[selectedButton, setSelectedButton] = useState(0)
    const selectedButtonStyles = {backgroundColor:'white', color:'#745E5E'}

    const buttonText = ["$2k","$5k","No limit"]
    return (
        <div className="budget-button-container">
            {buttonText.map((text, i) => (
                <button
                key={text}
                onClick={() => {
                    setSelectedButton(buttonText[i]);
                    props.setValue(text);
                    }
                }
                style={selectedButton === buttonText[i] ? selectedButtonStyles : {}}
                 >{text}</button>
            ))}
        </div>
    )
}
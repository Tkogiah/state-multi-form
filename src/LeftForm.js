import { useState } from "react"
import Button from "./Buttons"

export default function LeftForm(props) {
    const[email, setEmail] = useState('')
    const[budget, setBudget] = useState('$2k')
    const[userInput, setUserInput] = useState('')
    console.log(email, budget, userInput)
    return (
        <div className="left-form">
            <div className="left-form-content">
                <h2 className="left-form-heading">{props.heading}</h2>
                
                {(() => {
                    if(props.state === 0) {
                        return (
                            <input className='left-form-email' 
                            placeholder="what's your email?" 
                            onChange={e => setEmail(e.target.value)} />
                        )
                    }else if(props.state === 1) {
                        return (
                            <Button 
                                setValue={setBudget}    
                            />
                        )
                    }else if(props.state === 2) {
                        return (
                            <input className='left-form-email' 
                            value={props.info}
                            onChange={e => setUserInput(e.target.value)}/>
                        )
                    }else {
                        return (
                            <div />
                        ) 
                    }
                })()}
                

                {props.state < 3 ?
                    <div 
                    className="next-button"
                    onClick={props.next}>Next</div>
                    :
                    alert(email + budget + userInput)
                }
            </div>            
        </div>
    )
}
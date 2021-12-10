import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnClick = ()=>{
        // console.log("u click on button")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("You enter any text")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className="container">
            <div className="mb-3">
            <h3 className="form-label">{props.heading}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
         </div>
         <div className="container my-4">
             <h1>Word Summary</h1>
             <p>{text.split(" ").length} words {text.length} character</p>
             <p>{0.008 * text.split(" ").length} minute read </p>
             <h2>Preview</h2>
             <p>{text} </p>
         </div>

                    </>
    )
}

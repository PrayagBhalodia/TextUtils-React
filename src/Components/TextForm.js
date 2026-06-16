import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpperChange = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowerChange = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleCaptalizeChange = () => {
        let newTempText1 = text.toLowerCase().split(' ')
        for (let i = 0; i < newTempText1.length; i++) {
            if (newTempText1[i]) {
                let temp = newTempText1[i].slice(0, 1).toUpperCase() + newTempText1[i].slice(1);
                newTempText1[i] = temp;
            }
        }
        let temp1 = newTempText1.join(' ')

        let newTemp2Text = temp1.split('\t')
        for (let i = 0; i < newTemp2Text.length; i++) {
            newTemp2Text[i] = newTemp2Text[i].charAt(0).toUpperCase() + newTemp2Text[i].slice(1)
        }
        let temp2 = newTemp2Text.join('\t')

        let newText = temp2.split('\n')
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
        }
        setText(newText.join('\n'))
        props.showAlert("Converted to Capitalized Case", "success")
    }

    const handleLineChange = () => {
        let newText = text.toLowerCase().split('\n')
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
        }
        setText(newText.join('\n'))
        props.showAlert("Converted to Line Case", "success")
    }

    const handleSentenceChange = () => {
        let newText = text.toLowerCase().split('. ')
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
        }

        let newTempText = newText.join('. ').split('\n')
        for (let i = 0; i < newTempText.length; i++) {
            newTempText[i] = newTempText[i].charAt(0).toUpperCase() + newTempText[i].slice(1)
        }
        newText = newTempText.join('\n')

        setText(newText)
        props.showAlert("Converted to Sentence Case", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(' ')
        newText = newText.filter((word) => word !== "")
        setText(newText.join(' '))
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{
                        color: props.mode === 'light' ? 'black' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529'
                    }} >
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpperChange}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowerChange}>lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCaptalizeChange}>Capitalized Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLineChange}>Line case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceChange}>Sentence case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-1 my-1" onClick={() => setText("")}>Clear Text</button>
            </div>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Text Summary</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{(text.split(' ').filter((word) => word !== "").length)} words and {text.length} characters and {text.split('\n').length} lines</p>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.008 * text.split(' ').filter((word) => word !== "").length} Minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}> {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter Text Here",
    mode: "light"
}
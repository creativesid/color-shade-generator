import React from 'react'

const ShadeInput = (props) => {
    return (
        <div className="input">
            <div className="logo"><b>Color Shade Generator</b></div>
            <input type="text" className="searchbox" 
                value={props.color} 
                onChange={e=>props.onInputChange(e.target.value)}
            />
        </div>
    )
}

export default ShadeInput

import React from "react";

function BoxColor (props) {
    const { r, g, b } = props;
    const backgroundColor = 'rgb(${r}, ${g}, ${b})';

    return (
        <div className="BoxColor" style= {{backgroundColor}}>
        <p>
            rgb({r}, {g}, {b})
        </p>
        </div>
    )
}

export default BoxColor;
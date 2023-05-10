import React from "react";

function Random (props) {
    const { min, max } = props;
    const RandomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <div className="random">
            Random value between {min} and {max} = &gt; {RandomNumber}
        </div>
    )
}

export default Random;

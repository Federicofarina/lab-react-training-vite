import React from "react";

function Greetings(props) {
    const { lang, children } = props;

    let greeting;

    switch(lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hello';
    }
    return (
        <div className="greetings">
            {greeting} {children}
        </div>
    );
}
export default Greetings;
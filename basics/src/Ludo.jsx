import {useState} from "react";

function Ludo() {
    // Initialize player colors and their scores
    let [color, setrd] = useState({red: 0, green: 0, yellow: 0, blue: 0});

    // Function to update the red player's score
    let changeRed = () => {
        setrd(prevColor => ({
            ...prevColor,   // Keep other colors unchanged
            red: prevColor.red + 1   // Increment red player's score
        }));
    };

    return (
        <div>
            <div>
                <p>Red Player: {color.red}</p>
                <button onClick={changeRed} style={{backgroundColor: "red"}}>+1</button>
            </div>
            <div>
                <p>Yellow Player: {color.yellow}</p>
                <button onClick={() => setrd(prevColor => ({...prevColor, yellow: prevColor.yellow + 1}))} style={{backgroundColor: "yellow"}}>+1</button>
            </div>
            <div>
                <p>Green Player: {color.green}</p>
                <button onClick={() => setrd(prevColor => ({...prevColor, green: prevColor.green + 1}))} style={{backgroundColor: "green"}}>+1</button>
            </div>
            <div>
                <p>Blue Player: {color.blue}</p>
                <button onClick={() => setrd(prevColor => ({...prevColor, blue: prevColor.blue + 1}))} style={{backgroundColor: "blue"}}>+1</button>
            </div>
        </div>
    );
}

export default Ludo;

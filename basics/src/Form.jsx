import { useState } from 'react';

function Form() {
    const [username, setUsername] = useState("");

    const handleUser = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    };

    return (
        <form action="">
            <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={handleUser}
            />
        </form>
    );
}

export default Form;

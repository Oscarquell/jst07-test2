import React, {useState} from 'react';
import axios from "axios";

const App = () => {

    const [name, setName] = useState({
        message: ''
    })

    async function sendMessage () {
        const response = await axios.post('https://codify-graduation-project.vercel.app/send-message', name)
        console.log(response.data)
    }
    
    return (
        <div>
            <h1>Тест веток GITHUB</h1>
            <input type="text" placeholder='Ваше имя' onChange={ (event) => setName({message: event.target.value}) }/>
            <input type="button" value='Отправить' onClick={sendMessage}/>
        </div>
    );
};

export default App;
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cards from "./components/Cards";

const list = [
    {
        id: 0,
        text: 'Make a beautiful icon'
    },
    {
        id: 1,
        text: 'Change background'
    },
    {
        id: 2,
        text: 'Transfer the project'
    },
]

const style = {
    "width":"700px"
}

const App = () => {

    const [todolist, setTodolist] = useState(list)

    return (

        <div className='container'>
            <div className='card' style={style} >
               <Cards
                   todolist={todolist}
                   setTodolist={setTodolist}
               />
            </div>
        </div>
    );
};

export default App;
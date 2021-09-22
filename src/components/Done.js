import React, {useState} from 'react';
import CardMenu from "./CardMenu";

const Done = (props) => {

    const newStyle = {
        "color": 'rgb(69,217,36)',
    }
    const inputStyle = {
        "margin": '0 6px 0 0'
    }
    const style = {
        "color": 'rgb(217,36,36)',
        "font-weight": "bold",
    }

    const {cards, todolist, setTodolist} = props

    const [take, setTake] = useState(true)

    const toggle = () => {
        setTake(!take)
    }

    return (
        <div>
            <input style={inputStyle} type="checkbox" onChange={toggle}/>
            {take === true ?
                <span style={style}>
                    {cards.text}
                    <CardMenu
                        cards={cards}
                        todolist={todolist}
                        setTodolist={setTodolist}
                    />

                            </span>
                : <s style={newStyle}>{cards.text}</s>}

        </div>
    );
};

export default Done;
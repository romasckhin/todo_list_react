import React from 'react';
import Done from "./Done";

const TextCard = (props) => {


    const {cards, todolist, setTodolist} = props

    return (

        <div className={'card-text'}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <li className="list-group-item">
                          <Done
                              cards={cards}
                              todolist={todolist}
                              setTodolist={setTodolist}
                          />
                    </li>
                </li>
            </ul>
        </div>
);
};

export default TextCard;
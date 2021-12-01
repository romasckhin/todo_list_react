import React from 'react';
import TitleCard from "./TitleCard";
import TextCard from "./TextCard";
import AddNewCard from "./AddNewCard";

const Cards = (props) => {

    const {todolist,setTodolist} = props

    const style = {
        "background":'rgb(215,234,214)'
    }

    return (

        <div style={style} className={'card-body'}>
            <TitleCard
                todolist={todolist}
            />
            <AddNewCard
                setTodolist={setTodolist}
                todolist={todolist}
            />
            {todolist.map(el =>
                <TextCard
                    cards={el}
                    todolist={todolist}
                    setTodolist={setTodolist}
                />)}

        </div>
    );
};

export default Cards;
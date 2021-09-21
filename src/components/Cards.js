import React from 'react';
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import AddNewCard from "./AddNewCard";

const Cards = (props) => {

    const {todolist,setTodolist} = props

    const style = {
        "background":'rgb(215,234,214)'
    }

    return (

        <div style={style} className={'card-body'}>
            <CardTitle/>
            <AddNewCard
                setTodolist={setTodolist}
                todolist={todolist}
            />
            {todolist.map(el =>
                <CardText
                    cards={el}
                    todolist={todolist}
                    setTodolist={setTodolist}
                />)}

        </div>
    );
};

export default Cards;
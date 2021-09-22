import React from 'react';

const DeleteCard = (props) => {

    const style = {
        "margin": '0 0 0 15px',
        "right": "450px",
        "padding": "1px",
        "height": "26px",
        "width": "48.3px"
    }

    const {cards,setTodolist,todolist} = props

    const deleteCard = (id) => {
        const del = todolist.filter(el => el.id !== id)
        setTodolist(del)
    }

    return (

        <>

            <button type="button" style={style} onClick={() => deleteCard(cards.id)}
                    className="btn btn-outline-danger">delete
            </button>

        </>
    );
};

export default DeleteCard;
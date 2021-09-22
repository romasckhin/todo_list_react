import React, {useState} from 'react';
import DeleteCard from "./DeleteCard";

const CardMenu = (props) => {

    const styleButton = {
        "margin": '0 0 0 6px',
        "padding": "1px",
        "height": "26px",
        "width": "48.3px"
    }

    const {cards, todolist, setTodolist} = props

    const [input, setInput] = useState(cards.text)
    const [take, setTake] = useState(true)

    const toggle = () => {
        setTake(!take)
    }


    const editCard = (id) => {
        const edit = todolist.map(el => el.id === id ? {...el, text: input} : el)
        setTodolist(edit)
        toggle()
    }

    const addNewText = (event) => {
        setInput(event.target.value)
    }

    return (

        <>

            {take === true ?
                <>
                    <button style={styleButton} onClick={toggle} type="button"
                            className="btn btn-outline-success">edit
                    </button>

                    <DeleteCard
                        cards={cards}
                        todolist={todolist}
                        setTodolist={setTodolist}
                    />
                </>
                :
                <>
                    <input type="text" value={input} onChange={addNewText}/>
                    <button style={styleButton} onClick={() => editCard(cards.id)} type="button"
                            className="btn btn-primary">add
                    </button>
                    <button style={styleButton} onClick={toggle} type="button"
                            className="btn btn-secondary">cancel
                    </button>
                </>
            }

        </>
    );
};

export default CardMenu;
import React, {useState} from 'react';

const CardText = (props) => {

    const style = {
        "color": 'rgb(217,36,36)',
        "font-weight": "bold",
    }

    const styleS = {
        "color": 'rgb(69,217,36)',
    }

    const styleInput = {
        "margin": '0 6px 0 0'
    }
    const styleButton = {
        "margin": '0 0 0 6px',
        "padding": "1px",
        "height": "26px",
        "width": "48.3px"
    }


    const {cards, todolist, setTodolist} = props

    const [take, setTake] = useState(true)
    const [takeOne, setOneTake] = useState(true)
    const [input, setInput] = useState(cards.text)

    const toggle = () => {
        setTake(!take)
    }
    const toggleOne = () => {
        setOneTake(!takeOne)
    }
    const styleDelete = {
        "margin": '0 0 0 15px',
        "right":"450px",
        "padding": "1px",
        "height": "26px",
        "width": "48.3px"
    }
    const edtiCard = (id) => {
        const edit = todolist.map(el => el.id === id? {...el, text: input} : el)
        setTodolist(edit)
        toggleOne()
    }

    const addNewText = (event) => {
        setInput(event.target.value)
    }

    return (

        <div className={'card-text'}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <li className="list-group-item">

                            <input style={styleInput} type="checkbox" onChange={toggle}/>
                            {take === true ?
                                <span

                                    style={style}>

                                    {cards.text}
                                    {takeOne === true ?
                                        <>
                                        <button style={styleButton} onClick={toggleOne} type="button"
                                                className="btn btn-outline-success">edit
                                        </button>

                                        <button type="button" style={styleDelete}
                                                className="btn btn-outline-danger">delete</button>

                                        </>
                                        :
                                        <>
                                        <input type="text" value={input} onChange={addNewText}/>
                                        <button style={styleButton} onClick={() => edtiCard(cards.id)} type="button"
                                        className="btn btn-primary">add
                                        </button>
                                        <button style={styleButton} onClick={toggleOne} type="button"
                                        className="btn btn-secondary">cancel
                                        </button>
                                        </>
                                    }

                            </span>
                                : <s style={styleS}>{cards.text}</s>}
                    </li>
                </li>
            </ul>
        </div>
);
};

export default CardText;
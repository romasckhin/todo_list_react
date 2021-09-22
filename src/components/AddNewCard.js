import React, {useState} from 'react';

const AddNewCard = (props) => {

    const {todolist, setTodolist} = props

    const [newText, setNewText] = useState('')

    const style = {
        "display": "flex",
        justifyContent: " flex-end",
        "margin": "6px 0 -10px 0"
    }

    const addNewCard = () => {
        const newCards = [...todolist, {id: Math.random(), text: newText}]
        setTodolist(newCards)
        setNewText('')
    }
    const newTextCard = (event) => {
        setNewText(event.target.value)
    }
    return (

        <div style={style}>
                <div className="input-group mb-3">
                    <input type="text" value={newText} onChange={newTextCard} className="form-control"
                           placeholder="↓ Write new text ↓"
                           aria-describedby="button-addon2"/>

                    <button onClick={addNewCard} className="btn btn-success" type="button" id="button-addon2">Add new
                        Card
                    </button>
                </div>

        </div>
    );
};

export default AddNewCard;
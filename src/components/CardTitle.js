import React from 'react';

const CardTitle = (props) => {

    const style = {
        "background":'rgb(181,215,178)'
    }

    return (
        <div style={style} className={'card-body'}>
            <h2>Todo list</h2>
        </div>
    );
};

export default CardTitle;
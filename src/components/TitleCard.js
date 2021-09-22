import React from 'react';

const TitleCard = () => {

    const style = {
        "background":'rgb(181,215,178)',
    }
    const styleTitle = {
        "color":'rgb(35,32,21)',
        "font-weight": "bold"
    }
    return (
        <div style={style} className={'card-body'}>
            <h2  style={styleTitle}>Todo list</h2>
        </div>
    );
};

export default TitleCard;
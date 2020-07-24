import React from 'react';

const Message = (props) => {
    return (
        <div className={`card w-25 my-2 p-2 ${props.align}`}>
            <p className="card-text">{props.text}</p>
        </div>
    )
}

export default Message;